import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('expense', params.expense_id);
  },

  actions: {

    save(properties) {
      let expense = this.controller.get('model');
      expense.setProperties(properties);
      expense.save().then(() => {
        this.transitionTo('group', expense.get('group.id'));
      });
    },

    delete() {
      let expense = this.controller.get('model'),
          groupId = expense.get('group.id');
      expense.deleteRecord();
      expense.save().then(() => {
        this.transitionTo('group', groupId);
      });
    }

  }

});

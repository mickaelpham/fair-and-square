import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('group', params.group_id);
  },

  actions: {

    save(properties) {
      let group = this.controller.get('model');
      group.setProperties(properties);
      group.save().then(() => {
        this.transitionTo('groups.show', group);
      });
    },

    cancel() {
      this.transitionTo('groups.show', this.controller.get('model'));
    },

    delete() {
      let group = this.controller.get('model');
      group.deleteRecord();
      group.save().then(() => {
        this.transitionTo('groups.index');
      });
    }

  }

});

import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('group', params.id);
  },

  actions: {

    save(properties) {
      let group = this.controller.get('model');
      group.setProperties(properties);
      group.save().then(() => {
        this.transitionTo('groups.index')
      });
    },

    cancel() {
      this.transitionTo('groups.index');
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

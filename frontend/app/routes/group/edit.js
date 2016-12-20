import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    save(properties) {
      let group = this.controller.get('model');
      group.setProperties(properties);
      group.save().then(() => {
        this.transitionTo('group', group);
      });
    },

    cancel() {
      this.transitionTo('group', this.controller.get('model'));
    },

    delete() {
      let group = this.controller.get('model');
      group.deleteRecord();
      group.save().then(() => {
        this.transitionTo('groups');
      });
    }

  }

});

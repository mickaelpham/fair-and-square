import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    save(properties) {
      let group = this.controller.get('model');
      properties.group = group;
      this.store.createRecord('expense', properties).save().then(() => {
        this.transitionTo('group', group);
      });
    }

  }
});

import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    save(properties) {
      this.store.createRecord('group', properties).save().then(() => {
        this.transitionTo('groups.index');
      });
    },

    cancel() {
      this.transitionTo('groups.index');
    }

  }

});

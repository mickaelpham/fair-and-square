import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('group');
  },

  actions: {

    saveGroup(id, attributes) {
      if (id) {
        this.store.find('group', id).then((group) => {
          group.setProperties(attributes);
          group.save();
        });
      } else {
        let record = this.store.createRecord('group', attributes);
        record.save();
      }
    }

  }

});

import Ember from 'ember';

export default Ember.Component.extend({

  didReceiveAttrs() {
    if (this.get('exists')) {
      this.set('name', this.get('group.name'));
      this.set('description', this.get('group.description'));
    }
  },

  isNew:  Ember.computed.empty('group'),
  exists: Ember.computed.not('isNew'),

  actions: {

    onSubmit() {
      this.get('save')({
        name:        this.get('name'),
        description: this.get('description')
      });
    },

    onCancel() {
      this.get('cancel')();
    },

    onDelete() {
      this.get('delete')();
    }

  }

});

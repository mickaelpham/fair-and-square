import Ember from 'ember';

export default Ember.Component.extend({

  isNew: Ember.computed.empty('account'),

  actions: {

    onSubmit() {
      this.get('saveGroup')(this.get('account.id'), {
        name:        this.get('name'),
        description: this.get('description')
      });
    }

  }

});

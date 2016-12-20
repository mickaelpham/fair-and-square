import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  actions: {

    onSubmit() {
      this.get('save')({
        description: this.get('description'),
        amount:      this.get('amount'),
        paidAt:      this.get('date')
      });
    }

  }

});

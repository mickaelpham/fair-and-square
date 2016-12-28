import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  didReceiveAttrs() {
    if (this.get('exists')) {
      this.set('description', this.get('expense.description'));
      this.set('amount',      this.get('expense.amount'));
      this.set('paidAt',      this.get('expense.paidAt'));
    }
  },

  isNew:  Ember.computed.empty('expense'),
  exists: Ember.computed.not('isNew'),

  actions: {

    onSubmit() {
      this.get('save')({
        description: this.get('description'),
        amount:      this.get('amount'),
        paidAt:      this.get('paidAt')
      });
    }

  }

});

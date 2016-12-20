import DS from 'ember-data';

export default DS.Model.extend({
  description:     DS.attr('string'),
  paidAt:          DS.attr('date'),
  amountFormatted: DS.attr('string'),
  group:           DS.belongsTo('group')
});

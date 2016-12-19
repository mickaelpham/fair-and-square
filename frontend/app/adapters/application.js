import Ember from 'ember';
import DS from 'ember-data';

const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({

  namespace: 'api',

  pathForType(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  }

});

import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    // force reload to ensure we are sideloading expenses
    return this.store.findRecord('group', params.group_id, { reload: true });
  }

});

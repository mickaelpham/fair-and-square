import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('groups', function() {
    this.route('new');
    // this.route('show', { path: '/:group_id' });
    // this.route('edit', { path: '/:group_id/edit' });
    // this.route('addExpense', { path: '/:group_id/add-expense' });
  });

  this.route('group', { path: '/groups/:group_id' }, function() {
    this.route('edit');
  });

  // this.route('group', { path: '/groups/:group_id' }, function() {
  //   this.route('edit');
  // });
});

export default Router;

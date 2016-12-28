import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('groups', function() {
    this.route('new');
  });

  this.route('group', { path: '/groups/:group_id' }, function() {
    this.route('edit');
    this.route('add-expense');
  });

  this.route('expense', { path: '/expenses/:expense_id' });
});

export default Router;

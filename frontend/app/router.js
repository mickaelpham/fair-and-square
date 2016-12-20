import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('groups', function() {
    this.route('new');
    this.route('show', { path: '/:group_id' });
    this.route('edit', { path: '/:group_id/edit' });
  });
});

export default Router;

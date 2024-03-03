import EmberRouter from '@ember/routing/router';
import config from 'website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route ('main', {path: '/'});
  this.route ('bible', function () {
    this.route ('translate');
    this.route ('saved');
  });
  this.route('account', function() {
    this.route('create');
    this.route('password');
    this.route('login');
  });
});

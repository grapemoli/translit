import Route from '@ember/routing/route';

export default class AccountIndexRoute extends Route {
  setupController (controller) {
    super.setupController (...arguments);

    controller.reset();
  }
}

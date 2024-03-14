import Route from '@ember/routing/route';

export default class AccountLoginRoute extends Route {
  // Reset fields when entering and leaving the Bible route such that the
  // previous visits to this route won't affect the result.
  setupController (controller) {
    super.setupController (...arguments);

    controller.username = "";
    controller.password = "";
    controller.errorMessage = "";
    controller.errorPresent = false;
  }

  resetController (controller, isExiting) {
    super.resetController (...arguments);

    if (isExiting) {
      controller.username = "";
      controller.password = "";
      controller.errorMessage = "";
      controller.errorPresent = false;
    }
  }

}

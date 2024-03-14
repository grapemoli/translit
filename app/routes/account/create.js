import Route from '@ember/routing/route';

export default class AccountCreateRoute extends Route {
  // Reset fields when entering and leaving the Bible route such that the
  // previous visits to this route won't affect the result.
  setupController (controller) {
    super.setupController (...arguments);

    controller.email = '';
    controller.username = '';
    controller.password1 = '';
    controller.password2 = '';
    controller.errorMessage = '';
    controller.errorPresent = false;
  }

  resetController (controller, isExiting) {
    super.resetController (...arguments);

    if (isExiting) {
      controller.email = '';
      controller.username = '';
      controller.password1 = '';
      controller.password2 = '';
      controller.errorMessage = '';
      controller.errorPresent = false;
    }
  }
}

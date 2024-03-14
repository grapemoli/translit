import Route from '@ember/routing/route';
import {tracked} from "@glimmer/tracking";

export default class AccountPasswordRoute extends Route {
  // Reset fields when entering and leaving the Bible route such that the
  // previous visits to this route won't affect the result.
  setupController (controller) {
    super.setupController (...arguments);

    controller.password1 = "";
    controller.password2 = "";
    controller.errorMessage = "";
    controller.errorPresent = false;
    controller.validPasswords = false;
  }

  resetController (controller, isExiting) {
    super.resetController (...arguments);

    if (isExiting) {
      controller.password1 = "";
      controller.password2 = "";
      controller.errorMessage = "";
      controller.errorPresent = false;
      controller.validPasswords = false;
    }
  }
}

import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

export default class AccountLoginController extends Controller {
  @service
  router;

  @tracked
  username;

  @tracked
  password;

  @tracked
  errorMessage;

  @tracked
  errorPresent = false;

  // The login button is disabled if false.
  @tracked
  valid = false;

  @action
  clearFields () {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
    this.errorPresent = false;
  }

  @action
  check () {
    if (this.username && this.password) {
      this.valid = true;
    }
    else {
      this.valid = false;
    }
  }

  @action
  login () {
    // TODO: implement logging in.
    console.log ("Logged in.")
    this.router.transitionTo ("main");

    // TODO: If failed to log in, print the reason why.

    // Check for username AND email.
  }

}

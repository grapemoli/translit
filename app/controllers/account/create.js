import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AccountCreateController extends Controller {
  @service
  router;

  @tracked
  username;

  @tracked
  email;

  @tracked
  password1;

  @tracked
  password2;

  @tracked
  errorMessage;

  @tracked
  errorPresent = false;

  // The createAccount button is disabled if false.
  @tracked
  valid = false;

  @action
  clearFields () {
    this.username = '';
    this.password1 = '';
    this.password2 = '';
    this.email = '';
    this.errorMessage = '';
    this.errorPresent = false;
  }

  @action
  async check () {
    if (this.username && this.email) {

      // Everything is inputted, but the two passwords either match or don't.
      if (this.password1 && this.password2) {

        // Matching passwords--valid!
        if (this.password1 === this.password2) {
          this.valid = true;
          this.errorPresent = false;
        }
        // Unmatching passwords--not valid.
        else {
          this.errorMessage = 'Passwords do not match.';
          this.errorPresent = true;
        }
      }
    }
  }


  @action
  create () {
    // TODO: implement creating an account.
    console.log ('Created an account.')
    this.router.transitionTo ('main');

    // TODO: If failed to log in, print the reason why.

    // Check for username AND email being unique.
  }

}

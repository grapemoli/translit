import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class AccountPasswordController extends Controller {
  @tracked
  oldPassword;

  @tracked
  newPassword1;

  @tracked
  newPassword2;

  @tracked
  errorMessage;

  @tracked
  errorPresent = false;

  // The change password button is disabled if false.
  @tracked
  validPasswords = false;

  // Checks that the password fields match each other.
  @action
  checkPasswords () {
    // Hide any previous error message.
    this.errorPresent = false;

    if (this.newPassword1 && this.newPassword2) {

      if (this.newPassword1 === this.newPassword2) {
        // Matching passwords.
        this.validPasswords = !!this.oldPassword;
        this.errorPresent = false;

      } else {
        // Non-matching fields.
        this.validPasswords = false;
        this.errorMessage = 'Passwords do not match.';
        this.errorPresent = true;

      }

    } else {
      // One password isn't typed.
      this.validPasswords = false;
      this.errorPresent = false;
    }
  }

  @action
  clearPasswordFields () {
    this.oldPassword = '';
    this.newPassword1 = '';
    this.newPassword2 = '';
    this.validPasswords = false;
    this.errorPresent = false;
  }

  // Send a change password request to the backend.
  @action
  async changePassword () {
    // TODO: implement change password.
    console.log ('Password changed!');
    /*
    if (this.validPasswords) {
      const account = await this.store.findRecord (
        'account',
        this.session.currentUser.id
      );

      const password = {
        current: this.oldPassword,
        // Since the passwords are valid, newPassword1 and newPassword2 are the same.
        new: this.newPassword1,
      };

      // Attempt to change the password, displaying any errors that occur.
      try {
        await account.changePassword ({password});

        // Go back to the account page.
        this.replaceRoute ('account');
      } catch (err) {
        this.errorMessage = err.errors[0].detail;
        this.errorPresent = true;
      }
    }
    */
  }
}

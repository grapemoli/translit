import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {inject as service} from '@ember/service';

export default class AccountIndexController extends Controller {
  @service
  router;

  @tracked
  username = "";

  @tracked
  openEditDialog;

  @tracked
  editDialogTitle;

  @tracked
  editDialogLabel;

  @tracked
  currentValue;

  @tracked
  editPropertyName;

  @action
  edit (options = {}) {
    const {title, label, propertyName} = options;

    this.editDialogTitle = title;
    this.editDialogLabel = label;
    this.editPropertyName = propertyName;

    // TODO: Implement changing the username.
    //this.currentValue = _.get (this.model, this.editPropertyName, '');

    console.log ('Changed the username.');

    this.openEditDialog = true;
  }

  @action
  async saveEdit () {
    await this.save (this.editPropertyName, this.currentValue);
  }

  @action
  async save (propertyName, value) {
    // TODO: implement saving the username.
    try {
      _.set (this.model, propertyName, value);
      await this.model.save ();

      this.snackbar.show ('Successfully updated your profile.');
    } catch (err) {
      this.snackbar.showError (err);
    }
  }

  reset () {
    this.openEditDialog = false;
  }

  @action
  async signOut () {
    // TODO: implement signout.
    /*
    try {
      await this.session.signOut (true);

      this.snackbar.show ('You have been signed out.');
      this.replaceRoute ('auth.sign-in');
    } catch (err) {
      this.snackbar.showError (err);
    }
     */
    console.log ("signed out was clicked");
  }

  @action
  toCreate () {
    this.router.transitionTo ("account.create");
  }

  @action
  toLogin () {
    this.router.transitionTo ("account.login");
  }
}

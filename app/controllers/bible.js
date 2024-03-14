import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class BibleController extends Controller {
  @tracked
  textInput = "";

  @action
  submit () {
    if (this.textInput !== "") {
      console.log (this.textInput);
    }
  }

  @action
  reset () {
    this.textInput = "";
  }
}

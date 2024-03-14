import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class BibleController extends Controller {
  @tracked
  textInput = '';

  @service
  router;

  @action
  submit () {
    if (this.textInput !== '') {
      console.log (this.textInput);
    }
  }

  @action
  reset () {
    this.textInput = '';
  }
}

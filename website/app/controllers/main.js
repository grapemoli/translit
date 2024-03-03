import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';


export default class MainController extends Controller {
  @tracked
  openMenu = false;

  @action
  toggleMenu () {
    this.openMenu = !this.openMenu;
  }
}

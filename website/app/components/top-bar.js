import Component from '@glimmer/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import {tracked} from '@glimmer/tracking';

export default class TopBarComponent extends Component {
  @tracked
  openMenu = false;

  @service
  router;

  @action
  toggleMenu () {
    this.openMenu = !this.openMenu;
  }

  @action
  toAccount () {
    this.router.transitionTo ('account');
  }

  @action
  toHome () {
    this.router.transitionTo ('main');
  }

  @action
  toBible () {
    this.router.transitionTo ('bible');
  }
}

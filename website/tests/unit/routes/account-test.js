import { module, test } from 'qunit';
import { setupTest } from 'website/tests/helpers';

module('Unit | Route | account', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:account');
    assert.ok(route);
  });
});

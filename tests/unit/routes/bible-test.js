import { module, test } from 'qunit';
import { setupTest } from 'website/tests/helpers';

module('Unit | Route | bible', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bible');
    assert.ok(route);
  });
});

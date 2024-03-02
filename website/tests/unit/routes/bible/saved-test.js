import { module, test } from 'qunit';
import { setupTest } from 'website/tests/helpers';

module('Unit | Route | bible/saved', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bible/saved');
    assert.ok(route);
  });
});

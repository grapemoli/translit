import { module, test } from 'qunit';
import { setupTest } from 'website/tests/helpers';

module('Unit | Route | bible/translate', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bible/translate');
    assert.ok(route);
  });
});

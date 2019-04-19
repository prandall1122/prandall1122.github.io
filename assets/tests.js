'use strict';

define("indy-dev-services/tests/integration/components/main-nav-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | main-nav', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VUQvmUmv",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"main-nav\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fYUaJx9L",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"main-nav\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("indy-dev-services/tests/integration/components/menu-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | menu-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JeySt+xV",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"menu-bar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "l1HWbsOW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"menu-bar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("indy-dev-services/tests/integration/components/page-logo-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | page-logo', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CgNF0eL6",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"page-logo\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QyBBJ1N9",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-logo\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("indy-dev-services/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/main-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-nav.js should pass ESLint\n\n');
  });
  QUnit.test('components/menu-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/menu-bar.js should pass ESLint\n\n');
  });
  QUnit.test('components/page-logo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-logo.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("indy-dev-services/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('indy-dev-services/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'indy-dev-services/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('indy-dev-services/templates/components/main-nav.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'indy-dev-services/templates/components/main-nav.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('indy-dev-services/templates/components/menu-bar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'indy-dev-services/templates/components/menu-bar.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('indy-dev-services/templates/components/page-logo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'indy-dev-services/templates/components/page-logo.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('indy-dev-services/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'indy-dev-services/templates/home.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('indy-dev-services/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'indy-dev-services/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("indy-dev-services/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/main-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-nav-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/menu-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/menu-bar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/page-logo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-logo-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("indy-dev-services/tests/test-helper", ["indy-dev-services/app", "indy-dev-services/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("indy-dev-services/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("indy-dev-services/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('indy-dev-services/config/environment', [], function() {
  var prefix = 'indy-dev-services';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('indy-dev-services/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

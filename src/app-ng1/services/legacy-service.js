/*
Webpack supports multiple module definitions (AMD, CommonJS, ES2015...).
The resulting bundle is an IIFFE that needs NO additional module loader (like requirejs)!
 */
define([], function () {

  legacyService.inject = [];

  function legacyService() {
    console.log('legacyService');
  }

  legacyService.prototype.doSomething = function () {
    console.log('Executing method "doSomething" of ng1 legacy service.');
  };

  return legacyService;
});


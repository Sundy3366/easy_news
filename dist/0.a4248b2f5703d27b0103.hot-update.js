webpackHotUpdate(0,{

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\nexports['default'] = counter;\n\nvar _actionsCounter = __webpack_require__(115);\n\nfunction counter(state, action) {\n  if (state === undefined) state = { one: { id: 1, counter: 0 }, two: { id: 2, counter: 0 }, three: { id: 3, counter: 0 } };\n\n  switch (action.type) {\n    case _actionsCounter.LOVE_COUNTER_ONE:\n      console.log(state.one.counter);\n      return state.one.counter + 1;\n    case _actionsCounter.LOVE_COUNTER_TWO:\n      return state.two.counter + 1;\n    case _actionsCounter.LOVE_COUNTER_THREE:\n      return state.three.counter + 1;\n    default:\n      return state;\n  }\n}\n\n/*\n state={\n\tone:{id:1,counter:0 },\n\ttwo:{id:2,counter:0},\n\tthree:{id:3,counter:0}\n}\n*/\nmodule.exports = exports['default'];//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvY291bnRlci5qcz81NWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPVkVfQ09VTlRFUl9PTkUsTE9WRV9DT1VOVEVSX1RXTyxMT1ZFX0NPVU5URVJfVEhSRUUgfSBmcm9tICcuLi9hY3Rpb25zL2NvdW50ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50ZXIoc3RhdGUgPSB7b25lOntpZDoxLGNvdW50ZXI6MCB9LHR3bzp7aWQ6Mixjb3VudGVyOjB9LHRocmVlOntpZDozLGNvdW50ZXI6MH19LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9WRV9DT1VOVEVSX09ORTpcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5vbmUuY291bnRlcik7XG4gICAgICByZXR1cm4gc3RhdGUub25lLmNvdW50ZXIgKyAxXG4gICAgY2FzZSBMT1ZFX0NPVU5URVJfVFdPOlxuXHQgcmV0dXJuIHN0YXRlLnR3by5jb3VudGVyICsgMVxuICAgIGNhc2UgTE9WRV9DT1VOVEVSX1RIUkVFOlxuXHQgcmV0dXJuIHN0YXRlLnRocmVlLmNvdW50ZXIgKyAxXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG4vKlxuIHN0YXRlPXtcblx0b25lOntpZDoxLGNvdW50ZXI6MCB9LFxuXHR0d286e2lkOjIsY291bnRlcjowfSxcblx0dGhyZWU6e2lkOjMsY291bnRlcjowfVxufVxuKi9cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3JlZHVjZXJzL2NvdW50ZXIuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})
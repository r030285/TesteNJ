var assert = require("assert");
var index = require("./index.js");

describe('Teste', function() {
  describe('method', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(index.method(1), 3);
    });
  });
});

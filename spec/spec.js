const assert = require("chai");

describe('Suite title goes here', () => {
    it('Passing Test', () => {
        assert.equal(1, 1);
    });
    it('Failing Test', () => {
        assert.equal(1, 0);
    });
    it.skip('Skipping Test', () => {
        assert.equal(1, 0);
    });
});
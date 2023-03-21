let assert = require('chai').assert;
let actualResult = require('../new_file_2');

describe('First test block', function () {
    it('actualResult should return Hello World', function () {
        assert.equal(actualResult(), 'Hello World!!!');
    });
});
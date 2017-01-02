'use strict';

let expect = require('expect'),
    data = require('./data/data'),
    lib = require('../index');

describe('Valid puzzle', function () {
    it('should be valid', function (done) {
        expect(lib.isValid(data.validpuzzle)).toBe(true);
        done();
    });
    it('should be invalid length', function (done) {
        expect(lib.isValid(data.invalidlength)).toBe(false);
        done();
    });
    it('should be invalid rows', function (done) {
        expect(lib.isValid(data.invalidrows)).toBe(false);
        done();
    });
    it('should be invalid columns', function (done) {
        expect(lib.isValid(data.invalidcolumns)).toBe(false);
        done();
    });
    it('should be invalid blocks', function (done) {
        expect(lib.isValid(data.invalidblocks)).toBe(false);
        done();
    });
});
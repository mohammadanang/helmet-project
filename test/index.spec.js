const expect = require('chai').expect;
const server = require('../index');

describe('TEST', () => {
    it('should return a string', (done) => {
        expect('CI with Travis').to.equal('CI with Travis');
        done();
    });
});
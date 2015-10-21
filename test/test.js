var slug = require('../');
var should = require('should');

describe('Slugify', function () {
    it('should replace whitespaces', function() {
        slug('hello').should.equal('hello');
        slug('hello world').should.equal('hello-world');
    });

    it('should replace with lowercase', function() {
        slug('Hello World').should.equal('hello-world');
    });
});


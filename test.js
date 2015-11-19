var chai = require('chai');
var expect = chai.expect;
var parser = require('parser');
var Brush = require('.');
var sample = require('raw!./sample.txt');

describe('brush-csharp', function() {
  var instance = null;

  before(function() {
    instance = new Brush();
  });

  it('has populated code sample', function() {
    expect(sample).to.not.match(/^Populate/);
  });

  describe('instance', function() {
    it('has `regexList`', function() {
      expect(instance).to.have.property('regexList');
    });
  });

  describe('parsing', function() {
    var matches = null;

    before(function() {
      matches = parser.parse(sample, instance.regexList);
    });

    it('can parse', function() {
      expect(matches).to.have.length.above(0);
    });
  });
});
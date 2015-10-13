var d2d = require('./lib.js');
var expect = require('chai').expect;

describe('directions-to-degrees', function() {
  describe('proper values for', function() {
    it('cardinal directions', function() {
      expect(d2d(0)).to.equal('N');
      expect(d2d(90)).to.equal('E');
      expect(d2d(180)).to.equal('S');
      expect(d2d(270)).to.equal('W');
      expect(d2d(360)).to.equal('N');
    });

    it('intercardinal directions', function() {
      expect(d2d(45)).to.equal('NE');
      expect(d2d(135)).to.equal('SE');
      expect(d2d(225)).to.equal('SW');
      expect(d2d(315)).to.equal('NW');
    });

    it('secondary-intercardinal directions', function() {
      expect(d2d(22.5)).to.equal('NNE');
      expect(d2d(67.5)).to.equal('ENE');
      expect(d2d(112.5)).to.equal('ESE');
      expect(d2d(157.5)).to.equal('SSE');
      expect(d2d(202.5)).to.equal('SSW');
      expect(d2d(247.5)).to.equal('WSW');
      expect(d2d(292.5)).to.equal('WNW');
      expect(d2d(337.5)).to.equal('NNW');
    });

    it('works over 360 degrees', function() {
      expect(d2d(720)).to.equal('N');
      expect(d2d(540)).to.equal('S');
    });
  });

  describe('validates input', function() {
    it('numbers are ok', function() {
      expect(d2d(1)).to.equal('N');
    });

    it('returns -1 for non numbers', function() {
      expect(d2d('1')).to.equal(-1);
      expect(d2d('hello')).to.equal(-1);
      expect(d2d([1, 2, 3])).to.equal(-1);
      expect(d2d({ a: 1 })).to.equal(-1);
      expect(d2d(NaN)).to.equal(-1);
    });
  });
});

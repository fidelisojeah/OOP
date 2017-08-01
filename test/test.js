const assert = require('chai').assert;
const oopApp = require('../index.js');

const IPhone = oopApp.IPhone;
const Samsung = oopApp.Samsung;
const Television = oopApp.Television;

const samsungS7Phone = new Samsung('S7', '2016', '3000mAH');
const iPhone6Phone = new IPhone('6s', '2015', '2300mAH');
const sonyTV = new Television('Sony', '2017', 'OLED', '50');

samsungS7Phone.itemCost = '2000';

describe('OOP', function () {
  describe('Handle invalid data', function () {
    it('should return undefined', function () {
      assert.equal(sonyTV.tvze, undefined); // no such method
      assert.equal(sonyTV.itemCost, undefined); // value has never been set
    });
  });
  describe('Handle object initialisation', function () {
    it('Should return new iPhone details', function () {
      const testIphone = new IPhone('7', '2016', '3000mAH');
      assert.equal(testIphone.getOpSystem(), 'iPhone 7 OS version is: iOS');
    });

  });
  describe('Handle property assignment', function () {
    it('should return new value of object property', function () {
      iPhone6Phone.iClouduserName = 'fidelis@ojeah.com';
      assert.equal(iPhone6Phone.getiClouduserName(), 'iPhone 6s has the username: fidelis@ojeah.com');
    });
  });
  describe('Handle property reassignment', function () {
    it('should return new value of object property', function () {
      sonyTV.itemCost = '900,000';
      assert.equal(sonyTV.getitemCost(), 'Sony 50 inch OLED costs: NGN 900,000');
      sonyTV.tvSize = '48';
      assert.equal(sonyTV.getTvSize(), 'size of Television is: 48 inches');
    });
  });
});

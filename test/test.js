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
    it('Should return new Samsung details', function () {
      const testPhone = new Samsung('7+', '2017', '3600mAH');
      assert.equal(testPhone.getOpSystem(), 'Samsung 7+ OS version is: Android');
      assert.equal(testPhone.getModelYear(), 'This is the 2017 model of the Samsung 7+');
    });
    it('Should return new iPhone details', function () {
      const testTV = new Television('LG', '2014', 'LCD', '82');
      assert.equal(testTV.getItemManufacturer(), 'LG 82 inch LCD Was Manufactured by: LG');
    });

  });
  describe('Handle Direct property query', function () {
    it('should return the value of property of iPhone', function () {
      assert.equal(iPhone6Phone.itemName, 'iPhone 6s');
    });
    it('should return value of property of the Samsung', function () {
      assert.equal(samsungS7Phone.itemManufacturer, 'Samsung');
    });
  });
  describe('Handle property assignment', function () {
    it('should return value of object property', function () {
      iPhone6Phone.iClouduserName = 'fidelis@ojeah.com';
      assert.equal(iPhone6Phone.getiClouduserName(), 'iPhone 6s has the username: fidelis@ojeah.com');
    });
    it('should return value of object property', function () {
      sonyTV.itemCost = '900,000';
      assert.equal(sonyTV.itemCost, '900,000');
    });
  });
  describe('Handle property reassignment', function () {
    it('should return new cost of television', function () {
      samsungS7Phone.itemCost = '320,000';
      assert.equal(samsungS7Phone.getitemCost(), 'Samsung S7 costs: NGN 320,000');
    });
    it('should return new cost of television', function () {
      sonyTV.itemCost = '800,000';
      assert.equal(sonyTV.getitemCost(), 'Sony 50 inch OLED costs: NGN 800,000');
    });
    it('should return new size of television', function () {
      sonyTV.tvSize = '48';
      assert.equal(sonyTV.getTvSize(), 'size of Television is: 48 inches');
    });
  });
  describe('Polymorphism', function () {
    it('should return new value of method', function () {
      assert.equal(samsungS7Phone.getItemType(), 'The Samsung S7 is a Samsung Phone');
    });
  });
});

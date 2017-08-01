class Electronics {
  constructor(itemName, itemType, itemManufacturer, modelYear) { // Initialisation of the class
    this.itemName = itemName;
    this.itemType = itemType;
    this.itemManufacturer = itemManufacturer;
    this.modelYear = modelYear;
  }
  getitemCost() {
    return `${this.itemName} costs: NGN ${this.itemCost}`;
  }
  getItemType() {
    return `${this.itemName} is a ${this.itemType}`;
  }
  getItemManufacturer() {
    return `${this.itemName} Was Manufactured by: ${this.itemManufacturer}`;
  }
  getModelYear() {
    return `This is the ${this.modelYear} model of the ${this.itemName}`;
  }
}
class Phone extends Electronics {
  constructor(phoneName, phoneManufacturer, modelYear, opSys, batteryLife) {
    super(phoneName, 'Phone', phoneManufacturer, modelYear);
    this.batteryLife = batteryLife;
    this.opSys = opSys;
  }
  getOpSystem() {
    return `${this.itemName} OS version is: ${this.opSys}`;
  }
}
class Television extends Electronics {
  constructor(tvManufacturer, modelYear, tvType, tvSize) {
    super(`${tvManufacturer} ${tvSize} inch ${tvType}`, 'Television', tvManufacturer, modelYear);
    this.tvType = tvType;
    this.tvSize = tvSize;
  }
  getTvSize() {
    return `size of Television is: ${this.tvSize} inches`;
  }
}
class IPhone extends Phone {
  constructor(phoneModel, modelYear, batteryLife) {
    super(`iPhone ${phoneModel}`, 'Apple', modelYear, 'iOS', batteryLife);
  }
  getiClouduserName() {
    return `${this.itemName} has the username: ${this.iClouduserName}`;
  }
}
class Samsung extends Phone {
  constructor(phoneModel, modelYear, batteryLife) {
    super(`Samsung ${phoneModel}`, 'Samsung', modelYear, 'Android', batteryLife);
  }
  getItemType() {
    return `The ${this.itemName} is a Samsung ${this.itemType}`;
  }
}
module.exports = {
  Television,
  IPhone,
  Samsung,
};

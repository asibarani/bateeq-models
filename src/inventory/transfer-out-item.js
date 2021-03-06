'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class TransferOutItem extends BaseModel {
    constructor(source) {
        super('transfer-out-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.item = {};
        this.quantity = 0;
        this.remark = '';
        this.copy(source);
    }
}
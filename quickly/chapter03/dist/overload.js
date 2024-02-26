"use strict";
class Product {
    constructor(id, description) {
        if (typeof id === 'number') {
            this.id = id;
        }
        else {
            this.id = 0;
        }
        if (typeof description === 'string') {
            this.description = description;
        }
        else {
            this.description = "";
        }
    }
}

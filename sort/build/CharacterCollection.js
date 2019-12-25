"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const t = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = t;
        this.data = characters.join('');
    }
    get length() {
        return this.data.length;
    }
}
exports.CharacterCollection = CharacterCollection;

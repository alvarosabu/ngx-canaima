import { Injectable } from '@angular/core';

@Injectable()
export class FormatService {

    constructor() { }
    /**
     * listSnakeToCamel
     */
    public listSnakeToCamel(arr: any) {
        const that = this;
        const newArr = [];
        arr.forEach((el) => {
            newArr.push(that.snakeToCamel(el));
        });
        return newArr;
    }
    /**
     * listCamelToSnake
     */
    public listCamelToSnake(arr: any) {
        const that = this;
        const newArr = [];
        arr.forEach((el) => {
            newArr.push(that.snakeToCamel(el));
        });
        return newArr;
    }
    /**
     * snakeToCamel
     */
    public snakeToCamel(myObj) {
        const newObj = {};
        Object.keys(myObj).forEach((key) => {
            newObj[key.replace(/(_\w)/g, (m) =>  m[1].toUpperCase())] = myObj[key];
            // do something with obj
        });
        return newObj;
    }
    /**
     * camelToSnake
     */
    public camelToSnake(myObj) {
        const newObj = {};
        Object.keys(myObj).forEach((key) => {
            newObj[key.replace(/([A-Z])/g, ($1) => '_' + $1.toLowerCase())] = myObj[key];
        // do something with obj
        });
        return newObj;
    }
}

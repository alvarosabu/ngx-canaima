import { Injectable } from '@angular/core';

@Injectable()
export class FormatCaseService {

    // tslint:disable-next-line:no-empty
    constructor() {}
    /**
     * listSnakeToCamel
     */
    public listSnakeToCamel(arr: any) {
        const that = this;
        const newArr = [];
        arr.forEach((el) => {
            if (that.isArray(el)) {
                newArr.push(that.listSnakeToCamel(el))
            }else if (that.isObject(el)) {
                newArr.push(that.snakeToCamel(el));
            }else {
                newArr.push(el);
            }
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
            if (that.isArray(el)) {
                newArr.push(that.listCamelToSnake(el))
            }else if (that.isObject(el)) {
                newArr.push(that.camelToSnake(el));
            }else {
                newArr.push(el);
            }
        });
        return newArr;
    }
    /**
     * snakeToCamel
     */
    public snakeToCamel(myObj) {
        const that = this;
        const newObj = {};
        Object.keys(myObj).forEach((key) => {
            if (that.isArray(myObj[key])) {
                newObj[key.replace(/(_\w)/g, (m) =>  m[1].toUpperCase())] = that.listSnakeToCamel(myObj[key]);
            }else if (that.isObject(myObj[key])) {
                newObj[key.replace(/(_\w)/g, (m) =>  m[1].toUpperCase())] = that.snakeToCamel(myObj[key]);
            }else {
                newObj[key.replace(/(_\w)/g, (m) =>  m[1].toUpperCase())] = myObj[key];
            }
            // do something with obj
        });
        return newObj;
    }
    /**
     * camelToSnake
     */
    public camelToSnake(myObj) {
        const that = this;
        const newObj = {};
        Object.keys(myObj).forEach((key) => {
            if (that.isArray(myObj[key])) {
                newObj[key.replace(/([A-Z])/g, ($1) => '_' + $1.toLowerCase())] = myObj[key] = that.listCamelToSnake(myObj[key]);
            }else if (that.isObject(myObj[key])) {
                newObj[key.replace(/([A-Z])/g, ($1) => '_' + $1.toLowerCase())] = myObj[key] = that.camelToSnake(myObj[key]);
            }else {
                newObj[key.replace(/([A-Z])/g, ($1) => '_' + $1.toLowerCase())] = myObj[key] = myObj[key];
            }
        // do something with obj
        });
        return newObj;
    }
    private isArray(a) {
        return (!!a) && (a.constructor === Array);
    };
    private isObject(a) {
        return (!!a) && (a.constructor === Object);
    };
}

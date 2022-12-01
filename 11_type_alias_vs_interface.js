"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.x = 1;
        this.y = 100;
    }
    return Rectangle;
}());
var rectanglePrism = /** @class */ (function () {
    function rectanglePrism() {
        this.x = 1;
        this.y = 100;
        this.z = 3;
    }
    return rectanglePrism;
}());
var ReactDetail = /** @class */ (function () {
    function ReactDetail() {
        this.x = 1;
        this.y = 100;
        this.z = 34;
        // area =()=>{
        //     return this.x * this.y
        // }
        // parameter = ()=>{
        //     return this.x + this.y * this.z
        // }
    }
    return ReactDetail;
}());
var calcRect = new ReactDetail();
// console.log(calcRect.area());
var rect1 = new Rectangle();
console.log(rect1.x);
var rect2 = new rectanglePrism();
console.log(rect2.z);
var getRectangleAreaInterface = function (args) { return args.x * args.y; };
var getRectangleAreaAlias = function (args) { return args.x * args.y; };
console.log(getRectangleAreaInterface({ x: 34, y: 30, z: 99 }));
console.log(getRectangleAreaAlias({ x: 55, y: 23, z: 100 }));
// interface Counter{
//     // callable part
//     (start:number):string
//     // static part
//     interval:number;
//     reset():void;
// }
// const getCounter =()=>{
//     const counter = ((start:number)=>{
//         console.log(start);
//     }) as Counter;
//     counter.interval = 123;
//     counter.reset=()=>{};
//     return counter;
// }
// const callable = getCounter();
// callable(100);
// callable.reset();
// callable.interval = 5.0

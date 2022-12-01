export { }

interface PointInterface {
    x: number;
    y: number;
}

type pointType = {
    x: number;
    y: number;
}
// type letTest = PointInterface | pointType

interface ThreeDimension extends pointType {
    z:number
}

class Rectangle implements pointType {
    x = 1;
    y = 100;
}

class rectanglePrism implements ThreeDimension{
    x = 1;
    y = 100;
    z = 3;
}



interface Shape{
    area():number;
}

type parameter = {
    parameter():number;
}

type RectangleParams = Partial<parameter & Shape> & pointType;

class ReactDetail implements RectangleParams{
    x= 1;
    y =100;
    z= 34;
    // area =()=>{
    //     return this.x * this.y
    // }
    // parameter = ()=>{
    //     return this.x + this.y * this.z
    // }
}

let calcRect = new ReactDetail();
// console.log(calcRect.area());






let rect1 = new Rectangle();
console.log(rect1.x);
let rect2 = new rectanglePrism();
console.log(rect2.z);


const getRectangleAreaInterface = (args: ThreeDimension) => args.x * args.y;
const getRectangleAreaAlias = (args:ThreeDimension)=>args.x * args.y;
console.log(getRectangleAreaInterface({x:34,y:30,z:99}));
console.log(getRectangleAreaAlias({x:55,y:23,z:100}));

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




















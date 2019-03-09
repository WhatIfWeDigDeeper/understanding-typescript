/* tslint:disable */

const honkingSound = "Toooooooooot!";
// Exercise 1
function Car(name: string) {
    // @ts-ignore
    this.name = name;
    // @ts-ignore
    this.acceleration = 0;
    // @ts-ignore
    this.honk = function() {
        //console.log("Toooooooooot!");
        return honkingSound;
    };
    // @ts-ignore
    this.accelerate = function(speed: string | number) {
        this.acceleration = this.acceleration + speed;
    }
}


// Exercise 2
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
// console.log(rectangle.calcSize());

// Exercise 3
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

describe("5 Using Classes to create Objects", () => {
    it("should accelerate honk and make the sCar go", () => {
        // @ts-ignore
        var sCar = new Car("BMW");
        expect(sCar.honk()).toEqual(honkingSound);
        expect(sCar.acceleration).toEqual(0);
        sCar.accelerate(10);
        expect(sCar.acceleration).toEqual(10);
    });
});
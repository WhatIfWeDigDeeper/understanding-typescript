// exercise: convert to es6 and Typescript

/* tslint:disable */
describe("Convert to es6 and ts", () => {
    // @ts-ignore
    var double = function (value) {
        return value * 2;
    };
    // @ts-ignore
    var greet = function (name) {
        if (name === undefined) {
            name = "Max";
        }
        return "Hello, " + name;
    }
    // @ts-ignore
    var mathMin = function (numbers) {
        return Math.min.apply(Math, numbers);
    }
    // @ts-ignore
    var addToArray = function (ary1, ary2) {
        Array.prototype.push.apply(ary1, ary2);
        return ary1;
    }
    it("should double result", () => {
        expect(double(10)).toEqual(20);
    });
    it("should greet name passed in", () => {
        expect(
            greet("Homer")
        ).toEqual("Hello, Homer");
    });
    it("should greet Max when no parameter", () => {
        // @ts-ignore
        expect(greet()).toEqual("Hello, Max");
    });
    const numbers = [-3, 33, 38, 5];
    it("should return min value of list", () => {
        expect(mathMin(numbers)).toEqual(-3);
    });
    it("should add to array", () => {
        expect(addToArray([55,20], numbers)).toEqual([55,20,-3, 33, 38, 5]);
    });
    it("should create variables from an array", () => {
        var testResults = [3.89, 2.99, 1.38];
        var result1 = testResults[0];
        var result2 = testResults[1];
        var result3 = testResults[2];
        var obj = {
            r1: result1,
            r2: result2,
            r3: result3
        };
        expect(obj).toEqual({
            r1: 3.89,
            r2: 2.99,
            r3: 1.38
        });
    });
});
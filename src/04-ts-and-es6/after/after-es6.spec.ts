const double = (value: number): number => value * 2;

const greet = (name: string = "Max"): string => `Hello, ${name}`;

const minArray = (numbers: number[]): number => Math.min(...numbers);

const addArrays = <T>(...list: T[]): T[] =>
    list.reduce((acc: T[], ary: T) => acc.concat(ary), []);

const aryToObj = <T>(numbers: T[]): object => {
    const [r1, r2, r3, r4] = numbers;
    return {
        r1,
        r2,
        r3,
        r4,
    };
};

describe("module 4 Typescript & ES6", () => {
    it("should double", () => {
        expect(double(10)).toEqual(20);
    });
    it("should greet name passed", () => {
        expect(greet("Donnie")).toEqual("Hello, Donnie");
    });
    it("should greet Max with no name passed", () => {
        expect(greet()).toEqual("Hello, Max");
    });
    it("should append 3 arrays", () => {
        const l1 = [1, 2];
        const l2 = [3, 4, 5];
        const l3 = [6, 7, 8];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(addArrays(l1, l2, l3)).toEqual(expected);
    });
    it("should use array destructuring to convert an array to an object", () => {
        const numbers = [3, 89, 2.99, 1.38];
        const expected = { r1: 3, r2: 89, r3: 2.99, r4: 1.38 };
        expect(aryToObj(numbers)).toEqual(expected);
    });
    it("should destructure an object", () => {
        const scientist = { firstName: "Will", experience: 12 };
        const { firstName, experience: exp } = scientist;
        expect(firstName).toEqual(scientist.firstName);
        expect(exp).toEqual(scientist.experience);
    });
});

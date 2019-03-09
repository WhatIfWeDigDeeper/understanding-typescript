// exercise: convert to types and interfaces

/* tslint:disable */
let bankAccount = {
    money: 2000,
    // @ts-ignore: no implicit any
    deposit(value) {
        this.money += value;
    }
};

describe("Module 2 before exercise", () => {
    it("should deposit money", () => {
        let myself = {
            name: "Max",
            bankAccount: bankAccount,
            hobbies: ["Sports", "Cooking"]
        };
        myself.bankAccount.deposit(3000);
        expect(myself.bankAccount.money).toEqual(5000);
    });
});

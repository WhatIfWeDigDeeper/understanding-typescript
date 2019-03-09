import { BankAccount, Person } from "./types";

describe("module 2 basic types", () => {
    it("should add 3000 to bank account", () => {
        const bankAccount: BankAccount = {
            money: 2000,
            deposit(value: number): void {
                this.money += value;
            },
        };

        const myself: Person = {
            bankAccount,
            hobbies: ["Sports", "Cooking"],
            name: "Max",
        };

        myself.bankAccount.deposit(3000);
        expect(myself.bankAccount.money).toEqual(5000);
    });
});

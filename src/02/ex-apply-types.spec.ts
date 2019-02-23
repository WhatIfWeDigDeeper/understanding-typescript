import { Person, BankAccount } from "./ex-apply-types";

describe("module 2", () => {
    it("should add 3000 to bank account", () => {
        let bankAccount: BankAccount = {
            money: 2000,
            deposit(value) {
              this.money += value;
            }
          };
          
          let myself: Person = {
            name: "Max",
            bankAccount: bankAccount,
            hobbies: ["Sports", "Cooking"]
          };
          
          myself.bankAccount.deposit(3000);
          expect(myself.bankAccount.money).toEqual(5000);
    });
});
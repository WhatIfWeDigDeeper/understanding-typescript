import { BankAccount, Person } from "./ex-apply-types";

const isObject = (obj: any): boolean =>
    typeof obj === "function" || (typeof obj === "object" && !!obj);

interface Difference {
    fieldName: string;
    originalValue: any;
    modifiedValue: any;
}
const diffRecursive = (
    o1: any,
    o2: any,
    totalAcc: Difference[]
): Difference[] => {
    return Object.keys(o2).reduce((acc: Difference[], key: string) => {
        if (o1[key] === o2[key]) {
            return acc;
        }
        return isObject(o1[key]) && isObject(o2[key])
            ? diffRecursive(o1[key], o2[key], acc)
            : acc.concat({
                  fieldName: key,
                  modifiedValue: o2[key],
                  originalValue: o1[key],
              });
    }, totalAcc);
};

const difference = (obj1: any, obj2: any): Difference[] => {
    return diffRecursive(obj1, obj2, []);
};

describe("module 2", () => {
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

    // const difference = (o1: any, o2: any): Difference[] =>
    //     Object.keys(o2).reduce((acc: Difference[], key: string) => {
    //         if (o1[key] === o2[key]) {
    //             return acc;
    //         }
    //         return acc.concat({
    //             fieldName: key,
    //             modifiedValue: o2[key],
    //             originalValue: o1[key],
    //         });
    //     }, []);

    // const difference = (o1: any, o2: any): Difference[] =>
    //     Object.keys(o2).reduce((acc: Difference[], key: string) => {
    //         if (o1[key] === o2[key]) {
    //             return acc;
    //         }
    //         return isObject(o1[key]) && isObject(o2[key])
    //             ? acc.concat(difference(o1[key], o2[key]))
    //             : acc.concat({
    //                   fieldName: key,
    //                   modifiedValue: o2[key],
    //                   originalValue: o1[key],
    //               });
    //     }, []);

    //   const ldiff = (object: any, base: any): Difference[] {
    //     const changes = (object: any, base: any) => {
    //         return _.transform(object, (result, value, key) => {
    //             if (!_.isEqual(value, base[key])) {
    //                 result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
    //             }
    //         });
    //     }
    //     return changes(object, base);
    // }

    it("temp", () => {
        const o1 = {
            five: {
                a: 2,
                b: 1,
            },
            one: 1,
            three: 3,
            two: 2,
        };

        const o2 = {
            five: {
                a: 4,
                b: 1,
            },
            four: 4,
            one: 3,
            three: 3,
            two: 2,
        };
        const result = difference(o1, o2);
        // tslint:disable-next-line no-console
        console.log(result);
    });
});

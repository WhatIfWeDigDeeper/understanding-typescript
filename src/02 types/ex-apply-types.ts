// add types

export type BankAccount {
    money: number;
    deposit: (val: number) => void;
}

export type Person {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
}

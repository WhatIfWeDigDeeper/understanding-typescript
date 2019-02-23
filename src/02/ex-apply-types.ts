// add types

export interface BankAccount {
    money: number;
    deposit: (val: number) => void;
}

export interface Person {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
}

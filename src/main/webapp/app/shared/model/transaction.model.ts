import { Moment } from 'moment';
import { IMoneyAccount } from 'app/shared/model//money-account.model';

export const enum TransactionType {
    CREDIT = 'CREDIT',
    DEBIT = 'DEBIT'
}

export const enum Category {
    RENT = 'RENT',
    FOOD = 'FOOD',
    INCOME = 'INCOME',
    UTILITIES = 'UTILITIES',
    SHOPPING = 'SHOPPING',
    TRANSFER = 'TRANSFER',
    AUTOMOTIVE = 'AUTOMOTIVE',
    MISCELLANEOUS = 'MISCELLANEOUS'
}

export interface ITransaction {
    id?: number;
    amount?: number;
    transactionType?: TransactionType;
    accountId?: string;
    dateTime?: Moment;
    descriptionID?: string;
    memo?: string;
    category?: Category;
    moneyAccount?: IMoneyAccount;
}

export class Transaction implements ITransaction {
    constructor(
        public id?: number,
        public amount?: number,
        public transactionType?: TransactionType,
        public accountId?: string,
        public dateTime?: Moment,
        public descriptionID?: string,
        public memo?: string,
        public category?: Category,
        public moneyAccount?: IMoneyAccount
    ) {}
}

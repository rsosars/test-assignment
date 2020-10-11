export interface ITransactionItem extends INewTransactionItem {
	userId: string;
}

export interface INewTransactionItem {
	itemId: string;
	date: string;
	transactionType: "income" | "expense";
	amount: number;
}
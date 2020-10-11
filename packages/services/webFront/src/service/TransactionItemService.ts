import {INewTransactionItem, ITransactionItem} from "@test-assignment/shared-data-model";

export class TransactionItemService {
	public createItem(userIdentity: ITransactionItem): Promise<void> {
		return Promise.resolve();
	}

	public getItem(itemId: string): Promise<ITransactionItem> {
		return Promise.resolve({} as ITransactionItem);
	}

	public updateItem(itemId: string, item: INewTransactionItem): Promise<ITransactionItem> {
		return Promise.resolve({} as ITransactionItem);
	}

	public deleteItem(itemId: string): Promise<void> {
		return Promise.resolve();
	}
}
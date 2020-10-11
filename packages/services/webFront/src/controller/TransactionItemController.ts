import {DELETE, GET, PATCH, Path, PathParam, POST} from "typescript-rest";
import {INewTransactionItem, ITransactionItem,} from "@test-assignment/shared-data-model";
import {TransactionItemService} from "../service/TransactionItemService";

@Path("/transactionItem")
export class TransactionItemController {
	private transactionItemService: TransactionItemService;

	constructor() {
		this.transactionItemService = new TransactionItemService();
	}

	@POST
	public create(item: INewTransactionItem): {} {
		return this.transactionItemService.createItem(item as ITransactionItem);
	}

	@Path(":itemId")
	@GET
	public getIdentityData(@PathParam("itemId") itemId: string): Promise<ITransactionItem> {
		return this.transactionItemService.getItem(itemId);
	}

	@Path(":itemId")
	@PATCH
	public updateIdentityData(@PathParam("itemId") itemId: string, item: INewTransactionItem): {} {
		return this.transactionItemService.updateItem(itemId, item);
	}

	@Path(":itemId")
	@DELETE
	public deleteIdentityData(@PathParam("itemId") itemId: string): {} {
		return this.transactionItemService.deleteItem(itemId);
	}
}
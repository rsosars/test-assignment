import {GET, PATCH, Path, POST} from "typescript-rest";
import {IIdentityData, INewIdentityData, ITaxData,} from "@test-assignment/shared-data-model";

@Path("/user")
export class UserController {

	@POST
	public create(userIdentity: INewIdentityData): {} {
		return {};
	}

	@Path("/identityData")
	@GET
	public getIdentityData(): Promise<IIdentityData> {
		return Promise.resolve({} as IIdentityData);
	}

	@Path("/identityData")
	@PATCH
	public updateIdentityData(userIdentity: IIdentityData): {} {
		return {};
	}

	@Path("/taxData")
	@GET
	public getTaxData(): Promise<ITaxData> {
		return Promise.resolve({} as ITaxData);
	}

	@Path("/taxData")
	@POST
	public setTaxData(userTaxData: ITaxData): {} {
		return {};
	}

	@Path("/taxData")
	@PATCH
	public updateTaxData(userTaxData: ITaxData): {} {
		return {};
	}
}
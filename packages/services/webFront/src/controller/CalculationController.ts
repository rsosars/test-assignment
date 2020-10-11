import {GET, PATCH, Path, PathParam, POST, QueryParam} from "typescript-rest";
import {IIdentityData, ILiability} from "@test-assignment/shared-data-model";

@Path("/calculation")
export class CalculationController {

	@GET
	public create(@QueryParam("from") from: string, @QueryParam("to") to: string): Promise<ILiability> {
		return Promise.resolve({} as ILiability);
	}

}
export interface IIdentityData extends INewIdentityData{
	userId: string;
}

export interface INewIdentityData {
	firstName: string;
	lastName: string;
	email: string;
}
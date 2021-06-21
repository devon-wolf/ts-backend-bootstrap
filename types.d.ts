export class ExpressError extends Error {
	status : number;
	message : string;
}
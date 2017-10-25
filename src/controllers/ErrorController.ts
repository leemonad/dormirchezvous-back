export class ErrorController {

	static create(req: any, res: any): ErrorController {
		return new ErrorController(req, res);
	}

	constructor(req: any, res: any) {
		res.setHeader("Content-Type", "application/json");
		res.send(404, JSON.stringify({ msg: "Not Found" }));
	}
}
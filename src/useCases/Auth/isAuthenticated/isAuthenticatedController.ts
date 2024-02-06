import { Request, Response } from "express";
import { IsAithenticatedUseCase } from "./isAuthenticatedUseCase";

export class IsauthenticatedController {


    constructor(private IsAithenticatedUseCase: IsAithenticatedUseCase) { }

    async handle(request: Request, response: Response) {

  

        response.json( {success: this.IsAithenticatedUseCase.execute()})

    }
}
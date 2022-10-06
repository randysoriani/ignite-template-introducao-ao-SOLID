import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try{
      const result = this.turnUserAdminUseCase.execute({user_id});
      return response.json(result);
    }catch(err){
      return response.status(404).json({error: err})
    }
  }
}

export { TurnUserAdminController };

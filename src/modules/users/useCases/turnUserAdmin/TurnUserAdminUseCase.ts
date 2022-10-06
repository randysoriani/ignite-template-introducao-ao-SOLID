import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const originalUser = this.usersRepository.findById(user_id);
    const newUser = this.usersRepository.turnAdmin(originalUser);
    return newUser;
  }
}

export { TurnUserAdminUseCase };

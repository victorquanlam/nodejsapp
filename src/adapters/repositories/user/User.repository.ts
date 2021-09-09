import { IUSerRepository } from "../../../application/modules/users/providerContracts/IUser.repository";
import userModel from "../../../infrastructure/dataBases/nodeTsKeleton/User.model";
import { BaseRepository } from "../base/BaseRepository";
import { IUser } from "../../../domain/user/IUser";
import { User } from "../../../domain/user/User";

export class UserRepository extends BaseRepository implements IUSerRepository {
  async getByEmail(email: string): Promise<IUser> {
    const founded = await userModel.getByEmail(email);
    return Promise.resolve(founded);
  }

  async register(user: User): Promise<IUser> {
    const created = await userModel.create(user);
    return Promise.resolve(created);
  }
}

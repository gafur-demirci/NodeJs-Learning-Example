import { IProfileManager } from "../profile/IProfileManager";
import { User } from "./User";

export interface IUserManager {
    id: String
    profile: IProfileManager
    getUserById(id: String): User
}

export const IUserManager = Symbol.for("IUserManager");
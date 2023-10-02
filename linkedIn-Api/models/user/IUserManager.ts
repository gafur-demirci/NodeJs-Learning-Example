import { IProfileManager } from "../profile/IProfileManager";

export interface IUserManager {
    id: String
    profile: IProfileManager
}

export const IUserManager = Symbol.for("IUserManager");
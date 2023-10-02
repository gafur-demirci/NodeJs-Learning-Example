import { IUserManager } from "../user/IUserManager";
import { ILikeManager } from "../like/ILikeManager";

export interface IPostManager {
    id: String
    text: String
    url: String
    image?: String
    owner: IUserManager
    like: ILikeManager
}

export const IPostManager = Symbol.for("IPostManager");
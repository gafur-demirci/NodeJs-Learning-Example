import { IUserManager } from "../user/IUserManager";
import { IPostManager } from "../post/IPostManager";
import { LikeType } from "./LikeType";

export interface ILikeManager {
    id: String
    user: IUserManager
    post: IPostManager
    likeType: LikeType
}

export const ILikeManager = Symbol.for("ILikeManager");
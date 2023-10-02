import { IUserManager } from "../user/IUserManager";
import { IPostManager } from "../post/IPostManager";

export interface ICommentManager {
    id: String
    text: String
    owner: IUserManager
    post: IPostManager
}

export const ICommentManager = Symbol.for("ICommentManager");
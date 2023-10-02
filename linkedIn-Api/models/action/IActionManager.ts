import { IUserManager } from "../user/IUserManager";
import { IPostManager } from "../post/IPostManager";
import { ActionType } from "./ActionType";

export interface IActionManager {
    id: String
    owner: IUserManager
    post: IPostManager
    actionType: ActionType
}

export const IActionManager = Symbol.for("IActionManager");
import { IUserManager } from "../user/IUserManager";
import { IPostManager } from "../post/IPostManager";

export interface IActionManager {
    id: String
    owner: IUserManager
    post: IPostManager
    actionType: "Paylaş" | "Gönder" | "Kaydet" | "Raporla"
}

export const IActionManager = Symbol.for("IActionManager");
import { IUserManager } from "../user/IUserManager";
import { IPostManager } from "../post/IPostManager";

export interface ILikeManager {
    id: String
    user: IUserManager
    post: IPostManager
    likeType: "Beğen" | "Kutla" | "Destek Ver" | "Harika" | "Bilgi Verici" | "Eğlenceli"
}

export const ILikeManager = Symbol.for("ILikeManager");
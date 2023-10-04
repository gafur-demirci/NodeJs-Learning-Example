import { IPostManager } from "../post/IPostManager";
import { IUserManager } from "../user/IUserManager";
import { ActionType } from "./ActionType";
import { IActionManager } from "./IActionManager";
import { User } from "../../models/user/User";
import { getActionById } from "../../controllers/Action/ActionController";

export class Action implements IActionManager{

    id: String;
    owner: IUserManager;
    post: IPostManager;
    actionType: ActionType;

    /**
     *
     */
    constructor(id: String,owner: IUserManager, post: IPostManager, actionType: ActionType) {
        this.id = ""; // generateUUID() helper method 
        this.owner = owner;
        this.post = post;
        this.actionType = actionType
    }
    createAction(): Action {
        throw new Error("Method not implemented.");
    }
    deleteAction(): Boolean {
        throw new Error("Method not implemented.");
    }
    updateAction(): Action {
        throw new Error("Method not implemented.");
    }

    getActionById(id: String): Action{
        
        console.log("action get by id");
        return getActionById(id);
    }
    
}
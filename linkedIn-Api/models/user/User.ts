import { IProfileManager } from "../profile/IProfileManager";
import { IUserManager } from "./IUserManager";
import { getUserById } from "../../controllers/User/UserController";

export class User implements IUserManager{

    id: String;
    profile: IProfileManager;

    /**
     * profile must added
     */
    constructor(id: String) {
        this.id = id;
        
    }

    getUserById(id: String): User {
        return getUserById(id);
    }
    
}
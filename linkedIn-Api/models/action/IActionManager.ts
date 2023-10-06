import { IUserManager } from '../user/IUserManager';
import { IPostManager } from '../post/IPostManager';
import { ActionType } from './ActionType';
import { Action } from './Action';

export interface IActionManager {
    id: String;
    owner: IUserManager;
    post: IPostManager;
    actionType: ActionType;
    getActionById(id: String): Action;
    createAction(): Action;
    deleteAction(): Boolean;
    updateAction(): Action;
}

export const IActionManager = Symbol.for('IActionManager');
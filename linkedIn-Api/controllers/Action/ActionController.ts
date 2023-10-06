import { Action } from '../../models/action/Action';
import { getUserById } from '../User/UserController';
import { getPostById } from '../Post/PostController';

export function getActionById(id: String): Action {
    return new Action(id, getUserById(id), getPostById(id), 'Gönder');
}
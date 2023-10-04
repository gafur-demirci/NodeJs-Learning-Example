import { Post } from "../../models/post/Post";

export function getPostById(id: String): Post {
    // return from db given id
    return  new Post(id); // getUserByIdFromDb();
}
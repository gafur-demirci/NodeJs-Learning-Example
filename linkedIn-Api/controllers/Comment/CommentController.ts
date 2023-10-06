import { Comment } from '../../models/comment/Comment';
import { Post } from '../../models/post/Post';
import { Profile } from '../../models/profile/Profile';
import { User } from '../../models/user/User';

export function getCommentById(id: String): Comment {
    return new Comment(
        id,
        '',
        new User(id, new Profile(id, 'name', 'surname')),
        new Post(id)
    );
}
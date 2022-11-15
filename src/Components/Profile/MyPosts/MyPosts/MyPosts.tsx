import React, {ChangeEvent} from "react";
import {Post} from "../Post/Post";
import {postType} from "../../../State/State";

type MyPostsType = {
    posts: postType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (e:ChangeEvent<HTMLTextAreaElement>) => void
}

export const MyPosts = ({posts, newPostText, addPost, updateNewPostText}: MyPostsType) => {

    const postsData = posts.map(p =>
        <Post
            message={p.message}
            like={p.like}
            dislike={p.dislike}
            key={p.id}
        />
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        addPost()
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e)
    }

    return (
        <div>
            <div>
                <div>
                    My posts
                </div>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                <button onClick={AddPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            {postsData}
        </div>
    )
}
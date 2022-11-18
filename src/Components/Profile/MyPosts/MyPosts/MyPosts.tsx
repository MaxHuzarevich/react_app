import React, {ChangeEvent} from "react";
import {MyPostsType} from "./MyPostsContainer";
import {Post} from "../Post/Post";
import {store} from "../../../State/redux-store";

export const MyPosts = ({newPostText,addPost,updateNewPostText}: MyPostsType) => {

    const postsData = store.getState().profilePage.posts.map(p =>
        <Post
            message={p.message}
            like={p.like}
            dislike={p.dislike}
            key={p.id}
        />
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        addPost(newPostText)
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
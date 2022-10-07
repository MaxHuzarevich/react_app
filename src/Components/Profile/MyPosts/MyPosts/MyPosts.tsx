import React from "react";
import {Post} from "../Post/Post";
import {actionType, postType} from "../../../State/State";

type MyPostsType = {
    posts: postType[]
    newPostText: string
    dispatch: (action: actionType) => void
}

export const MyPosts = ({posts, newPostText, dispatch}: MyPostsType) => {

    const postsData = posts.map(p =>
        <Post
            message={p.message}
            like={p.like}
            dislike={p.dislike}
            key={p.id}/>
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            dispatch({type: 'ADD-POST', newPost: newPostElement.current.value})
        }
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
        }
    }

    return (
        <div>
            <div>
                <div>
                    My posts
                </div>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                <button onClick={addPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            {postsData}
        </div>
    )
}
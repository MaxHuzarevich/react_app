import React from "react";
import {Post} from "../Post/Post";
import {postType} from "../../../State/State";

type MyPostsType = {
    posts: postType[]
    AddNewPost: (message: string) => void
}

export const MyPosts = ({posts, AddNewPost}: MyPostsType) => {

    const postsData = posts.map(p =>
        <Post
            message={p.message}
            like={p.like}
            dislike={p.dislike}
            key={p.id}/>
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current){
        AddNewPost(newPostElement.current.value)}
    }

    return (
        <div>
            <div>
                <div>
                    My posts
                </div>
                <textarea ref={newPostElement}/>
                <button onClick={addPost}>Add Post</button>
                <button>Remove Post</button>
            </div>
            {postsData}
        </div>
    )
}
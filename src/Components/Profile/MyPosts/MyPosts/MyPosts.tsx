import React from "react";
import {Post} from "../Post/Post";
import {ProfilePageType} from "../../../State/State";

export const MyPosts = ({posts}:ProfilePageType) => {

    const postsData = posts.map(p =>
        <Post
            message={p.message}
            like={p.like}
            dislike={p.dislike}
            key={p.id}/>
    )

    return (
        <div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <textarea>

                </textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            {postsData}
        </div>
    )
}
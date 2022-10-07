import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfilePageType, store} from "../../State/State";


export const Profile = ({posts, newPostText}: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={store.updateNewPostText.bind(store)}
                posts={posts}
                AddNewPost={store.addNewPost.bind(store)}
                newPostText={newPostText}/>
        </div>
    )
}
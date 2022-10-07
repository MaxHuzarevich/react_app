import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfilePageType, store} from "../../State/State";


export const Profile = ({posts, newPostText}: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={store.dispatch.bind(store)}
                posts={posts}
                newPostText={newPostText}/>
        </div>
    )
}
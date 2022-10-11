import React from "react";
import {MyPosts} from "../MyPosts/MyPosts/MyPosts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../State/State";
import {store} from "../../State/redux-store";


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
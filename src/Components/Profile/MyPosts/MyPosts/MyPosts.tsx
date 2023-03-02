import React from "react";
import {MyPostsType} from "./MyPostsContainer";
import {Post} from "../Post/Post";
import {store} from "../../../State/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts = ({addPost}: MyPostsType) => {

    const postsData = store.getState().profilePage.posts.map(p =>
        <Post
            message={p.message}
            like={p.like}
            dislike={p.dislike}
            key={p.id}
        />
    )

    const AddPost = (formData: formDataPostType) => {
        addPost(formData.post)
    }

    return (
        <div>
            <div>
                <div>
                    My posts
                </div>
                <AddPostReduxForm onSubmit={AddPost}/>
            </div>
            {postsData}
        </div>
    )
}
type formDataPostType = {
    post: string
}

const AddPostForm: React.FC<InjectedFormProps<formDataPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'post'} placeholder={'Enter your post...'}/>
            <button>add post</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm<formDataPostType>({form: 'post'})(AddPostForm)

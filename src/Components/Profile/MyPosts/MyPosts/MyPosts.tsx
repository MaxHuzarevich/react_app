import React from "react";
import {MyPostsType} from "./MyPostsContainer";
import {Post} from "../Post/Post";
import {store} from "../../../State/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";
import classes from './MyPosts.module.css'

export const MyPosts = React.memo((props: MyPostsType) => {
    let {addPost} = props;

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
        <div className={classes.container}>
            <div className={classes.myPostWrap}>
                <h3>
                    My posts
                </h3>
                <AddPostReduxForm onSubmit={AddPost}/>
            <div>
                {postsData}
            </div>
            </div>
        </div>
    )
})

type formDataPostType = {
    post: string
}

const maxLength = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<formDataPostType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'post'}
                placeholder={'Enter your post...'}
                validate={[required, maxLength]}
            />
            <button>add post</button>
        </form>
    )
}
const AddPostReduxForm = reduxForm<formDataPostType>({form: 'post'})(AddPostForm)

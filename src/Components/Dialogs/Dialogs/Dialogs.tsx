import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "../DialogItem/DialogItem";
import {Message} from "../Message/Message";
import {store} from "../../State/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type DialogsType = {
    onSendMessageClick: (value: string) => void
}

export const Dialogs = ({onSendMessageClick}: DialogsType) => {

    const dialogsData =
        store.getState().dialogsPage.names.map((d: { name: string; id: React.Key | null | undefined; }) => <DialogItem
            name={d.name} key={d.id}/>)
    const messagesData =
        store.getState().dialogsPage.messages.map((m: { message: string; id: React.Key | null | undefined; }) =>
            <Message message={m.message} key={m.id}/>)

    const addNewMessage = (formData: formDataDialogType) => onSendMessageClick(formData.message)

    return (
        <section className={classes.container}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsData}
                </div>
                <div className={classes.messages}>
                    {messagesData}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </section>
    )
}

export type formDataDialogType = {
    message: string
}
const maxLength = maxLengthCreator(20)

export const AddMessageForm: React.FC<InjectedFormProps<formDataDialogType>>
    = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'message'}
                placeholder={'Enter your message...'}
                validate={[required, maxLength]}
            />
            <button>send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<formDataDialogType>({form: 'dialogAddMessageForm'})(AddMessageForm)
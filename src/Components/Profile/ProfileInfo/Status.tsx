import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = ({status}: ProfileStatusType) => {

    const [title, setTitle] = useState(status)
    const [editMode, setEditMode] = useState(false)

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
    }

    return <div>
        {
            editMode
                ?
                <div>
                    <input
                        onChange={onChangeTitle}
                        onBlur={offEditMode}
                        autoFocus
                        value={title}
                    />
                </div>
                :
                <div onDoubleClick={onEditMode}>
                    <span>{title}</span>
                </div>

        }
    </div>

}

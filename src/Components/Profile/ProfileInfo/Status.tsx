import React, {ChangeEvent, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatusProfile: (status:string) => void
}

export const ProfileStatus = ({status, updateStatusProfile}: ProfileStatusType) => {

    const [title, setTitle] = useState(status)
    const [editMode, setEditMode] = useState(false)

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        updateStatusProfile(title)
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
                    <span>{status}</span>
                </div>

        }
    </div>

}

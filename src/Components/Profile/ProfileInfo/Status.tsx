import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatusProfile: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
                {
                    this.state.editMode &&
                    <input
                        onBlur={this.deactivateEditMode.bind(true)}
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        value={this.state.status}
                    />
                }
            </div>
        )
    }
}

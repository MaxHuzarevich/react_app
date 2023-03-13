import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatusProfile} from "../../State/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../State/redux-store";
import {compose} from "redux";

type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatusProfile: (status: string) => void
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export type ProfType = MapDispatchToPropsType & MapStateToPropsType

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfType

class Profile_Container extends React.Component<CommonPropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
             this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatusProfile={this.props.updateStatusProfile}
        />
    }
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile, getStatus, updateStatusProfile}), withRouter)(Profile_Container)
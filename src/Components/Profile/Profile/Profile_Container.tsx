import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, savePhoto, updateStatusProfile} from "../../State/profile-reducer";
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
    savePhoto: (photoFile: any) => void
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

    refreshProfile(){
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

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
        {this.refreshProfile()}
    }

    render() {
        return <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatusProfile={this.props.updateStatusProfile}
            savePhoto={this.props.savePhoto}
        />
    }
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile, getStatus, updateStatusProfile, savePhoto}), withRouter)(Profile_Container)
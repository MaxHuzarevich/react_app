import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../State/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../State/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType,
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}


const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export type ProfType = MapDispatchToPropsType & MapStateToPropsType

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfType

class Profile_Container extends React.Component<CommonPropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
        />
    }
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect)(Profile_Container)


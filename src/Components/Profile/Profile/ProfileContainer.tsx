import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {initialStateProfileType, ProfileType, setUserProfile} from "../../State/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

const MapStateToProps = (state: stateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

type stateType = {
    profilePage: initialStateProfileType
}

export type ProfType = MapDispatchToPropsType & MapStateToPropsType

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfType

class Profile_Container extends React.Component<CommonPropsType, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if(!userId){
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            setUserProfile={this.props.setUserProfile}
        />

    }
}

let WithUrlDataContainerComponent = withRouter(Profile_Container)

export default connect(MapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
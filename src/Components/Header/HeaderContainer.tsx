import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../State/redux-store";
import {getAuthUserData, logout} from "../State/auth-reducer";

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type headerContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

class HeaderContainer extends React.Component<headerContainerPropsType, any> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header
            getAuthUserData={this.props.getAuthUserData}
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
        />
    }
}

export default connect(MapStateToProps, {getAuthUserData, logout})(HeaderContainer)
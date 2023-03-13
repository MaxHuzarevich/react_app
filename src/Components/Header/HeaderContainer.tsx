import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../State/redux-store";
import {logout} from "../State/auth-reducer";

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    logout: () => void
}

export type headerContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

class HeaderContainer extends React.Component<headerContainerPropsType, any> {
    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logout={this.props.logout}
        />
    }
}

export default connect(MapStateToProps, {logout})(HeaderContainer)
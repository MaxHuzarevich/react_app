import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {dataType, setAuthUserData} from "../State/auth-reducer";
import {AppStateType} from "../State/redux-store";

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    setAuthUserData: (data: dataType) => void
}

export type headerContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

class HeaderContainer extends React.Component<headerContainerPropsType, any> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header
            setAuthUserData={this.props.setAuthUserData}
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)
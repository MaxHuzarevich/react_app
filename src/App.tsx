import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Setings";
import {SuperDialogsContainer} from "./Components/Dialogs/Dialogs/DialogsContainer";
import {SuperUsersContainer} from './Components/Users/UsersContainer';
import Profile_Container from "./Components/Profile/Profile/Profile_Container";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/LoginPage/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Components/State/app-reducer";
import {AppStateType} from "./Components/State/redux-store";
import {Preloader} from "./Components/Common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToProps = {
    initializeApp: () => void
}
const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

type AppType = MapDispatchToProps & MapStateToPropsType

class App extends React.Component<AppType, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <SuperDialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <Profile_Container/>}/>
                <Route path='/users'
                       render={() => <SuperUsersContainer/>}/>
                <Route path='/news' component={Music}/>
                <Route path='/music' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path={'/login'}
                       render={() => <LoginPage/>}/>
            </div>
        </div>
    }
}

export default connect(MapStateToProps, {initializeApp})(App)

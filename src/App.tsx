import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Setings";
import {SuperUsersContainer} from './Components/Users/UsersContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/LoginPage/LoginPage";
import {connect} from "react-redux";
import {initializeApp} from "./Components/State/app-reducer";
import {AppStateType} from "./Components/State/redux-store";
import {Preloader} from "./Components/Common/Preloader/Preloader";

const SuperDialogsContainer = React.lazy(() => import("./Components/Dialogs/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./Components/Profile/Profile/Profile_Container"));


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
            <div>
                <Route path='/dialogs'
                       render={() =>
                           <Suspense fallback={<Preloader/>}>
                               <SuperDialogsContainer/>
                           </Suspense>
                       }/>
                <Route path='/profile/:userId?'
                       render={() =>
                           <Suspense fallback={<Preloader/>}>
                           <ProfileContainer/>
                           </Suspense>
                       }/>
                <Route path='/users'
                       render={() => <SuperUsersContainer/>}/>
                <Route path='/news' component={Music}/>
                <Route path='/music' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path={'/login'}
                       render={() => <LoginPage/>}/>
            </div>
            <footer>
            Social network
            </footer>
        </div>
    }
}

export default connect(MapStateToProps, {initializeApp})(App)

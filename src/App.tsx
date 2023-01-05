import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Setings";
import {SuperDialogsContainer} from "./Components/Dialogs/Dialogs/DialogsContainer";
import {SuperUsersContainer} from './Components/Users/UsersContainer';
import Profile_Container from "./Components/Profile/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <SuperDialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <Profile_Container />}/>
                <Route path='/users'
                       render={() => <SuperUsersContainer />}/>
                <Route path='/news' component={Music}/>
                <Route path='/music' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}


export default App;

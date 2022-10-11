import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Setings";
import {store} from "./Components/State/redux-store";


function App() {

    const state = store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           newMessageBody={state.dialogsPage.dialogsPage.newMessageBody}
                           messages={state.dialogsPage.dialogsPage.messages} dialogs={state.dialogsPage.dialogsPage.dialogs}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           posts={state.profilePage.profilePage.posts}
                           newPostText={state.profilePage.profilePage.newPostText}/>}/>
                <Route path='/news' component={Music}/>
                <Route path='/music' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}


export default App;

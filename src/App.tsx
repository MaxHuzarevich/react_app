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
import {UnionType} from "./index";

function App({dialogs, messages, posts}: UnionType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs messages={messages} dialogs={dialogs}/>}/>
                <Route path='/profile' render={() => <Profile posts={posts}/>}/>
                <Route path='/news' component={Music}/>
                <Route path='/music' component={News}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {State} from "./Components/State/State";

ReactDOM.render(
    <BrowserRouter>
        <App dialogsPage={State.dialogsPage} profilePage={State.profilePage}/>
    </BrowserRouter>,
    document.getElementById('root')
);
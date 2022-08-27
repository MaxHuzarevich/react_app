import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {State, Subscribe} from "./Components/State/State";

const RerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App dialogsPage={State.dialogsPage} profilePage={State.profilePage} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

RerenderEntireTree();

Subscribe(RerenderEntireTree);
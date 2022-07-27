import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export type UnionType = {
    posts: postType[]
    dialogs: dialogType[]
    messages: messageType[]
}

export type PostsType = {
    posts: postType[]
}
export type DialogsType = {
    dialogs: dialogType[]
    messages: messageType[]
}

export type postType = {
    id: number
    message: string
    like: number
    dislike: number
}

const posts: Array<postType> = [
    {id: 1, message: 'Hi!', like: 1, dislike: 3},
    {id: 2, message: 'Hello!', like: 2, dislike: 1},
    {id: 3, message: 'What?!', like: 5, dislike: 6},
    {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
    {id: 5, message: 'What is your name?', like: 2, dislike: 0},
]

export type dialogType = {
    id: number
    name: string
}

const dialogs: Array<dialogType> = [
    {id: 1, name: 'Josh'},
    {id: 2, name: 'Matt'},
    {id: 3, name: 'Fill'},
    {id: 4, name: 'Bob'},
    {id: 5, name: 'Cris'},
]


export type messageType = {
    id: number
    message: string
}

const messages: Array<messageType> = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'Go!'},
    {id: 4, message: 'What!'},
    {id: 5, message: 'Ooo!'},
]

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} messages={messages} dialogs={dialogs}/>
    </BrowserRouter>,
    document.getElementById('root')
);
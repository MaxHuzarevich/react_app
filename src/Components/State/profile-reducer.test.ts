import {addPostAC, deletePostAC, initialStateProfileType, profileReducer, ProfileType} from "./profile-reducer";


test('new post should be added', () => {
    //data
    let action = addPostAC('New Post')
    let initialState: initialStateProfileType = {
        posts: [
            {id: 1, message: 'Hi!', like: 1, dislike: 3},
            {id: 2, message: 'Hello!', like: 2, dislike: 1},
            {id: 3, message: 'What?!', like: 5, dislike: 6},
            {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
            {id: 5, message: 'What is your name?', like: 2, dislike: 0},
        ],
        profile: {} as ProfileType,
        status: ''
    }
    //action
    let newState = profileReducer(initialState, action)
    //expectation
    expect(newState.posts.length).toBe(6)
    expect(newState.posts[5].message).toBe('New Post')
})

test('post should be deleted', () => {
    //data
    let action = deletePostAC(1)
    let initialState: initialStateProfileType = {
        posts: [
            {id: 1, message: 'Hi!', like: 1, dislike: 3},
            {id: 2, message: 'Hello!', like: 2, dislike: 1},
            {id: 3, message: 'What?!', like: 5, dislike: 6},
            {id: 4, message: 'I love deep !!!', like: 7, dislike: 1},
            {id: 5, message: 'What is your name?', like: 2, dislike: 0},
        ],
        profile: {} as ProfileType,
        status: ''
    }
    //action
    let newState = profileReducer(initialState, action)
    //expectation
    expect(newState.posts.length).toBe(4)
})
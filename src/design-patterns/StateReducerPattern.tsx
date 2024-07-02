import React, { useReducer } from 'react'

const initState = {
    loggedIn: false,
    user: null,
    token: null,
};

interface IAction {
    payload?: { user: { name: string }, token: string },
    type: string
}


const authReducer = (state: any, action: IAction) => {
    switch (action.type) {
        case "login":
            return {
                loggedIn: true,
                user: action?.payload?.user,
                token: action?.payload?.token,
            };
        case "logout":
            return initState;
        default:
            break;
    }
}


export const StateReducerPattern = () => {
    const [state, dispatch] = useReducer(authReducer, initState);

    const logIn = () => {
        dispatch({
            type: "login",
            payload: {
                user: { name: "John Doe" },
                token: "token",
            },
        });
    };

    const logOut = () => {
        dispatch({ type: "logout" });
    };

    return (
        <div>
            {state?.loggedIn ? (
                <div>
                    <p> Welcome {state?.user?.name} </p>
                    <button onClick={logOut}></button>
                </div>
            ) : (
                <form onSubmit={logIn}>
                    <input type="text" />
                    <input type="password" />
                    <button type="submit"></button>
                </form>
            )}
        </div>
    )
}


// ------------------- example two --------------------

// Action types
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';

// Reducer function
const dashboardReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter((post: { id: number; }) => post.id !== action.payload.id) };
        case ADD_NOTIFICATION:
            return { ...state, notifications: [...state.notifications, action.payload] };
        case DELETE_NOTIFICATION:
            return { ...state, notifications: state.notifications.filter((notification: { id: number }) => notification.id !== action.payload.id) };
        default:
            return state;
    }
};

// Dashboard component
const Dashboard = () => {
    // Initialize state using useReducer hook
    const [state, dispatch] = useReducer(dashboardReducer, { posts: [], notifications: [] });

    // Add post function
    const addPost = (text: string) => {
        const newPost = { id: Date.now(), text };
        dispatch({ type: ADD_POST, payload: newPost });
    };

    // Delete post function
    const deletePost = (id: number) => {
        dispatch({ type: DELETE_POST, payload: { id } });
    };

    // Add notification function
    const addNotification = (text: string) => {
        const newNotification = { id: Date.now(), text };
        dispatch({ type: ADD_NOTIFICATION, payload: newNotification });
    };

    // Delete notification function
    const deleteNotification = (id: number) => {
        dispatch({ type: DELETE_NOTIFICATION, payload: { id } });
    };

    return (
        <div>
            <h1>Social Media Dashboard</h1>
            <div>
                <h2>Posts</h2>
                <ul>
                    {state.posts.map((post: { id: number, text: string }) => (
                        <li key={post.id}>
                            {post.text}
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => addPost('New post')}>Add Post</button>
            </div>
            <div>
                <h2>Notifications</h2>
                <ul>
                    {state.notifications.map((notification: { id: number, text: string }) => (
                        <li key={notification.id}>
                            {notification.text}
                            <button onClick={() => deleteNotification(notification.id)}>Dismiss</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => addNotification('New notification')}>Add Notification</button>
            </div>
        </div>
    );
};

export default Dashboard;

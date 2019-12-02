const initState = {
    username: undefined,
    email: undefined,
    phone: undefined,
    fullname: undefined,
    avatar: undefined,
    usertoken: undefined,

    err: undefined,
    callbackLink: undefined,
};

export default function auth(state = initState, action) {
    switch (action.type) {
        case 'LOGIN':
            state = {
                ...state,
                username: action.user.username,
                email: action.user.email,
                phone: action.user.phone,
                fullname: action.user.fullname,
                avatar: action.user.avatar,
                usertoken: action.user.token,
                err: undefined
            };
            return state;
        case 'LOGIN_ERR': {
            state = {
                ...state,
                username: undefined,
                email: undefined,
                phone: undefined,
                fullname: undefined,
                avatar: undefined,
                usertoken: undefined,
                err: 400
            };
            return state;
        }
        case 'CALLBACK_LINK': {
            state = {
                ...state,
                callbackLink: action.link
            }
            return state;
        }
        default:
            return state;
    }
}

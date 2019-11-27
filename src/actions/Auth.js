import { callApiLogin } from '../utils/apiCaller';

export const actLogin = user => ({
    type: 'LOGIN',
    user
});

export const actLoginErr = () => ({
    type: 'LOGIN_ERR'
});

export const actLoginRequest = user => {
    return dispatch => {
        return callApiLogin(user)
            .then(res => {
                localStorage.setItem('username', res.data.user.username);
                localStorage.setItem('email', res.data.user.email);
                localStorage.setItem('fullname', res.data.fullname);
                localStorage.setItem('phone', res.data.phone);
                localStorage.setItem('avatar', res.data.user.avatar);
                localStorage.setItem('usertoken', res.data.token);
                dispatch(actLogin(res.data));
            })
            .catch(() => {
                dispatch(actLoginErr());
            });
    };
};

export const actGetUser = () => {
    return dispatch => {
        dispatch(
            actLogin({
                username: localStorage.getItem('username'),
                email: localStorage.getItem('email'),
                fullname: localStorage.getItem('fullname'),
                phone: localStorage.getItem('phone'),
                avatar: localStorage.getItem('avatar'),
                usertoken: localStorage.getItem('usertoken')
            })
        );
    };
};


export const actLogout = () => {
    return dispatch => {
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('fullname');
        localStorage.removeItem('phone');
        localStorage.removeItem('avatar');
        localStorage.removeItem('usertoken');
        dispatch(actLogin({ username: undefined, usertoken: undefined }));
    };
};

export const actCallbackLink = link => ({
    type: 'CALLBACK_LINK',
    link
});
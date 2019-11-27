import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { actLoginRequest, actGetUser, actLogout, actCallbackLink } from '../actions/Auth';

const mapStateToProps = state => ({
    username: state.Auth.username,
    usertoken: state.Auth.usertoken,
    email: state.Auth.email,
    phone: state.Auth.phone,
    fullname: state.Auth.fullname,
    avatar: state.Auth.avatar,

    err: state.Auth.err,
    callbackLink: state.Auth.callbackLink
});

const mapDispatchToProps = dispatch => ({

    actLoginRequest: (user) => {
        dispatch(actLoginRequest(user));
    },

    actGetUser: () => {
        dispatch(actGetUser());
    },

    actLogout: () => {
        dispatch(actLogout());
    },

    actCallbackLink: link => {
        dispatch(actCallbackLink(link));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

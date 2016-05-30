import {UserAuthWrapper} from 'redux-auth-wrapper';
import { replace } from 'react-router-redux';

export const Authenticated =  UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    failureRedirectPath: 'landing',
    predicate: user => user.loggedIn
});

export const Public = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: replace,
    wrapperDisplayName: 'RedirectIfAuthenticated',
    failureRedirectPath: 'dashboard',
    predicate: user => !user.loggedIn
});

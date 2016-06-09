import AlertApi from '../api/alert-api';
import { push } from 'react-router-redux';

export function listAlerts(ownerId) {
    return dispatch => {
        AlertApi.list(ownerId, (alerts) => {
            dispatch({
                type: 'ALERTS_RECEIVED',
                alerts: alerts
            });
        }, (error) => {
            dispatch({
                type: 'ALERTS_NOT_FOUND'
            });
        });
    };
}

export function findById(id) {
    return dispatch => {
        AlertApi.findById(id, (alert) => {
            dispatch({
                type: 'GET_ALERT_SUCCESSFUL',
                alert: alert
            });
        }, (error) => {
            dispatch({
                type: 'GET_ALERT_UNSUCCESSFUL',
                error: error
            });
        });
    };
}

export function createAlert(newAlert) {

    return dispatch => {
        AlertApi.createAlert(newAlert, (alert) => {
            dispatch({
                type: 'CREATE_ALERT_SUCCESSFUL',
                alert: alert
            });
            dispatch(push('/dashboard'));
        }, (error) => {
            dispatch({
                type: 'CREATE_ALERT_UNSUCCESSFUL',
                error: error
            });
        });
    };
}

export function cancel() {
    return dispatch => {
        dispatch({
            type: 'CREATE_ALERT_CANCEL'
        });
        dispatch(push('/dashboard'));
    };
}

export function resetAlertState() {
    return dispatch => {
        dispatch({
            type: 'RESET_ALERT_STATE'
        });
    };
}

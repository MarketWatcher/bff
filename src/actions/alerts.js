import AlertApi from '../api/alert-api';

export function listAlerts() {
    return dispatch => {
        AlertApi.list((alerts) => {
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

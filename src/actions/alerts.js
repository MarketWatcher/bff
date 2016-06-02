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

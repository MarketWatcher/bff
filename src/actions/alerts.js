import AlertApi from '../api/alert-api';

export function findAlertById(id) {
    return dispatch => {
        AlertApi.find(id, (alert)=> {
            dispatch({
                type: 'ALERT_RECEIVED',
                alert: alert
            });
        }, (err) => {
            dispatch({
                type: 'ALERT_NOT_FOUND'
            });
        });
    };
}

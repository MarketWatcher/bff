import { push } from 'react-router-redux'
import * as Constants  from "../Constants.js"

export function saveAlert(alertName, requiredCriteria, niceTohaveCriteria, excludedCriteria, alertThreshold) {
    return dispatch => {

        let requiredCriteriaList = requiredCriteria.split(',');
        let niceTohaveCriteriaList = niceTohaveCriteria.split(',');
        let excludedCriteriaList = excludedCriteria.split(',');

        if(isNumberOfCriteriaValid(requiredCriteriaList, niceTohaveCriteriaList, excludedCriteriaList)) {

            /* validation phase */
            requiredCriteriaList.map(
                criteria => {
                    if (criteria.length > Constants.MAX_PHRASE_LENGTH) {
                        createAlertAction(false, {});
                        return;
                    }
                }
            );
            /* save */
            createAlertAction(true, {alertName : alertName, requiredCriteria: requiredCriteriaList, niceTohaveCriteria: niceTohaveCriteriaList,
                excludedCriteria: excludedCriteriaList, alertThreshold : alertThreshold});

            } else {
                createAlertAction(false, {});
            }
        }
    }

    function isNumberOfCriteriaValid(requiredCriteriaList, niceTohaveCriteriaList, excludedCriteriaList) {
        return requiredCriteriaList.length < Constants.MAX_CRITERIA_NUMBER &&  niceTohaveCriteriaList.length < Constants.MAX_CRITERIA_NUMBER && excludedCriteriaList.length < Constants.MAX_CRITERIA_NUMBER;
    }

    function createAlertAction(success, payload) {
        if (success) {
            dispatch(
                { type : 'ALERT_SAVE_SUCCESSFUL',
                alert: payload
            });
        } else {
            dispatch({
                type: 'ALERT_SAVE_UNSUCCESSFUL'
            });
        }
    }

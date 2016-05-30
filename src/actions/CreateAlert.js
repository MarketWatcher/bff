import { push } from 'react-router-redux';
import * as Constants  from "../Constants.js";

export function saveAlert(alertName, requiredCriteria, niceTohaveCriteria, excludedCriteria, alertThreshold) {
    let requiredCriteriaList = requiredCriteria.split(',');
    let niceTohaveCriteriaList = niceTohaveCriteria.split(',');
    let excludedCriteriaList = excludedCriteria.split(',');

    if(isNumberOfCriteriaValid(requiredCriteriaList, niceTohaveCriteriaList, excludedCriteriaList)) {

        /* validation phase */
        requiredCriteriaList.map(
            criteria => {
                if (criteria.length > Constants.MAX_PHRASE_LENGTH) {
                    return {
                        type: 'ALERT_SAVE_UNSUCCESSFUL'
                    };
                }
            }
        );
        /* save */
        return {
            type : 'ALERT_SAVE_SUCCESSFUL',
            alert : {alertName : alertName, requiredCriteria: requiredCriteriaList, niceTohaveCriteria: niceTohaveCriteriaList,
                excludedCriteria: excludedCriteriaList, alertThreshold : alertThreshold}
            }
        } else {
            return {
                type: 'ALERT_SAVE_UNSUCCESSFUL'
            };
        }
    }

    function isNumberOfCriteriaValid(requiredCriteriaList, niceTohaveCriteriaList, excludedCriteriaList) {
        var isValid = requiredCriteriaList.length < Constants.MAX_CRITERIA_NUMBER &&  niceTohaveCriteriaList.length < Constants.MAX_CRITERIA_NUMBER && excludedCriteriaList.length < Constants.MAX_CRITERIA_NUMBER;
        return isValid && requiredCriteriaList != '';
    }

    function dispatchCreateAlert(success, payload) {
        return dispatch => {
            dispatch(saveAlert());
        }
    }

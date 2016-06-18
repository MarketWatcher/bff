import Joi from "joi"

export default Joi.object().keys({
    name: Joi.string().alphanum().required().min(3).max(32).label("Alert title"),
    requiredCriteria: Joi.string().required().max(140).label("Must include"),
    niceTohaveCriteria: Joi.string().max(140).empty("").label("Can include"),
    excludedCriteria: Joi.string().max(140).empty("").label("Exclude criteria"),
    threshold: Joi.number().required().min(1).max(1000000).label("Threshold")
}).unknown()

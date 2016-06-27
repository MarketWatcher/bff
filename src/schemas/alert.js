import Joi from "joi"

export default Joi.object().keys({
    name: Joi.string().min(3).max(32).label("Alert title").regex(/^[a-zA-Z0-9şŞıİçÇöÖüÜğĞ_ ]*$/).options({ language: { string:{ regex: { base: "must be alphanumeric"}}, any: { empty: "length must be at least 3 characters long"}}}),
    requiredCriteria: Joi.string().required().max(140).label("Must include").regex(/^[a-zA-Z0-9şŞıİçÇöÖüÜğĞ_, ]*$/).options({ language: { string:{ regex: { base: "must be alphanumeric" }}}}),
    niceTohaveCriteria: Joi.string().max(140).empty("").label("Can include").regex(/^[a-zA-Z0-9şŞıİçÇöÖüÜğĞ_, ]*$/).options({ language: { string:{ regex: { base: "must be alphanumeric"}}}}),
    excludedCriteria: Joi.string().max(140).empty("").label("Exclude criteria").regex(/^[a-zA-Z0-9şŞıİçÇöÖüÜğĞ_, ]*$/).options({ language: { string:{ regex: { base: "must be alphanumeric"}}}}),
    threshold: Joi.number().required().min(1).max(1000000).label("Threshold")
}).unknown()

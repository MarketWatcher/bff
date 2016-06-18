import Joi from "joi"

export default class Validator {
    constructor(schema) {

        this.schema = schema
        this._errors = {}
        this._valid = false
    }

    get errors() {
        return this._errors
    }

    get isValid() {
        return this._valid
    }

    validate(value, cb) {
        this._valid = true
        this._errors = {}

        Joi.validate(value, this.schema, {abortEarly: false}, (error) => {
            if(!error) {
                return
            }
            this._valid = false
            for(let detail of error.details) {
                this._errors[detail.path] = {
                    message: detail.message
                }
            }

            if(cb) cb()
        })
    }

    validateField(field, value) {
        let subSchema = Joi.reach(this.schema, field)

        try{
            Joi.assert(value, subSchema)
            if(this._errors[field]) delete this._errors[field]
        } catch(error) {
            if(!this._errors[field]) this._errors[field] = {}

            for(let detail of error.details) {
                this._errors[field] = {
                    message: detail.message
                }
            }
        }
    }
}

import { expect } from "chai"
import Validator from "../../src/utils/validator"
import Joi from "joi"

let schemaFixture = Joi.object().keys({
    field1: Joi.string().required().min(3).max(32).label("Field 1"),
    field2: Joi.number()
})

describe("Validator", () => {
    it("validates a valid object against the full schema and set isValid to true", () => {
        let validator = new Validator(schemaFixture)
        var validObject = {
            field1: "String",
            field2: 5
        }

        validator.validate(validObject, ()=> {
            expect(validator.isValid).to.equal(true)
        })
    })

    it("validates a valid object against the full schema and set errors to empty object", () => {
        let validator = new Validator(schemaFixture)
        var validObject = {
            field1: "String",
            field2: 5
        }

        validator.validate(validObject, ()=> {
            expect(validator.errors).to.eql({})
        })
    })

    it("validates an invalid object with one invalid field and set erros object to include invalid field", () => {
        let validator = new Validator(schemaFixture)
        var invalidObject = {
            field1: "ab",
            field2: 5
        }

        validator.validate(invalidObject, ()=> {
            expect(validator.errors).to.eql({
                field1: {
                    message: "\"Field 1\" length must be at least 3 characters long"
                }
            })
        })
    })

    it("validates an invalid object with one invalid field and set isValid to false", () => {
        let validator = new Validator(schemaFixture)
        var invalidObject = {
            field1: "ab",
            field2: 5
        }

        validator.validate(invalidObject, ()=> {
            expect(validator.isValid).to.equal(false)
        })
    })

    it("validates an invalid object with more than one invalid field and reflect that on errors field", () => {
        let validator = new Validator(schemaFixture)
        var invalidObject = {
            field1: "ab",
            field2: "not a number"
        }

        validator.validate(invalidObject, ()=> {
            expect(validator.errors).to.eql({
                field1: {
                    message: "\"Field 1\" length must be at least 3 characters long"
                },
                field2: {
                    message: "\"field2\" must be a number"
                }
            })
        })
    })

    it("validates only one field of an invalid object with more than one invalid field but report only one field in the errors field", () => {
        let validator = new Validator(schemaFixture)
        var invalidObject = {
            field1: "ab",
            field2: "not a number"
        }

        validator.validateField("field1", invalidObject.field1)
        expect(validator.errors).to.eql({
            field1: {
                message: "\"Field 1\" length must be at least 3 characters long"
            }
        })
    })
})

// VALIDATION
const Joi = require('@hapi/joi');


// REGISTER VALIDATION
const registerValidation = data =>{
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// LOGIN VALIDATION
const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// Edit||Update user validation
const updateValidaiton = data => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        password: Joi.string().min(8).required(),
        userImage: Joi.string(),
        // gender: Joi.string().min(3).required(),
        // birthday: Joi.date().required(),
    });
    return schema.validate(data);
}
// Email validation
const emailValidaiton = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
    });
    return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.updateValidaiton = updateValidaiton;
module.exports.emailValidaiton = emailValidaiton;
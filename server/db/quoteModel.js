const Joi = require('joi');
const db = require('./connection');
const schema = Joi.object().keys({
    Quote: Joi.string().max(300).required(),
    Source: Joi.string().alphanum().required(),

});

const quotes = db.get('quotes');

function getAll() {
    return quotes.find()
}

function create(quote) {
    if (!quote.Source) quote.Source = 'unknown';
    const result = Joi.validate(quote, schema);
    if (result.error == null) {
        quote.created = new Date();
        return quotes.insert(quote);
    }else{
        return Promise.reject(result.error);
    }
}
module.exports = {
    getAll,
    create
}
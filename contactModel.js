var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    poin: {
        type: Number,
        min: 0,
        unique: true
    },
    phone: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact
var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
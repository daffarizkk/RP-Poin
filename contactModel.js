var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    poin: {
        type: Number,
        min: 0,
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

Contact = require('./contactModel');

//Handle Index
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.new = function (req, res) {
    var contact = new Contact();
    contact.user_id = req.body.user_id;
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.poin = req.body.poin;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    // save the contact
    contact.save(function (err) {
         if (err)
              res.json(err);

    res.json({
                message: 'New Contact created!',
                data: contact
        });
    });
};

// Handle view
exports.view = function (req, res) {
    Contact.findOne({user_id:req.params.contactuser_id}, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

//Handle update contact info
exports.update = function (req, res) {

Contact.findOne({user_id:req.params.contactuser_id}, function (err, contact) {
        if (err)
            res.send(err);

contact.name = req.body.name ? req.body.name : contact.name;
        contact.user_id = req.body.user_id;
        contact.gender = req.body.gender;
        contact.poin = req.body.poin;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

// save the contact
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact info updated',
                data: contact
            });
        });
    });
};

//Handle update poin
exports.poin = function (req, res) {

    Contact.findOne({user_id:req.params.contactuser_id}, function (err, contact, value) {
            if (err)
                res.send(err);

    contact.name = req.body.name ? req.body.name : contact.name;
            contact.user_id = req.body.user_id;
        //    contact.gender = req.body.gender;
            contact.poin = Math.round(parseInt(contact.poin) + parseInt(req.body.poin));
            //  contact.poin + req.body.poin;
          //  contact.email = req.body.email;
            //contact.phone = req.body.phone;
    
    // save the contact
            contact.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Poin updated',
                    data: contact
                });
            });
        });
    };


// DELETE
exports.delete = function (req, res) {
    Contact.remove({
        user_id: req.params.contactuser_id
    }, function (err, contact) {
        if (err)
            res.send(err);

res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};

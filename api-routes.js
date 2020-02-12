let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to REST',
    });
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/users')
    .get(contactController.index)
    .post(contactController.new);
router.route('/users/:contactuser_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
//Contact poin
router.route('/poin')
    .get(contactController.index)
    .post(contactController.new);
router.route('/poin/:contactuser_id')
    .post(contactController.poin)
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;

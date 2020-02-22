const auth = require('../../../auth');
const response = require('../../../network/response');


module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        switch (action) {
            case 'update':
                const owner = req.body.id
                auth.check.own(req, owner) && response.success(req, res, `${req.body.name} editado`, 201);
                next();
                break;

            case 'follow':
                auth.check.logged(req);
                next();
                break;

            default:
                next();
        }
    }

    return middleware;
}
exports.success = function(req, res, message = "", status){
    let statusCode = status || 200;
    let statusMessage = message || '';
    res.status(status).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    })
}

exports.success = function(req, res, message, status ){
    let statusCode = status || 500;
    let statusMessage = message || 'internal server error';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    })
}
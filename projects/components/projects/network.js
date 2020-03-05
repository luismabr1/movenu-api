const express = require('express');

const response = require('../../../network/response');
const auth = require('./secure');
const Controller = require('./index');

const router = express.Router();

// Set routes
router.get('/', list);
router.get('/:id', auth('get'), get);
router.post('/', auth('add'), upsert);
router.put('/', auth('update', { owner: 'user' }), upsert);

// Router functions
function list(req, res, next) {
    Controller.list()
        .then(project => {
            response.success(req, res, project, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then(project => {
            response.success(req, res, project, 200);
        })
        .catch(next);
}

function upsert(req, res, next) {
    Controller.upsert(req.body, req.user.id)
        .then(project => {
            response.success(req, res, project, 201);
        })
        .catch(next);
}


module.exports = router;
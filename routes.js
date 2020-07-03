var bodyParser = require('body-parser');

var routes = function () {
    var router = require('express').Router();
    
    router.use(bodyParser.urlencoded({
        extended: true
    }));

    return router;
};

module.exports = routes();
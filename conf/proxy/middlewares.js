'use strict';

/**
 * Express middleware to proxy API requests to the data registry, monitoring
 * and user management servers in development, staging and production
 * environments.
 */
var S = require('string'), request = require('request');

var data,
  environments = JSON.stringify(['DEVELOPMENT','QA','STAGING','PRODUCTION']),
  err,
  options,
  priorities = JSON.stringify(['LOW','MEDIUM','HIGH']);

/**
 * Execute http request
 * @param req Request
 * @param res Response
 * @param options Request options
 */
function executeRequest(req, res, options) {
  console.log("%s %s", req.method, options.url);
  if (req.method === 'DELETE') {
    request.del(options).pipe(res);
  } else if (req.method === 'GET') {
    request.get(options).pipe(res);
  } else if (req.method === 'POST') {
    options.body = req.body;
    options.json = true;
    request.post(options).pipe(res);
  } else if (req.method === 'PUT') {
    options.body = req.body;
    options.json = true;
    request.put(options).pipe(res);
  }
}

module.exports = {
  // default URL to the API
  api: 'http://localhost:8080/',

  // API authentication credentials
  auth: {
    user: null,
    pass: null
  },

  // middleware functions should be listed here in reverse order to their
  // intended execution ex. C, B, A
  middlewares: [
    /**
     * Handle other requests.
     * @param req Request
     * @param res Response
     * @param next Next
     */
    function (req, res, next) {
      if (S(req.url).startsWith('/api/environments')) {
        res.setHeader('Content-Type', 'application/json');
        res.write(environments);
        res.end();
      } else if (S(req.url).startsWith('/api/log')) {
        res.send(200);
      } else {
        next();
      }
    },

    /**
     * Handle version identifier request.
     * @param req Request
     * @param res Response
     * @param next Next
     */
    function (req, res, next) {
      var options = {};
      if (S(req.url).startsWith('/api/version')) {
        options = {
          headers: {'Access-Control-Allow-Origin': '*'},
          url: module.exports.api + S(req.url).chompLeft('/api').s
        };
        options.auth = module.exports.auth.user ? module.exports.auth : null;
        executeRequest(req, res, options);
      } else {
        next();
      }
    },

    /**
     * Handle data registry requests.
     * @param req Request
     * @param res Response
     * @param next Next
     */
    function (req, res, next) {
      var options = {};
      if (S(req.url).startsWith('/api/data-registry')) {
        options = {
          headers: {'Access-Control-Allow-Origin': '*'},
          url: module.exports.api + S(req.url).chompLeft('/api').s
        };
        options.auth = module.exports.auth.user ? module.exports.auth : null;
        executeRequest(req, res, options);
      } else {
        next();
      }
    },

    /**
     * Handle monitoring service requests.
     * @param req Request
     * @param res Response
     * @param next Next
     */
    function (req, res, next) {
      var options = {};
      if (S(req.url).startsWith('/api/monitor/environments')) {
        res.setHeader('Content-Type', 'application/json');
        res.write(environments);
        res.end();
      } if (S(req.url).startsWith('/api/monitor/priority')) {
        res.setHeader('Content-Type', 'application/json');
        res.write(priorities);
        res.end();
      } else if (S(req.url).startsWith('/api/monitor')) {
        options = {
          headers: {'Access-Control-Allow-Origin': '*'},
          url: module.exports.api + S(req.url).chompLeft('/api').s
        };
        options.auth = module.exports.auth.user ? module.exports.auth : null;
        executeRequest(req, res, options);
      } else {
        next();
      }
    },

    /**
     * Handle monitoring service requests.
     * @param req Request
     * @param res Response
     * @param next Next
     */
      function (req, res, next) {
      if (S(req.url).startsWith('/api/monitor/environments')) {
        res.setHeader('Content-Type', 'application/json');
        res.write(environments);
        res.end();
      } else {
        next();
      }
    },

    /**
     * Handle user management service requests.
     * @param req Request
     * @param res Response
     * @param next Next
     */
    function (req, res, next) {
      var options = {};
      if (S(req.url).startsWith('/api/user-management')) {
        options = {
          headers: {'Access-Control-Allow-Origin': '*'},
          url: module.exports.api + S(req.url).chompLeft('/api').s
        };
        options.auth = module.exports.auth.user ? module.exports.auth : null;
        executeRequest(req, res, options);
      } else {
        next();
      }
    },

    /**
     * Get body data from POST, PUT request and add it to the request
     * object.
     * FIXME replace with connect body parser or equivalent
     * @param {Object} req Request
     * @param {Object} res Response
     * @param {Object} next Next
     */
      function (req, res, next) {
      if (req.method === 'POST' || req.method === 'PUT') {
        req.setEncoding('utf8');
        req.on('data', function (data) {
          req.body = JSON.parse(data);
          next();
        });
      } else {
        next();
      }
    }

  ]
};

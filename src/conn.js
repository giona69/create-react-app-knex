const Utils = require('../bin/utils');
// eslint-disable-next-line
const Knex = require('knex');

Utils.log('knex init');

const config = {
    user: process.env.CLOUDSQL_USER,
    password: process.env.CLOUDSQL_PASSWORD,
    database: process.env.CLOUDSQL_DATABASE,
};

if (process.env.HMI_ENV === 'dev') {
    config.host = process.env.SQL_HOST;
} else {
    config.socketPath = `/cloudsql/${process.env.CLOUDSQL_CONNECTION_NAME}`;
    Utils.log('LOG: ' + config.socketPath);
}

// eslint-disable-next-line
const knex = Knex({
    client: process.env.SQL_CLIENT,
    connection: config,
});

module.exports = knex;

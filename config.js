module.exports = {
    api: {
        port: process.env.API_PORT || 3002
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',

        user: process.env.MYSQL_USER || 'U3NJDpQoxN',

        password: process.env.MYSQL_PASS || 'MJF2R75oa5',

        database: process.env.MYSQL_DB || 'U3NJDpQoxN',

    }
}
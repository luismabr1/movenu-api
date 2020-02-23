module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3002
    },
    post: {
        port: process.env.POST_PORT || 3003
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret'
    },
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',

        user: process.env.MYSQL_USER || 'lbrito',

        password: process.env.MYSQL_PASS || 'ThuReal.Dulc3',

        database: process.env.MYSQL_DB || 'movenu_db',

    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || '127.0.0.1',
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}
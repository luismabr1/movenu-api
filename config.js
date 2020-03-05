module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3002
    },
    post: {
        port: process.env.POST_PORT || 3003
    },
    project: {
        port: process.env.PROJECT_PORT || 3005
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'nosecret'
    },
    /*     mysql: {
            host: process.env.MYSQL_HOST || '127.0.0.1',

            user: process.env.MYSQL_USER || 'lbrito',

            password: process.env.MYSQL_PASS || 'ThuReal.Dulc3',

            database: process.env.MYSQL_DB || 'movenu_db',

        }, */
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',

        user: process.env.MYSQL_USER || 'U3NJDpQoxN',

        password: process.env.MYSQL_PASS || '6NlXD034oS',

        database: process.env.MYSQL_DB || 'U3NJDpQoxN',

    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || '127.0.0.1',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || '127.0.0.1',
        port: process.env.MYSQL_SRV_PORT || 3004,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-12187.c100.us-east-1-4.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '12187',
        password: process.env.REDIS_PASS || 'Lbi8qLJrRtpfVWMBe3tn5h6rlhr418v8',
    }
}
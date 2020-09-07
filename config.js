module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3001
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
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',

        user: process.env.MYSQL_USER || 'U3NJDpQoxN',

        password: process.env.MYSQL_PASS || '6NlXD034oS',

        database: process.env.MYSQL_DB || 'U3NJDpQoxN',

        },

/*     ho: ocess.env.MYSQL_HOST || 'remotemysql.com',

    user: process.env.MYSQL_USER || 'U3NJDpQoxN',

    : process.env.MYSQL_PASS || '6NlXD034oS',

    daba: process.env.MYSQL_DB || 'U3NJDpQoxN', */

    /*     mysql: {
                    host: process.env.MYSQL_HOST || 'localhost',
    
                    user: process.env.MYSQL_USER || 'id11735746_lbrito',
    
                    password: process.env.MYSQL_PASS || 'balt0atena',
    
                    database: process.env.MYSQL_DB || 'id11735746_movenu_db',
    
                }, */
    mysqlService: {
            host: process.env.MYSQL_SRV_HOST || '127.0.0.1',
            port: process.env.MYSQL_SRV_PORT || 3002,
        },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || '127.0.0.1',
        port: process.env.MYSQL_SRV_PORT || 3004,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-16916.c85.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '16916',
        password: process.env.REDIS_PASS || 'alMzqCm8VetjEQsPITspXuSZBdv0GCsW',
        }
}


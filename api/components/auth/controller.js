const auth = require('../../../auth');
const bcrypt = require('bcrypt');
const TABLA = 'auth';

module.exports = function(injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(username, password) {
        const data = await store.query(TABLA, { username: username });

        /*         return bcrypt.compare(password, data.password)
                    .then(sonIguales => {
                        if (sonIguales === true) {
                            // Generar token;
                            return auth.sign(JSON.parse(JSON.stringify(data)));
                        } else {
                            throw new Error('Información inválida')
                        }
                    }) */

        // Busca en la tabla todos los valores "username"

        const match = await bcrypt.compare(password, data.password);
        if (!match) {
            thrownewError("Informacion invalida");
        }
        //Generar token
        return auth.sign({...data });
    }

    async function upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.upsert(TABLA, authData, isNew = 1);
    }

    return {
        login,
        upsert,
    };
};
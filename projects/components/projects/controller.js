const nanoid = require('nanoid');
const error = require('../../../utils/error');

const COLLECTION = 'projects';

module.exports = function(injectedStore) {
    let Store = injectedStore;
    if (!Store) {
        Store = require('../../../store/dummy');
    }

    function list(query) {
        return Store.list(COLLECTION);
    }

    async function get(id) {
        const projects = await Store.get(COLLECTION, id);
        if (!projects) {
            throw error('No existe el projectos', 404);
        }

        return projects;
    }

    async function upsert(data, user) {
        const project = {
            id: data.id,
            user: user,
            description: data.text,
            url: data.url
        }

        if (!project.id) {
            project.id = nanoid();
        }

        return Store.upsert(COLLECTION, project);
    }


    return {
        list,
        get,
        upsert,
    }
}
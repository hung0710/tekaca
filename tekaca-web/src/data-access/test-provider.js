import client from '@utils/client-utils'
import constants from '@strings'
export default {
    getAll() {
        return new Promise((resolve, reject) => {
            client.requestApi('get', constants.api.test.all, {}).then(s => {
                resolve(s)
            }).catch(e => {
                reject(e)
            })
        })
    },
}
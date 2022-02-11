import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const mainModule = {
    state: () => ({
        products: []
    }),
    actions,
    mutations,
    getters
};
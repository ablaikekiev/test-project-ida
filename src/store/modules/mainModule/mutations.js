import types from "./types";

const mutations = {
    [types.SET_PRODUCTS](state, products) {
        state.products = products
    },
    addProduct(state, product) {
        state.products = [...state.products, product]
    },
    deleteProduct(state, productId) {
        state.products = state.products.filter(i => {
            return i.id !== productId
        })
    },
    toLocalStore(state, products) {
        return state.products = products
    }
}

export default mutations
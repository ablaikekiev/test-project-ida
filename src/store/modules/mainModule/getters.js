const getters = {
    getProducts(state) {
        return state.products
    },
    sortPriceUp(state) {
        return state.products.sort((a, b) => a.price > b.price ? 1 : -1)
    },
    sortPriceDown(state) {
        return state.products.sort((a, b) => a.price < b.price ? 1 : -1)
    },
    sortByName(state) {
        return state.products.sort((a, b) => a.product?.localeCompare(b.product))
    }
}

export default getters
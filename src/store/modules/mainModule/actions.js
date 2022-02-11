import types from './types'
import axios from "axios";
import photo from '@/assets/photo.png'

const actions = {
    async setProducts({commit}) {
        const {data} = await axios.get('https://allianceplusserver.herokuapp.com/products')
        commit(types.SET_PRODUCTS, data.slice(12, 18).map(i => {
            return {
                ...i,
                product: 'Наименование товара',
                description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                img: photo,
                price: 10000
            }
        }))
    }
}

export default actions
import {createStore} from 'vuex'
import {mainModule} from '@/store/modules/mainModule/index'

export default createStore({
    modules: {
        mainModule
    }
})

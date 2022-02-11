<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {onMounted} from 'vue'

    export default {
        setup() {
            const store = useStore()
            const setProducts = () => {
                store.dispatch('setProducts')
            }
            const addLocalStore = () => {
                return store.commit('toLocalStore', JSON.parse(localStorage.getItem('products')) || [])
            }

            onMounted(() => {
                if (JSON.parse(localStorage.getItem('products')) !== null) {
                    if (JSON.parse(localStorage.getItem('products')).length === 0) {
                        return setProducts()
                    } else {
                        return addLocalStore()
                    }
                }
                return setProducts()
            })

        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Source Sans Pro, sans-serif;
    }
</style>
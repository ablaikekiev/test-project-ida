<template>
    <div class="main">
        <products-form/>
        <products-list/>
    </div>
</template>

<script>
    import productsForm from '@/components/mainComps/ProductsForm'
    import productsList from '@/components/mainComps/ProductsList'
    import {mapState} from 'vuex'

    export default {
        components: {
            productsForm,
            productsList
        },
        computed: {
            ...mapState({
                products: state => state.mainModule.products
            })
        },
        watch: {
            products() {
                return localStorage.setItem('products', JSON.stringify(this.products))
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        .main {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
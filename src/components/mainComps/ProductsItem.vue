<template>
    <div class="productsItem">

        <img @click="deleteProduct(products.id)" class="productsItem__delete" src="@/assets/delete.png"
             alt="">

        <img class="productsItem__img" :src="products.img" alt="">
        <p class="productsItem__name">{{products.product}}</p>
        <p class="productsItem__description">{{products.description}}</p>
        <p class="productsItem__price">{{products.price}} руб.</p>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {toRefs} from 'vue'

    export default {
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        setup(props) {

            const store = useStore()

            const deleteProduct = (productId) => {
                return store.commit('deleteProduct', productId)
            }

            const {product} = toRefs(props)

            return {
                products: product.value,
                deleteProduct
            }
        }
    }
</script>

<style scoped lang="scss">
    .productsItem {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 330px;
        margin: 0 0 15px 15px;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;

        &__delete {
            display: none;
            position: absolute;
            top: -10px;
            right: -10px;
            cursor: pointer;
            padding: 8px;
            background: #FF8484;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            transition: 0.2s;

            &:hover {
                background: #ff2c33;
            }
        }

        &:hover {
            .productsItem {
                &__delete {
                    display: block;
                }
            }
        }

        &__img {
            border-radius: 4px 4px 0px 0px;
            object-fit: contain;
            object-position: center;
            display: block;
            margin: auto;
        }

        &__name {
            margin-left: 15px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #3F3F3F;
        }

        &__description {
            margin-left: 15px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #3F3F3F;
        }

        &__price {
            margin-left: 15px;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: #3F3F3F;
        }
    }
</style>
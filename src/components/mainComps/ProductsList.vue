<template>
    <div class="productsList">
        <select class="productsList__select" v-model="option" @change="changeOption">
            <option class="productsList__select--option" disabled selected value="">По умолчанию</option>
            <option class="productsList__select--option" value="name">По имени</option>
            <option class="productsList__select--option" value="priceUp">Цена по возрастанию</option>
            <option class="productsList__select--option" value="priceDown">Цена по убыванию</option>
        </select>

        <loader v-if="getProducts.length === 0"/>

        <div v-else class="productsList__flexBox">
            <transition-group name="transition-list">
                <products-item
                        v-if="option === ''"
                        v-for="product in getProducts"
                        :product="product"
                        :key="product.id"
                />
                <products-item
                        v-else-if="option === 'name'"
                        v-for="product in sortByName"
                        :product="product"
                        :key="product.id"
                />
                <products-item
                        v-else-if="option === 'priceUp'"
                        v-for="product in sortPriceUp"
                        :product="product"
                        :key="product.id"
                />
                <products-item
                        v-else-if="option === 'priceDown'"
                        v-for="product in sortPriceDown"
                        :product="product"
                        :key="product.id"
                />
            </transition-group>
        </div>

    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {computed, ref} from 'vue'
    import productsItem from '@/components/mainComps/ProductsItem'
    import loader from "../UI/loader";

    export default {
        components: {productsItem, loader},
        setup() {
            const store = useStore()
            const getProducts = computed(() => {
                return store.getters.getProducts
            })
            const sortByName = computed(() => {
                return store.getters.sortByName
            })
            const sortPriceUp = computed(() => {
                return store.getters.sortPriceUp
            })
            const sortPriceDown = computed(() => {
                return store.getters.sortPriceDown
            })

            let option = ref('')
            const changeOption = (e) => {
                return option = e.target.value
            }

            return {
                getProducts,
                sortPriceUp,
                sortPriceDown,
                sortByName,
                option,
                changeOption
            }
        }
    }
</script>

<style scoped lang="scss">
    .productsList {
        width: 60%;

        &__select {
            margin: 0 0 16px auto;
            display: block;
            padding: 15px;
            border: none;
            outline: none;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #B4B4B4;

            &--option {

            }
        }

        &__flexBox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }

    .transition-list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .transition-list-enter-active,
    .transition-list-leave-active {
        transition: all 0.4s ease;
    }

    .transition-list-enter-from,
    .transition-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }

    .transition-list-move {
        transition: transform 0.4s ease;
    }

    @media (max-width: 1280px) {
        .productsList {
            &__flexBox {
                justify-content: center;
            }
        }
    }

    @media (max-width: 768px) {
        .productsList {
            &__select {
                margin: 15px auto;
            }
        }
    }
</style>
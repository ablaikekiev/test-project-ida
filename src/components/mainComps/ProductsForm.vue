<template>
    <div class="productsForm">
        <h3 class="title">Добавление товара</h3>
        <form class="form" @submit.prevent="formHandler">
            <label class="form__label">
                <p class="form__label--title">
                    Наименование товара
                    <span class="form__label--title__important">&bull;</span>
                </p>
                <input v-model="productName" type="text" placeholder="Введите наименование товара"
                       class="form__label--input" required>
            </label>
            <label class="form__label">
                <p class="form__label--title">Описание товара</p>
                <textarea v-model="productDescription" class="form__label--input"
                          placeholder="Введите описание товара"/>
            </label>
            <label class="form__label">
                <p class="form__label--title">
                    Ссылка на изображение товара
                    <span class="form__label--title__important">&bull;</span>
                </p>
                <input v-model="productImage" type="text" placeholder="Введите ссылку" class="form__label--input"
                       required>
            </label>
            <label class="form__label">
                <p class="form__label--title">
                    Цена товара
                    <span class="form__label--title__important">&bull;</span>
                </p>
                <input v-model="productPrice" type="number" placeholder="Введите цену" class="form__label--input"
                       required>
            </label>
            <button @click="addProduct"
                    v-if="productName.length !== 0 && productImage.length !== 0 && productPrice.length !== 0"
                    class="form__btn" type="submit">Добавить товар
            </button>
            <button disabled v-else class="form__disabledBtn" type="submit">Добавить товар</button>
        </form>
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import {ref} from 'vue'

    export default {
        setup() {

            const store = useStore()

            const productName = ref('')
            const productDescription = ref('')
            const productImage = ref('')
            const productPrice = ref('')

            const addProduct = () => {
                return store.commit('addProduct', {
                    id: Math.floor(Math.random() * 10000),
                    product: productName.value,
                    description: productDescription.value,
                    img: productImage.value,
                    price: productPrice.value
                })
            }

            const formHandler = () => {
                productName.value = ''
                productDescription.value = ''
                productImage.value = ''
                productPrice.value = ''
            }

            return {
                productName,
                productDescription,
                productImage,
                productPrice,
                addProduct,
                formHandler
            }
        }
    }
</script>

<style scoped lang="scss">
    .productsForm {
        width: 20%;
    }

    .title {
        margin: 0 0 26px 0;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 35px;
        color: #3F3F3F;
    }

    .form {
        background: #FFFEFB;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        padding: 24px;

        &__label {
            display: block;
            margin-bottom: 15px;

            &--title {
                font-style: normal;
                font-weight: normal;
                font-size: 10px;
                line-height: 13px;
                letter-spacing: -0.02em;
                color: #49485E;
                margin: 0 0 4px 0;

                &__important {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    color: #FF8484;
                    font-size: 20px;
                }
            }

            &--input {
                width: 92%;
                outline: none;
                border: none;
                height: 36px;
                padding-left: 16px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                transition: 0.5s;

                &::-webkit-input-placeholder {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    color: #B4B4B4;
                }

                &:hover {
                    box-shadow: 0px 0px 15px rgba(98, 255, 98, 1);
                }

                &:focus {
                    box-shadow: 0px 0px 15px rgba(98, 255, 98, 1);
                }
            }
        }

        &__btn {
            background: #7BAE73;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            border: none;
            outline: none;
            width: 100%;
            height: 36px;
            cursor: pointer;

            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
            transition: 0.6s;

            &:hover {
                background: #48ae41;
            }
        }

        &__disabledBtn {
            background: #eeeeee;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            border: none;
            outline: none;
            width: 100%;
            height: 36px;
            cursor: pointer;

            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #b4b4b4;
        }
    }

    @media (max-width: 1280px) {
        .productsForm {
            width: 30%;
        }
        .title {
            font-size: 22px;
        }
    }

    @media (max-width: 768px) {
        .productsForm {
            width: 100%;
            margin-bottom: 20px;
        }
        .title {
            text-align: center;
        }
    }
</style>
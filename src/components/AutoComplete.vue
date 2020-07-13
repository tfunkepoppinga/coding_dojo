<template>
    <div class="c-autocomplete">
        <input @input="onInput" v-model="searchValue"/>
        <ul v-show="searchValue" class="c-autocomplete__list">
            <li v-for="(item, index) in resultItems" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AutoComplete',
        props: {
            items: Array,
            minLength: Number,
        },
        data() {
            return {

                resultItems: [],
                searchValue: '',
            }
        },
        mounted() {
        },
        methods: {
            onInput() {
                if(this.searchValue.length > this.minLength) {
                    this.resultItems = this.items.filter(item => item.indexOf(this.searchValue) > -1);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/06-components/_c-autocomplete.scss';
</style>

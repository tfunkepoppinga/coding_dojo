<template>
    <div class="c-autocomplete">
        <input />
        <ul class="c-autocomplete__list">
            <li>test</li>
            <li>test2</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AutoComplete',
        props: {

        },
        data() {
            return {}
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/06-components/_c-autocomplete.scss';
</style>

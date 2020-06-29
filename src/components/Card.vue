<template>
    <div class="c-card">
        <div class="c-card__image c-card__image--large">
            <img src="../assets/users-2.png" alt="">
        </div>
        <div class="c-card__content">
            <h1>A card</h1>
        </div>
        <div class="c-card__footer">
            <span>Footer text</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {},
        data() {
            return {}
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/06-components/_c-card.scss';
</style>

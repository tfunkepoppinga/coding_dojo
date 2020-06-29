<template>
    <div class="c-card">
        <div class="c-card__image c-card__image--large">
            <img src="../assets/users-2.png" alt="">
        </div>
        <div class="c-card__content">
            <h1>{{headline}}</h1>
        </div>
        <div class="c-card__footer">
            <span>{{footerText}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            headline: String,
            footerText: String,
        },
        data() {
            return {
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/06-components/_c-card.scss';
</style>

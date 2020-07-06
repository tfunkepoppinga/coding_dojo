<template>
    <div class="c-card">
        <div class="c-card__image c-card__image--large">
            <img :src="imageSrc" alt="">
        </div>
        <div class="c-card__content">
            <h1>{{headline}}</h1>
        </div>
        <div class="c-card__footer">
            <span>{{text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            headline: {
                type: String,
                default: 'Default'
            },
            text: String,
            imageSrc: {
                type: String,
                default: "./static/assets/users-2.png"
            }
        },
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

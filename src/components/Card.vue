<template>
    <div class="c-card">
        <div class="c-card__content">
            <h3>{{ title }}</h3>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            default: 'title',
            type: String
        },
        content: {
            default: 'default content',
            type: String
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

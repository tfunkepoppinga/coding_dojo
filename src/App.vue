<template>
    <div>
        <search-input @change="cards.push($event)"></search-input>
        <div class="o-grid">
            <div v-for="( card, index ) in cards" :key="index" class="o-grid__item">
                <card :title="card.title" :content="card.content"></card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './components/Card.vue'
import Input from './components/Input'

export default {
    name: 'App',
    components: {
        Card,
        SearchInput: Input
    },
    props: {},
    data() {
        return {
            cards: []
        }
    }
}
</script>

<style lang="scss">
@import './scss/main';
</style>

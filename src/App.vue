<template>
	<div>
        <inputVue @wikiAPI="wikiResults($event)"></inputVue>
        <div class="o-grid">
            <div v-for="(card, i) in cards" :key="i" class="o-grid__item">
                <card :headline="card.title" :text-content="card.content"></card>
            </div>
        </div>

	</div>
</template>

<script>
  import Card from './components/Card.vue'
  import Input from './components/Input.vue'

  export default {
    name: 'App',
    components: {
      Card,
      inputVue : Input
    },
    props: {},
    data() {
      return {
        cards : [],
      }
    },
    methods: {
      wikiResults(wikiResult) {
        const result = Object.values(wikiResult.query.pages)
        const card = {
          title : result[0].title,
          content : result[0].extract
        }
        this.cards.push(card)
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

<template>
	<div>
		<button @click="addCard" class="c-btn">+</button>
		<button @click="removeCard" class="c-btn">-</button>
		<div class="o-grid" v-if="cards">
			<div class="o-grid__item" v-for="(card, index) in cards" :key="index">
				<card :headline="card.headline" :footer-text="card.footerText"></card>
			</div>
		</div>
	</div>
</template>

<script>
  import Card from './components/Card.vue'

  export default {
    name: 'App',
    components: {
      Card
    },
    props: {},
    data() {
      return {
        cards: [
          {
            headline:"Card EINS",
            footerText:"Test",
          },
          {
            headline:"Zwei",
            footerText:"TestZwei",
          }
        ]
      }
    },
    methods: {
      addCard() {
        const card = {
          headline: "Card nr." + ( this.cards.length + 1),
          footerText: "Footer Text"
        }
        this.cards.push(card)
      },
      removeCard() {
        this.cards.pop()
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

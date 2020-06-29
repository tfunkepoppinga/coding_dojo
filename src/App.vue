<template>
	<div class="o-grid" v-if="cards">
		<div class="o-grid__item" v-for="(card, index) in cards" :key="index">
			<card :headline="card.headline" :footer-text="card.footerText"></card>
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
            headline:"Hallo",
            footerText:"Test",
          },
          {
            headline:"Zwei",
            footerText:"TestZwei",
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

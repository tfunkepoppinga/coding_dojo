<template>
	<div class="o-grid">
		<div class="o-grid__item" :key="index" v-for="(card, index) in cards">
			<card :headline="card.headline" :text="card.text" :image-src="card.imageSrc"></card>
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
            headline: "Headline 1",
            text: "Lorem Ipsum",
            imageSrc: "./static/assets/flex-1.jpg"
          },
          {
            headline: "Headline 2",
            text: "Lorem Ipsum dolor"
          },
          {
            headline: "Headline 3",
            text: "Lorem Ipsum dolor sit",
            imageSrc: "./static/assets/flex-5.jpg"
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

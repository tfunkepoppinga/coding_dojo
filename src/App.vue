<template>
	<div>
		<button @click="cardAmount++" class="c-btn">+</button>
		<button @click="removeCard" class="c-btn">-</button>
		<input v-model="cardAmount" type="number"/>
		<template>{{ cardAmount }}</template>
		<div class="o-grid" v-if="cards" v-show="cardVisibility">
			<div class="o-grid__item" v-for="index in parseInt(cardAmount)" :key="index">
				<card :headline="`headline ${index}`" :footer-text="'headline ' + index">
					<template v-slot:content><b>Test2</b></template>
				</card>
			</div>
		</div>
		<button @click="cardVisibility = !cardVisibility">Toggle Cards</button>
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
        cardAmount: 2,
        cardVisibility: true,
      }
    },
    methods: {
      removeCard() {
        this.cardAmount--
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

<template>
	<div class="o-grid">
		<div class="o-grid__item">
			<card></card>
		</div>
		<div class="o-grid__item">
			<card></card>
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
      return {}
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

<template>
	<div id="app">
		<modal :isOpen="isOpen" @close="isOpen = false"></modal>
		<button @click="isOpen = true">Open Modal</button>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur at corporis eligendi eos eum, illum maiores molestiae molestias necessitatibus non, provident ratione repellat repudiandae, temporibus velit vero voluptatum.
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur at corporis eligendi eos eum, illum maiores molestiae molestias necessitatibus non, provident ratione repellat repudiandae, temporibus velit vero voluptatum.
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur at corporis eligendi eos eum, illum maiores molestiae molestias necessitatibus non, provident ratione repellat repudiandae, temporibus velit vero voluptatum.
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur at corporis eligendi eos eum, illum maiores molestiae molestias necessitatibus non, provident ratione repellat repudiandae, temporibus velit vero voluptatum.
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur at corporis eligendi eos eum, illum maiores molestiae molestias necessitatibus non, provident ratione repellat repudiandae, temporibus velit vero voluptatum.

	</div>
</template>

<script>
import Modal from "./components/Modal"
  export default {
    name: 'App',
    components: {
      Modal
    },
    data() {
      return {
        isOpen: false,
      }
    }
  }
</script>
<style lang="scss">
	@import 'scss/03-generic/generic.normalize.scss';
	body {
		height: 100vh;
		margin: 0 auto;
	}
</style>

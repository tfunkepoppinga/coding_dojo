<template>
	<div id="app">
		<accordion/>
	</div>
</template>

<script>
  import Accordion from './components/Accordion.vue'

  export default {
    name: 'App',
    components: {
      Accordion
    }
  }
</script>
<style lang="scss">
	@import 'scss/03-generic/generic.normalize.scss';
</style>

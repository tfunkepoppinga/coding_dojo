<template>
	<auto-complete :items="items" :min-length="minLength"/>
</template>

<script>
  import AutoComplete from './components/AutoComplete.vue'
  const items = require('./data.json')

  export default {
    name: 'App',
    components: {
      AutoComplete
    },
    props: {},
    data() {
      return {
		items: items,
        minLength: 2,
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

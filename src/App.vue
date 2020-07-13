<template>
	<auto-complete />
</template>

<script>
  import AutoComplete from './components/AutoComplete.vue'

  export default {
    name: 'App',
    components: {
      AutoComplete
    },
    props: {},
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

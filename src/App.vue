<template>
	<tool-tip />
</template>

<script>
  import ToolTip from './components/ToolTip.vue'

  export default {
    name: 'App',
    components: {
      ToolTip
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

<template>
	<div class="o-grid">
		<div class="o-grid__item">
			<tool-tip>
				<template v-slot:tooltipTrigger><div class="c-btn"> Hover Me! </div></template>
			</tool-tip>
		</div>
		<div class="o-grid__item">
			<tool-tip :contentText="content">
				<template v-slot:tooltipTrigger><button> Hover Me! </button></template>
			</tool-tip>
		</div>
	</div>
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
        content: 'Tooltip eins'
      }
    }
  }
</script>

<style lang="scss">
	@import './scss/main';
</style>

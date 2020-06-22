<template>
	<div class="c-accordion">
		<accordion-item
				:index="index"
				v-for="(item, index) in AccordionItems"
				:key="index"
				:headline="item.headline"
				:content="item.content"
				@close="activeItemIndex = null"
				@open="activeItemIndex = $event"
				:is-open="index === activeItemIndex"></accordion-item>
	</div>
</template>

<script>
  import AccordionItem from './AccordionItem.vue'

  export default {
    name: 'Accordion',
    components: {
      AccordionItem
    },
    props: {
    },
    data() {
      return {
        activeItemIndex: null,
        AccordionItems: [
          {
            headline: "Hallo",
            content: "Test",
          },
          {
            headline: "Zwei",
            content: "TestZwei",
          },
          {
            headline: "Drei",
            content: "TestDrei",
          }
        ]
      }
    },
    mounted() {}
  }
</script>
<style lang="scss">
	@import '../scss/06-components/_c-accordion.scss';
</style>

<template>
	<div class="c-accordion">
		<accordion-item v-for="(item, index) in AccordionItems" :key="index" :headline="item.headline" :content="item.content"></accordion-item>
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

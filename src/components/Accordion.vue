<template>
	<div class="c-accordion">
		<accordion-item  v-for="(item, i) in accordionItems" :key="i" :accordion-title="item.title" :accordion-content="item.content"></accordion-item>
	</div>
</template>

<script>
  import AccordionItem from './AccordionItem.vue'

  export default {
    name: 'Accordion',
    components: {
      AccordionItem
    },
    props: {},
    data() {
      return {
        accordionContent: 'lorem Ipsum blah blah.',
        accordionItems: [
          {
            title: 'Accordion uno',
            content: 'lorem Ipsum blah blah.lorem Ipsum blah blah.lorem Ipsum blah blah.lorem Ipsum blah blah.'
          },
          {
            title: 'Accordion dos',
            content: 'lorem Ipsum blah blah.lorem Ipsum blah blah.lorem Ipsum blah blah.lorem Ipsum blah blah.'
          },
          {
            title: 'Accordion tres',
            content: 'lorem Ipsum blah blah.lorem Ipsum blah blah.lorem Ipsum blah blah.lorem Ipsum blah blah.'
          }
        ]
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
	@import '../scss/06-components/_c-accordion.scss';
</style>

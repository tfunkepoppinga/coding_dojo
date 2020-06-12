<template>
	<div class="c-accordion__item">
		<div class="c-accordion__header">
			<h2>{{ accordionTitle }}</h2>
		</div>
		<div class="c-accordion__content">{{ accordionContent }}</div>
	</div>
</template>

<script>
  export default {
    name: 'Accordion',
    props: {
      accordionTitle: String,
      accordionContent: {
        type : String,
        default: 'Default'
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


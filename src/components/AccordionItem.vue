<template>
	<div class="c-accordion__item">
		<h1 class="c-accordion__headline">{{headline}}</h1>
		<p class="c-accordion__content">{{content}}</p>
	</div>
</template>

<script>
    export default {
        name: 'Accordion',
        props: {
          headline: String,
          content: String,
        },
        data() {
            return {}
        },
        mounted() {},
        methods: {}
    }
</script>
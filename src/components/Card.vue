<template>
	<div class="c-card">
		<div class="c-card__headline">
			<h3>{{ headline }}</h3>
		</div>
		<div class="c-card__content">
			<p>{{ textContent }}</p>
		</div>
	</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
      headline: String,
      textContent: String

    },
    data() {
        return {}
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
@import '../scss/06-components/_c-card.scss';
</style>

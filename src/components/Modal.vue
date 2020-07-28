<template>
	<div class="c-modal" :class="{'is-open' : isOpen}">
		<div class="c-modal__backdrop"></div>
		<div class="c-modal__content">
			<div class="c-modal__close" @click="triggerButton">X</div>
			<div class="c-modal__header"><h3>{{ modalHeadline }}</h3></div>
			<div class="c-modal__body">
				<p>{{ modalText }}</p>
			</div>
			<div class="c-modal__footer">
				{{ modalFooterText }}
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "modal",
    props: {
      modalHeadline: {
        type: String,
        default: "Headline"
      },
      modalText: {
        type: String,
        default: "Modal Text"
      },
      modalFooterText: {
        type: String,
        default: "Footer"
      },
      isOpen: {
        type: Boolean,
        default: false
      }


    },
    data() {
      return {
      }
    },
    methods: {
      triggerButton() {
        this.$emit('close')
      }
    }
  }
</script>

<style  lang="scss" scoped>
	@import "../scss/06-components/_components.modal.scss";
</style>

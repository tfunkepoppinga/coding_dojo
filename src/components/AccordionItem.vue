<template>
	<div class="c-accordion__item" :class="{ 'is-open': isOpen }">
		<h1 @click="toggleAccordion" class="c-accordion__headline">{{headline}}</h1>
		<p class="c-accordion__content">{{content}}</p>
	</div>
</template>

<script>
    export default {
        name: 'Accordion',
        props: {
          index: Number,
          headline: String,
          content: String,
          isOpen: Boolean,
        },
        data() {
            return {
            }
        },
        mounted() {},
        methods: {
          toggleAccordion(){
            if(this.isOpen){
              this.$emit('close')
            }else {
              this.$emit('open', this.index)
            }
          }
        }
    }
</script>
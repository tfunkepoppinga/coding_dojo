<template>
    <div class="c-accordion__item" :class="{ 'is-open': isOpen }">
        <div @click="toggleAccordion" class="c-accordion__header">
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
                type: String,
                default: 'Default'
            }
        },
        data() {
            return {
                isOpen: false
            }
        },
        mounted() {
        },
        methods: {
            toggleAccordion() {
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


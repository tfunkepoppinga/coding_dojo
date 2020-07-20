<template>
    <div class="c-tooltip">
        <div @mouseenter="triggerTooltip" @mouseleave="hideTooltip" class="c-tooltip__trigger"><slot name="tooltipTrigger"><button>trigger</button></slot></div>
        <div v-show="open" class="c-tooltip__content">{{ contentText }}</div>
    </div>
</template>

<script>
    export default {
        name: 'ToolTip',
        props: {
            contentText: {
                type: String,
                default: 'Lorem Ipsum dolor sit',
            }
        },
        data() {
            return {
                open: false
            }
        },
        mounted() {

        },
        methods: {
            triggerTooltip(){
                this.open = true;
            },
            hideTooltip() {
                this.open = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/06-components/_c-tooltip.scss';
</style>

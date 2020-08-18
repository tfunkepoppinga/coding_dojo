<template>
    <div class="c-slider">
        <slot name="left"></slot>
        <div class="c-slider__background">
            <div class="c-slider__amount">
                <div class="c-slider__knob"></div>
            </div>
        </div>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: {

    },
    data() {
        return {}
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
@import '../scss/06-components/_c-slider.scss';
</style>

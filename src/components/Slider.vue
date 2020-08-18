<template>
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center">
        <div  @mousemove="dragNextStep" class="c-slider">
            <div  @click="amount = 0" >
                <slot name="left"></slot>
            </div>
            <div class="c-slider__background">
                <div class="c-slider__amount" :style="{'width' : amount + '%'}">
                    <div class="c-slider__knob"
                         @click="nextstep"
                         @mousedown="mouseDown"
                         @mouseup="drag = false"></div>
                </div>
            </div>
            <div @click="amount = 100" >
                <slot name="right"></slot>
            </div>
        </div>
        <br>
        <p>{{amount}} %</p>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: {},
    data() {
        return {
            amount: 0,
            drag: false,
            oldMouseX: 0,
            newMouseX: 0
        }
    },
    mounted() {
        window.addEventListener('mouseup', () => this.drag = false)
    },
    methods: {
        nextstep(event) {
            if (0 <= this.amount <= 100) {
                this.newMouseX = event.clientX - this.oldMouseX
                this.amount = this.newMouseX
                console.log('newMouse', this.newMouseX)
            }
            if (this.amount > 100) {
                this.amount = 100
            }
            if (this.amount < 0 ) {
                this.amount = 0
            }

            // if (this.amount === 100) {
            //     this.amount = 0
            // }
        },
        dragNextStep(event) {
            if (this.drag) {
                this.nextstep(event);
            }
        },
        mouseDown(event) {
            if (this.oldMouseX === 0 ) {
                this.oldMouseX = event.clientX
            }
            this.drag = true
        }
    }
}
</script>

<style scoped lang="scss">
@import '../scss/06-components/_c-slider.scss';
</style>

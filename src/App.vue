<template>
    <div>
        <slider>
          <template v-slot:left>

          </template>
          <template v-slot:right>

          </template>
        </slider>
    </div>
</template>

<script>
import slider from './components/Slider.vue'
export default {
    name: 'App',
    components: {
      slider
    },
    props: {},
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
@import './scss/main';
</style>

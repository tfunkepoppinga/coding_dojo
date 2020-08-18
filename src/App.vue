<template>
    <div>
        <slider>
          <template v-slot:left>
              <img  style="width: 20px" src="./images/leise.png" alt="">
          </template>
          <template v-slot:right>
              <img style="width: 20px" src="./images/laut.png" alt="">
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

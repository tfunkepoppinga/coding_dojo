<template>
    <div>
        <multiselect :options="options" v-model="value"  label="title" track-by="id" placeholder="Bitte auswählen.." :taggable="true" :customLabel="firstWord">
<!--            <template slot="option" slot-scope="{ option }"><strong class="test">{{ option.title }}</strong></template>-->
        </multiselect>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
    props: {},
    data() {
        return {
            value: null,
            options: [{
            }],

        }
    },
    methods: {
        async getInfoFromApi() {
            const API = 'https://jsonplaceholder.typicode.com/todos';
            fetch(API).then( (result) => result.json()).then( (options) => this.options = options)
        },
        firstWord({ title }) {
            if (!title) {
                return ''
            } else {
                const cutFrom = 0;
                const cutHere = title.indexOf(' ');
                return title.substring(cutFrom, cutHere);
            }
        }
    },
    computed: {

    },
    mounted() {
        this.getInfoFromApi();
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import './scss/main';
</style>

<template>
    <div>
        <multiselect
            :options="options"
            v-model="values"
            @input="setInCookie"
            label="title"
            track-by="id"
            placeholder="Bitte auswählen.."
            :multiple="true"
            :customLabel="firstWord">
        </multiselect>
        <table class="c-table">
            <tr class="c-table__row" v-for="value in values" :key="value.id">
                <td>{{ value.title }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

import * as Cookies from 'js-cookie'

export default {
    name: 'App',
    components: {
    },
    props: {},
    data() {
        return {
            values: null,
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
        },
        setInCookie() {
            Cookies.set('multiselectValue', this.values);
        }
    },
    computed: {

    },
    mounted() {
        this.getInfoFromApi();
        this.values = Cookies.getJSON('multiselectValue');
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import './scss/main';
@import "./scss/06-components/components.table";
</style>

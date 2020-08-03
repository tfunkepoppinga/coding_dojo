<template>
    <input type="search" v-model="searchTerm" @change="callApi"/>
</template>

<script>
export default {
name: "Input",
    data() {
        return {
            searchTerm: '',
            api: 'https://de.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=',
        }
    },
    methods: {
        callApi() {
            fetch(this.apiWithSearchTerm)
                .then(response => response.json())
                .then(data => this.convertObject(data));
        },
        convertObject(data) {
            const resultItem = {
                title: data.query.pages[554]?.title || 'test',
                content: data.query.pages[554]?.extract || 'test'
            };
            this.$emit('change', resultItem);
        }
    },
    computed: {
        apiWithSearchTerm() {
            return this.api + this.searchTerm
        }
    }
}


</script>

<style scoped>

</style>
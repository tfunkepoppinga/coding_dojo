<template>
	<label> Type here..
		<input @keyup.enter="getWikiAPI" name="name" type="text" v-model="search" />
		<button @click="getWikiAPI">Send</button>
	</label>
</template>

<script>
export default {
  // https://de.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=
  name: "Input",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    async getWikiAPI() {
      fetch(this.getApi)
      .then(result => result.json())
      .then(json => this.emitFunction(json))
    },
    emitFunction(json) {
      return this.$emit('wikiAPI',json)
    }

  },
  computed: {
      getApi() {
        return `https://de.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${this.search}`
      }
  }
}
</script>

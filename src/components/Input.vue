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
      fetch(`https://de.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=${this.search}`)
      .then(result => result.json())
      .then(json => this.emitFunction(json))
      // this.$emit('wikiAPI',this.json)
      // const result = await wikiAPI;

      // console.log(result);
    },
    emitFunction(json) {
      return this.$emit('wikiAPI',json)
    }

  },
  computed: {

  }
}
</script>

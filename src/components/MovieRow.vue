<template>
  <div>
    <h1>hello</h1>
    <pre>
      {{movies}}
    </pre>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('movies/loadMovies')
    console.log('created')
  },
  methods: {
    // view (movie) {
    //   console.log('movie', movie)
    // }
  },
  computed: {
    movies () {
      return this.$store.state.movies.movies
    }
  }
}
</script>

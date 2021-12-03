<template>
  <div>
    <h1>hello</h1>
    <!-- <pre>
      {{movies}}
    </pre> -->
    <p v-for="(movie) in movies" :key="movie.id.label">
      {{movie.category.attributes.term}} - {{movie.title.label}}
    </p>
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

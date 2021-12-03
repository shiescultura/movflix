<template>
  <q-page>
    <div class="Home">
      <div class="Home__slider-list">
        <MovieRow/>
      </div>
      <div class="Home__movie-list" style="background-color:#cccccc;">
        <MovieList/>
      </div>
    </div>
  </q-page>
</template>

<script>
// import TopMovies from '../components/TopMovies.vue'
import MovieRow from '../components/MovieRow.vue'
import MovieList from '../components/MovieList.vue'
export default {
  name: 'PageIndex',
  components: {
    // TopMovies,
    MovieRow,
    MovieList
  }
}
</script>

<template>
  <q-page>
    <div class="Home">
      <div class="Home__slider-list">
        <MovieRow/>
      </div>
    </div>
    <br>
    <!-- <TopMovies/> -->
    <br>
    <!-- <Feature/> -->
  </q-page>
</template>

<script>
// import TopMovies from '../components/TopMovies.vue'
import MovieRow from '../components/MovieRow.vue'
// import Feature from '../components/Feature.vue'
export default {
  name: 'PageIndex',
  components: {
    // TopMovies,
    MovieRow
    // Feature
  }
}
</script>

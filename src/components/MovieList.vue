<template>
  <div class="q-pa-md">
  <MovieDetail ref="movieDetailRef"/>
  <!-- <h3>{{category}}</h3> -->
    <q-table
      grid
      card-class="bg-primary text-white"
      :data="movies"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      :pagination="pagination"
    >
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-2">
          <q-card class="my-card" style="height: 500px;">
            <q-img :src="props['row']['im:image'][2]['label']" style="height:300px;" />
            <q-card-section style="height:150px;">
              <div class="row no-wrap items-center">
                <div class="col" style="font-size: 18px;">
                  {{props['row']['im:name']['label']}}
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                   {{props['row']['im:artist']['label']}}
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions style="float:right;padding-right:20px;">
              <q-btn flat color="red" icon="favorite" @click="favorite(props.row)" />
              <q-btn flat color="dark" icon="info" @click="viewInfo(props.row)" />
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>
<script>
import MovieDetail from './MovieDetails.vue'
export default {
  components: {
    MovieDetail
  },
  data () {
    return {
      pagination: {
        rowsPerPage: 12
      },
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => ['row']['im:name'].label,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ]
    }
  },
  created () {
    this.$store.dispatch('movies/loadMovies')
    this.$store.dispatch('movies/genreTitle')
    console.log('created')
  },
  methods: {
    viewInfo (props) {
      this.$refs.movieDetailRef.movieModal = true
      this.$refs.movieDetailRef.movie = Object.assign({}, props)
      console.log('movie', props)
    },
    favorite (props) {
      this.$store.dispatch('movies/addFavorite', props)
      console.log('favorite', props)
    }
  },
  computed: {
    movies () {
      return this.$store.state.movies.movies
    },
    category () {
      return this.$store.state.movies.genre
    }
  }
}
</script>

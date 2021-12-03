
<template>
<div class="MovieSlider__wrapper">
  <MovieDetail ref="movieDetailRef"/>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(movie) in movies" :key="movie.id.label">
          <q-card class="my-card" style="width:300px;">
            <q-img :src="movie['im:image'][2]['label']" style="height:300px;" />
            <q-card-section style="height:100px;">
              <div class="row no-wrap items-center">
                <div class="col text-h6">
                  {{movie['im:name']['label']}}
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                   {{movie['im:artist']['label']}}
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions style="float:right;padding-right:20px;">
              <q-btn flat color="red" icon="favorite" />
              <q-btn flat color="dark" icon="info" @click="viewInfo(movie)" />
            </q-card-actions>
          </q-card>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="display:none;"></div>
    </swiper>
  </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import MovieDetail from './MovieDetails.vue'

export default {
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide,
    MovieDetail
  },
  data () {
    return {
      bar2: false,
      movie: {},
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created () {
    this.$store.dispatch('movies/loadMovies')
    console.log('created')
  },
  methods: {
    viewInfo (movie) {
      this.$refs.movieDetailRef.movieModal = true
      this.$refs.movieDetailRef.movie = Object.assign({}, movie)
      console.log('movie', movie)
    }
  },
  computed: {
    movies () {
      return this.$store.state.movies.movies
    }
  }
}
</script>

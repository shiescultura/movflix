
<template>
<div class="MovieSlider__wrapper">
  <div class="example-3d">
    <!-- <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(movie) in movies" :key="movie.id.label">
          <div class="MovieCard" @click="view(movie)">
            <div class="MovieCard___img">
              <img :src="movie['im:image'][2]['label']" style="height:400px;width:300px;object-fit:cover;"/>
              <div class="MovieCard__details">
                <div class="MovieCard__title">
                  {{movie['im:name']['label']}}
                </div>
                <div class="MovieCard__artist">
                  {{movie['im:artist']['label']}}
                </div>
              </div>
              <div class="MovieCard__action">
                <p>Action</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="display:none;"></div>
    </swiper> -->
    <br>
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

            <q-card-actions class="row items-center">
              <!-- <q-btn flat icon="event" /> -->
              <q-btn flat color="red" icon="favorite" />
              <q-btn flat color="teal" icon="play_arrow" />
              <q-btn flat color="primary" icon="info" />
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

export default {
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
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
    view (movie) {
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

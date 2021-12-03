
<template>
<div class="MovieSlider__wrapper">
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(movie) in movies" :key="movie.id.label">
          <div class="MovieCard" @click="view(movie)">
            <div class="MovieCard___img">
              <img :src="movie['im:image'][2]['label']" style="height:400px;width:300px;object-fit:cover;"/>
              <h6 style="color:black;position:absolute;top:8px;left:16px;background-color:white;">
                {{movie.title.label}}
              </h6>
            </div>
          </div>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="display:none;"></div>
    </swiper>
    <br>
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

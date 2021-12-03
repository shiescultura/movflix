// import Vue from 'vue';
import axios from '../../services/axios'

export default {
  namespaced: true,
  state: {
    loading: false,
    movies: [],
    filter: '',
    genreAction: [],
    alldata: 'alldatawillbedisplayed'
  },
  mutations: {
    set_isLoading (state, loading) {
      state.loading = loading
    },
    setMovies (state, payload) {
      state.movies = payload
    }
  },
  actions: {
    async loadMovies ({ commit }) {
      try {
        const response = await axios.get()
        const data = response.data.feed.entry
        const allmovies = data.filter((data) => data.category.attributes.term === 'Action & Adventure')
        commit('setMovies', allmovies)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMovieList ({ commit }) {
      try {
        const response = await axios.get()
        const data = response.data.feed.entry
        commit('setMovies', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    allmovies: state => {
      return state.movies
    },
    alldata: state => {
      return state.alldata
    },
    genreAction: state => {
      return state.movies.filter((data) => data.category.attributes.term === 'Drama')
    }
  }
}

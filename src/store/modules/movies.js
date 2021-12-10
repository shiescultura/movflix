// import Vue from 'vue';
import axios from '../../services/axios'

export default {
  namespaced: true,
  state: {
    loading: false,
    movies: [],
    filter: '',
    movie: null,
    alldata: [],
    favorites: []
  },
  mutations: {
    set_isLoading (state, loading) {
      state.loading = loading
    },
    setMovies (state, payload) {
      state.movies = payload
    },
    setGenre (state, payload) {
      state.genre = payload
    },
    addToFavorite (state, movie) {
      const movieInFavorite = state.favorites.find(item => {
        return item.movie.idNo === movie.idNo
      })
      if (movieInFavorite) {
        return
      }
      state.favorites.push({ movie })
    }
  },
  actions: {
    async loadMovies ({ commit }) {
      try {
        const response = await axios.get()
        const data = response.data.feed.entry
        commit('setMovies', data)
      } catch (error) {
        console.log(error)
      }
    },
    async loadGenre (context, payload) {
      try {
        console.log('payload', payload)
        const response = await axios.get()
        const data = response.data.feed.entry
        const allmovies = data.filter((data) => data.category.attributes.term === payload)
        context.commit('setMovies', allmovies)
        context.commit('setGenre', payload)
      } catch (error) {
        console.log(error)
      }
    },
    async genreTitle (context, payload) {
      try {
        console.log('payload', payload)
        const category = payload
        context.commit('setGenre', category)
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
    },
    async addFavorite ({ commit }, payload) {
      try {
        commit('addToFavorite', payload)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    topTen: state => {
      return state.movies
    },
    favorites: state => {
      return state.favorites
    },
    movies: state => {
      const movies = state.movies.map(x => {
        x.idNo = x.id.attributes['im:id']
        x.artist = x['im:artist'].label
        x.movieTitle = x['im:name'].label
        return x
      })
      return movies
    }
  }
}

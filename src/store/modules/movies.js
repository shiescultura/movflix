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
    },
    removeFavorite (state, movie) {
      const index = state.favorites.findIndex(r => r.idNo === movie.idNo)
      console.log('deleteeee')
      state.favorites.splice(index, 1)
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
    async loadGenre (context, payload) {
      try {
        const response = await axios.get()
        const data = response.data.feed.entry
        const allmovies = data.filter((data) => data.category.attributes.term === payload)
        context.commit('setMovies', allmovies)
        context.commit('setGenre', payload)
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
    },
    async removeFavorite ({ commit }, payload) {
      try {
        commit('removeFavorite', payload)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
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

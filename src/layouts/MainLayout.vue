<template>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Movflix</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="300"
        :breakpoint="500"
        content-class="bg-grey-10 text-white"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple @click="home()">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-expansion-item
              icon="local_movies"
              label="Genres"
            >
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Action & Adventure')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Action & Adventure</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Comedy')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Comedy</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Drama')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Drama</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Horror')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Horror</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Independent')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Independent</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Kids & Family')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Kids & Family</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Musicals')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Musicals</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Romance')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Romance</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Thriller')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Thriller</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                @click="filterGenre('Western')"
              >
                <q-item-section avatar>
                  <q-icon name="blur_on" />
                </q-item-section>
                <q-item-section>Western</q-item-section>
              </q-item>
            </q-expansion-item>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false,
      miniState: true
    }
  },
  methods: {
    filterGenre (value) {
      this.$store.dispatch('movies/loadGenre', value)
      console.log('value', value)
    },
    home () {
      this.$store.dispatch('movies/loadMovies')
    }
  }
}
</script>

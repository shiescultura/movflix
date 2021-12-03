<template>
  <q-dialog v-model="movieModal" full-width persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card class="bg-primary text-white">
      <q-bar>
        <q-space />

        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="col-auto text-white text-caption q-pt-md row no-wrap items-center">
          <h5>Summary</h5>
          <span v-if="movie">
            {{movie['summary']['label']}}
          </span>
          <span v-else>
            no data
          </span>
        </div>
        <div>
          <!-- {{movie['link'][1]['attributes']['href']}} -->
          <q-video :src="movie['link'][1]['attributes']['href']" :ratio="16/9"/>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      movieModal: false,
      movie: ''
    }
  }

}
</script>

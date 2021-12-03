<template>
  <q-dialog v-model="movieModal" full-width persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card class="bg-dark text-white">
      <q-bar>
        <q-space />

        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip content-class="bg-black text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <div class="row" style="padding:20px;">
        <div class="col-xs-12 col-sm-6 col-md-4" style="background-color:green;">
          <q-card class="my-card" v-if="movie" style="height:100%;">
            <q-card-section horizontal>
              <q-img
                class="col-5"
                :src="movie['im:image'][2]['label']"
              />
              <q-card-section class="text-dark">
                <h4>{{movie['im:name']['label']}}</h4>
                <q-list>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="blue-grey" name="person" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{movie['im:artist']['label']}}</q-item-label>
                      <q-item-label caption>Artist</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="blue-grey" name="local_movies" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{movie['category']['attributes']['label']}}</q-item-label>
                      <q-item-label caption>{{movie['im:contentType']['attributes']['label']}}</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="blue-grey" name="calendar_today" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{movie['im:releaseDate']['attributes']['label']}}</q-item-label>
                      <q-item-label caption>Release Date</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="blue-grey" name="local_offer" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{movie['im:price']['label']}}</q-item-label>
                      <q-item-label caption>{{movie['im:price']['attributes']['currency']}}</q-item-label>
                    </q-item-section>
                  </q-item>

                  <!-- <q-item>
                    <q-item-section avatar>
                      <q-icon color="blue-grey" name="copyright" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{movie['im:price']['label']}}</q-item-label>
                      <q-item-label caption>{{movie['rights']['label']}}</q-item-label>
                    </q-item-section>
                  </q-item> -->

                </q-list>
              </q-card-section>
            </q-card-section>

            <!-- <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat>
                5:30PM
              </q-btn>
              <q-btn flat>
                7:00PM
              </q-btn>
              <q-btn flat color="primary">
                Reserve
              </q-btn>
            </q-card-actions> -->
          </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8">
          <q-card-section class="q-pt-none">
            <q-card class="bg-dark text-white" v-if="movie">
              <q-video :src="movie['link'][1]['attributes']['href']" style="height:300px;"/>

              <q-card-section>
                <div class="text-h6">Trailer</div>
                <div class="text-subtitle2">Summary</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{movie['summary']['label']}}
              </q-card-section>
            </q-card>
          </q-card-section>
        </div>
      </div>

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

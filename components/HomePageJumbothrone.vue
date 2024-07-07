<template>
  <div class="jumbothrone">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <h1 class="mt-10 font-weight-bold hero-text">
            Innovative IT Solutions for Tomorrow's Businesses
          </h1>
          <h3 class="text-white mt-5 font-weight-light">
            Experience the benefits of comprehensive IT solution, crafted to simplify operations,
            boost security, and propel your business ahead
          </h3>
          <p class="mt-8">
            <v-btn to="/contact" size="x-large" rounded variant="flat" color="#50C6E0">Contact us now</v-btn>
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="align-content-end text-right" v-if="$vuetify.display.mdAndUp">

          <v-avatar size="420" rounded class="mr-auto rounded-lg mt-8">
            <v-img aspect-ratio="1" src="/img/image2.jpeg"></v-img>
          </v-avatar>

        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HomePageJumbothrone",
})
</script>

<style scoped>
.jumbothrone {
  width: 100%;
  background-color: #04244C;
  height: 60vh;
  margin-top: 2%;
}

.hero-text {

  background: -webkit-linear-gradient(#65C9A3, #50C6E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>
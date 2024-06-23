<template>

  <v-container>
    <v-row dense class="mt-5">
      <v-col cols="12" sm="6" class="pt-md-16">
        <h1 class="text-h3 font-weight-black hero-text mt-md-16">Elevate Your Brand with IT that Speaks Excellence</h1>
        <p>Join forces with our acclaimed experts to shape a tech-savvy brand image, powered by award-winning support and strategic insights.</p>
        <v-btn class="mx-auto mt-5" size="x-large" rounded variant="flat" color="#50C6E0">Contact us now</v-btn>

      </v-col>
      <v-col cols="12" sm="6">
        <v-card height="600px" >
          <v-img content-class="contain" src="/img/support.jpg"></v-img>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MidCallToActionComponent"
})
</script>

<style scoped>
.hero-text {

  background: -webkit-linear-gradient(#65C9A3, #50C6E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
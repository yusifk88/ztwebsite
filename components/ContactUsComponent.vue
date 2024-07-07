<template>
  <div style="background-color: #04244C">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="hero-text text-center text-h4 font-weight-light">We would love to hear from you</h1>
          <p class="text-center text-white mt-5">Contact us or give us a call on +1 (708) 940-9918</p>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn to="/contact" size="x-large" rounded variant="flat">Contacts us now<v-icon>mdi-arrow-right</v-icon></v-btn>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ContactUsComponent"
})
</script>

<style scoped>

</style>
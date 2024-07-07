<template>

  <div style="background-color: #04244C" class="pa-15">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 hero-text text-center">It all begins from here!</h1>
          <p class="text-center text-white mt-4">Contacts us now</p>
        </v-col>
        <v-col cols="12" sm="6" class="mx-auto">
          <v-card>
            <v-card-text>

              <p>All filed marked <span class="text-red">*</span> are strictly required</p>
              <v-form>
                <v-label>First Name<sup class="text-red">*</sup></v-label>
                <v-text-field variant="outlined"></v-text-field>
                <v-label>Last Name<sup class="text-red">*</sup></v-label>
                <v-text-field variant="outlined"></v-text-field>
                <v-label>Email address<sup class="text-red">*</sup></v-label>
                <v-text-field type="email" variant="outlined"></v-text-field>
                <v-label>Phone Number<sup class="text-red">*</sup></v-label>
                <v-text-field type="tel" variant="outlined"></v-text-field>
                <v-label>Message<sup class="text-red">*</sup></v-label>
                <v-textarea rows="3" variant="outlined"></v-textarea>
              </v-form>
            </v-card-text>
<v-card-actions>
  <v-btn color="#50C6E0" block variant="flat" rounded size="x-large">Submit</v-btn>
</v-card-actions>
          </v-card>
        </v-col>

      </v-row>

      <v-row class="mt-5">
        <v-col cols="12" sm="6" class="mx-auto text-white">
          <p class="text-h5 font-weight-black"><v-icon>mdi-map-marker-multiple-outline</v-icon>Address:</p>
          <p>15114 Evergreen Dr<br>
            15114 Evergreen Dr, Orland Park, IL 60462</p>

          <p class="text-h5 font-weight-black mt-5"><v-icon>mdi-mail</v-icon>Email:</p>
          <p>support@zerotrustmsp.tech</p>

          <p class="text-h5 font-weight-black mt-5"><v-icon>mdi-phone</v-icon>Tel:</p>
          <p>+1 (708) 940-9918</p>

        </v-col>
      </v-row>
    </v-container>

  </div>


  <testimonials-components></testimonials-components>
  <mid-call-to-action-component></mid-call-to-action-component>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "contact"
})
</script>

<style scoped>

</style>
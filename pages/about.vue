<template>
  <div class="pa-8">

  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center text-h2 mt-5 font-weight-bold hero-text">About Us</h1>
      </v-col>
      <v-col cols="12" sm="8" class="mx-auto">
        <p class="text-justify">
          Our company is built on the core principles of Zero Trust as in Cybersecurity. A framework centered around the concept of not automatically trusting anything inside or outside a network parameter.
          Instead, it requires strict verification of anyone and anything trying to access the resources on the network, regardless of their location.
          This approach helps enhance security by reducing the potential of any attack while minimizing the impact of any breaches.

          To ensure that our clients are safe and protected, that is why we prefer to oversee all aspects of your IT services this way we will be in a much better position to carry out our mandate.
        </p>
      </v-col>

      <v-col cols="12" sm="8" class="mx-auto">
        <h1 class="text-center text-h2 mt-5 font-weight-bold hero-text">Locate Us</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5965.617978193685!2d-87.797453!3d41.616642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3e5e44119e3d%3A0xebcd68d5768f5ef5!2s15114%20Evergreen%20Dr%2C%20Orland%20Park%2C%20IL%2060462!5e0!3m2!1sen!2sus!4v1720325297263!5m2!1sen!2sus" width="100%" class="mt-4 rounded-lg" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </v-col>


    </v-row>


</v-container>
  </div>

  <contact-us-component></contact-us-component>
  <testimonials-components></testimonials-components>
  <mid-call-to-action-component></mid-call-to-action-component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "about"
})
</script>

<style scoped>

</style>
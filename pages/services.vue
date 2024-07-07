
<template>
  <div class="bg-grey-lighten-5">

  <v-container>
<v-row class="mt-5">
  <v-col cols="12" sm="12">
    <h2 class="text-center text-h2 mt-5 font-weight-bold hero-text">Our Services</h2>
    <P class="text-center">
      Zero Trust is dedicated to maintaining a stable, secure, and business-aligned technology infrastructure. Our comprehensive range of services and solutions provides tailored managed IT plans to enhance your company's productivity.    </P>
  </v-col>
</v-row>
  <services-compnent extended>

</services-compnent>
  </v-container>
<contact-us-component></contact-us-component>
  </div>

<testimonials-components></testimonials-components>
  <mid-call-to-action-component></mid-call-to-action-component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ContactUsComponent from "~/components/ContactUsComponent.vue";

export default defineComponent({
  name: "services",
  components: {ContactUsComponent}
})
</script>

<style scoped>

</style>
<template>
 <home-page-jumbothrone></home-page-jumbothrone>
  <div class="bg-blue-grey-lighten-5 pa-4" style="background-attachment: fixed" >
    <v-container>

      <h2 class="text-center text-h2 mt-5 font-weight-bold hero-text">Services</h2>
      <P class="text-center">
        Zero Trust is dedicated to maintaining a stable, secure, and business-aligned technology infrastructure. Our comprehensive range of services and solutions provides tailored managed IT plans to enhance your company's productivity.
      </P>

      <services-compnent></services-compnent>

    </v-container>
  </div>

  <industries-component></industries-component>

  <parteners-component></parteners-component>

  <testimonials-components></testimonials-components>

  <mid-call-to-action-component></mid-call-to-action-component>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HomePageJumbothrone from "~/components/HomePageJumbothrone.vue";
import IndustriesComponent from "~/components/industriesComponent.vue";

export default defineComponent({
  name: "indexpage",
  components: {IndustriesComponent, HomePageJumbothrone}
})
</script>


<style scoped>

</style>
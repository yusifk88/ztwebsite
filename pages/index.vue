<template>
 <home-page-jumbothrone></home-page-jumbothrone>
  <div class="bg-blue-grey-lighten-5 pa-4">
    <v-container>

      <h2 class="text-center text-h2 mt-5 font-weight-bold hero-text">Zero Trust Services</h2>
      <P class="text-center">
        All Covered is designed to ensure your technology infrastructure is stable, secure, and tuned to your business
        needs. Our expansive portfolio of services and solutions delivers the right managed IT service plan to optimize
        your businesses productivity.
      </P>

      <services-compnent></services-compnent>

    </v-container>
  </div>

  <industries-component></industries-component>

  <parteners-component></parteners-component>

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
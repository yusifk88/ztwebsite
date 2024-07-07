<template>
  <NuxtLayout>

    <v-app class="pt-16">
      <v-app-bar color="#04244C" flat class="pa-5 pl-16 pr-16">

        <v-app-bar-title style="margin-left: 12%;">
          <v-row><v-col cols="1"><v-img  src="/img/zt_logo.png" width="40"></v-img></v-col> <v-col cols="4"><p class="text-h5 font-weight-black hero-text">Zero Trust</p></v-col> </v-row>
        </v-app-bar-title>


        <v-btn slim to="/" selected-class="nav-select">
          Home
        </v-btn>

        <v-btn slim>
          About Us
        </v-btn>

        <v-btn slim to="/services">
          Services
        </v-btn>

        <v-btn slim>
          Pricing
        </v-btn>

        <v-btn slim>
          Payments
        </v-btn>

        <v-btn slim>
          Support
        </v-btn>

        <v-btn slim>
          Contact Us
        </v-btn>

        <v-btn slim>
          Resources
        </v-btn>

      </v-app-bar>

      <NuxtPage class="mt-8"></NuxtPage>
      <v-footer class="bg-grey-lighten-4">
        <v-row justify="center" no-gutters>
          <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
              to="/"
          >
            Home
          </v-btn>

              <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            About Us
          </v-btn>

              <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            Services
          </v-btn>
          <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            Pricing
          </v-btn>

              <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            Payments
          </v-btn>

              <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            support
          </v-btn>

              <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            Contact Us
          </v-btn>

              <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
          >
            Resources
          </v-btn>

          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Zero Trust LLC</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </NuxtLayout>
</template>
<style>
.nav-select{
  background-color: transparent !important;
  border-bottom: 2px solid #51C7D6 !important;
}
.hero-text {

  background: -webkit-linear-gradient(#65C9A3, #50C6E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
<script setup lang="ts">
</script>
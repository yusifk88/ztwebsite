<template>
  <NuxtLayout>
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
      <Link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"></Link>
      <Style>

        * {

          font-family: "Lato", sans-serif !important;
          font-display: swap;

        }
      </Style>


      <Link rel="icon" href="/img/zt_logo.png"></Link>
    </Head>
    <v-app class="pt-16">
      <v-app-bar color="#04244C" flat class="pa-5 pl-16 pr-16">

        <v-app-bar-nav-icon @click="showDrawer=!showDrawer" v-if="!$vuetify.display.mdAndUp"></v-app-bar-nav-icon>

        <v-app-bar-title style="cursor:pointer" @click="$router.push('/')">

            <img src="/img/zt_logo.png" width="30"  /><span class="text-h4 font-weight-black hero-text mb-5"> Zero Trust</span>


<!--          <v-row>-->
<!--            <v-col :cols="!$vuetify.display.mdAndUp ? 4 : 1">-->
<!--            </v-col>-->
<!--            <v-col cols="4" v-if="$vuetify.display.mdAndUp"><p class="text-h5 font-weight-black hero-text">Zero Trust</p></v-col>-->
<!--          </v-row>-->
        </v-app-bar-title>


        <v-btn v-if="$vuetify.display.mdAndUp" slim to="/" selected-class="nav-select">
          Home
        </v-btn>

        <v-btn v-if="$vuetify.display.mdAndUp" slim to="/services">
          Services
        </v-btn>

        <v-btn v-if="$vuetify.display.mdAndUp" slim to="/about">
          About Us
        </v-btn>

        <v-btn v-if="$vuetify.display.mdAndUp" slim>
          Support
        </v-btn>

        <v-btn v-if="$vuetify.display.mdAndUp" slim to="/contact">
          Contact Us
        </v-btn>

<!--        <v-btn v-if="$vuetify.display.mdAndUp" slim to="/resources">-->
<!--          Resources-->
<!--        </v-btn>-->

      </v-app-bar>

      <v-navigation-drawer
          v-model="showDrawer"
          temporary
          sticky
          location="start"

      >
        <v-list class="mt-10">
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/services">
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title> About Us</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title> support</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-title> Contact Us</v-list-item-title>
          </v-list-item>

          <v-list-item to="/resources">
            <v-list-item-title>Resources</v-list-item-title>
          </v-list-item>


        </v-list>

      </v-navigation-drawer>
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
              to="/services"
          >
            Services
          </v-btn>
          <v-btn
              class="mx-2"
              rounded="xl"
              variant="text"
              to="/about"
          >
            About Us
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
              to="/contact"
          >
            Contact Us
          </v-btn>

<!--          <v-btn-->
<!--              class="mx-2"-->
<!--              rounded="xl"-->
<!--              variant="text"-->
<!--              to="/resources"-->
<!--          >-->
<!--            Resources-->
<!--          </v-btn>-->

          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Zero Trust LLC</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </NuxtLayout>
</template>
<style>
.nav-select {
  background-color: transparent !important;
  border-bottom: 2px solid #51C7D6 !important;
}

.hero-text {

  background: -webkit-linear-gradient(#65C9A3, #50C6E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      showDrawer: false
    }
  },

  mounted() {
    useSeoMeta({
      title: 'Zero Trust Managed IT & Cyber-security Solutions',
      ogTitle: 'Zero Trust Managed IT & Cyber-security Solutions',
      description: 'Our company is built on the core principles of Zero Trust as in Cybersecurity. A framework centered around the concept of not automatically trusting anything inside or outside a network parameter. Instead, it requires strict verification of anyone and anything trying to access the resources on the network, regardless of their location. This approach helps enhance security by reducing the potential of any attack while minimizing the impact of any breaches.',
      ogDescription: 'Our company is built on the core principles of Zero Trust as in Cybersecurity. A framework centered around the concept of not automatically trusting anything inside or outside a network parameter. Instead, it requires strict verification of anyone and anything trying to access the resources on the network, regardless of their location. This approach helps enhance security by reducing the potential of any attack while minimizing the impact of any breaches.',
      ogImage: 'https://example.com/image.png',
      twitterCard: 'Our company is built on the core principles of Zero Trust as in Cybersecurity. A framework centered around the concept of not automatically trusting anything inside or outside a network parameter. Instead, it requires strict verification of anyone and anything trying to access the resources on the network, regardless of their location. This approach helps enhance security by reducing the potential of any attack while minimizing the impact of any breaches.',
    })
  }
})

</script>
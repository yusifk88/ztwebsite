<template>
  <div class="pa-4 bg-blue-grey-lighten-5">
    <v-container>

    <h1 class="text-center font-weight-black text-h4 mt-5">Our Partners</h1>
<v-row class="mt-4">
  <v-col cols="12" sm="12">
    <Vue3Marquee>
      <img
          v-for="(img,index) in imagesArr"
          :key="index"
          :src="img"
          height="60px"
          class="ma-3"
      >
    </Vue3Marquee>
  </v-col>
</v-row>
    </v-container>


  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Vue3Marquee} from "vue3-marquee";

export default defineComponent({
  name: "PartenersComponent",
  components: {Vue3Marquee},
  data(){
    return{
      imagesArr:[
        '/img/camcloud.png',
        '/img/sophos.png',
        '/img/march_networks.png',
        '/img/solink.webp',
        '/img/ms.png',
        '/img/cisco.png',
        '/img/lenovo.png',
        '/img/citrix.svg',
        '/img/datto.png',
      ]
    }
  }
})
</script>

<style scoped>

</style>
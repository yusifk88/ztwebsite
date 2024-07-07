<template>
  <div class="pa-4" style="background-color: #04244C;">

  <v-container>
    <h2 class="text-center text-h2 mt-5 font-weight-bold hero-text">Who we help</h2>
    <P class="text-center text-white">
      Zerotrust helps diverse industries in keeping their computers and networks secured with 24/7 IT support, web services and other customize support plans.
    </P>

    <v-row class="mt-4" justify="center">
      <v-col cols="12" sm="5" v-for="(industry,index) in industries" :key="index">
        <v-card :height="$vuetify.display.mobile? 'auto'  : 370">
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="6">
                <v-avatar size="100%" rounded class="rounded-lg">
                  <v-img :src="industry.img"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="6" class="pa-3 pl-5">
                <h2 class=" hero-text text-h4 font-weight-bold ">{{industry.title}}</h2>
                <ul>
                  <li class="pa-1" v-for="(service,i) in industry.services" :key="i">
                    {{service}}
                  </li>
                </ul>
              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center">
        <h3 class="text-center text-white mt-3">Let's help your organization</h3>
        <v-btn to="/contact" class="mx-auto mt-3" size="x-large" rounded variant="flat" color="#50C6E0">Contact us now</v-btn>
      </v-col>
    </v-row>

  </v-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "industriesComponent",
  data(){
    return{
      industries:[
        {
          title:"Education",
          img:"/img/classroom.jpg",
          services:["Collaborative Classrooms","E-Rate for Schools/Libraries","Device Procurement","Intelligent Info Management","Online Classrooms"]
        }
        , {
          title:"Healthcare",
          img:"/img/hospital.jpg",
          services:["Collaborative Classrooms","E-Rate for Schools/Libraries","Device Procurement","Intelligent Info Management","Online Classrooms"]
        }, {
          title:"Legal",
          img:"/img/legal.jpg",
          services:["Collaborative Classrooms","E-Rate for Schools/Libraries","Device Procurement","Intelligent Info Management","Online Classrooms"]
        }, {
          title:"Finance",
          img:"/img/finance.jpg",
          services:["Collaborative Classrooms","E-Rate for Schools/Libraries","Device Procurement","Intelligent Info Management","Online Classrooms"]
        }
      ]
    }
  }
})
</script>

<style scoped>
.hero-text {

  background: -webkit-linear-gradient(#65C9A3, #50C6E0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>
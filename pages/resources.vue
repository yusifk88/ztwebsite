
<template>
  <div style="background-color: #04244C" class="pa-15">
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12">
          <h1 class="hero-text text-center">Helpful Resources</h1>
          <p class="text-white text-center">Please find below some curated list of resource links to help your through your onboarding journey with us</p>
        </v-col>
        <v-col cols="12" sm="8" class="mx-auto">
          <v-row>
            <v-col cols="12" v-for="(link,i) in links" :key="1">
              <v-card target="_blank" :href="link.link">
                <v-card-text>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon>mdi-link</v-icon>
                    </template>
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                    <v-list-item-subtitle>{{link.description}}</v-list-item-subtitle>
                    <template v-slot:append>
                      <v-icon>mdi-open-in-new</v-icon>
                    </template>
                  </v-list-item>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
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
  name: "resources",
  data(){
    return{
      links:[
        {
          link:"https://forms.gle/JBUCAJGWk2X62pgr9",
          text:"Client Infrastructure Tracker",
          description:"Network Credentials Forms"
        } ,
        {
          link:"https://forms.gle/9sx56jnEXD8xFVpm9",
          text:"Expense Tracker Form",
          description:"Business Expenses Tracking"
        } ,
        {
          link:"https://forms.gle/7sJofg4gWpaLzdzt6",
          text:"Client ISP Tracker",
          description:"Internet Service Provider Credentials Form"
        },
        {
          link:"https://sos.splashtop.com/",
          text:"Download Support Agent",
          description:"Allow your IT admin to access this computer"
        }
      ]
    }
  }
})
</script>

<style scoped>

</style>
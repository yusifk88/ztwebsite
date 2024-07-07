<template>
<div class="testimonials-bg">
  <v-container>
<v-row>
  <v-col cols="12" sm="6" class="mx-auto">
    <h1 class="text-center font-weight-light">What our clients are saying about us</h1>
  </v-col>
</v-row>
    <v-row>

  <v-col cols="12" sm="6" class="mx-auto">

    <v-card
        class="mx-auto"
    >
      <v-carousel
          :continuous="true"
          :show-arrows="true"
          delimiter-icon="mdi-square"
          hide-delimiter-background
          :hide-delimiters="true"
          cycle
          progress
      >
        <v-carousel-item
            v-for="(slide, i) in testimonials"
            :key="i"
        >
          <v-sheet
              height="100%"
              tile
          >
            <div class="d-flex fill-height justify-center align-center">

               <v-card-text >
                 <p  class="text-h6" style="line-height:40px; font-style: italic; ">
                   "{{slide.content}}"
                 </p>


                 <p style="font-style: none !important;" class="mt-3 text-cyan"><v-avatar class="mr-3"><v-img src="/img/photo.png"></v-img></v-avatar>{{slide.person.name}} - {{slide.person.company}}</p>

               </v-card-text>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-col>
</v-row>

  </v-container>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TestimonialsComponents",
  data(){
    return{
      testimonials:[
        {
          content:"We recently had a new NVR system installed and all our camera-related issues resolved by ZeroTrust. The service we received was outstanding. ZeroTrust was professional, efficient, and highly knowledgeable. Thanks to their expertise, our security system is now running smoothly, giving us peace of mind. We couldn't be happier with the results. I highly recommend ZeroTrust for any security system needs.",
          person:{
            name:"Joe Patel",
            company:"CEO, ABV Inn/Signatures"
          }

        },
        {
          content:"ZeroTrust provided exceptional service during a recent job in Danville, Illinois, where they adjusted five of our cameras. Their expertise and dedication were evident, and the results exceeded our expectations. We're grateful for the prompt and professional help we received. Thank you so much for your great help with this visit. I will definitely be in touch for future jobs!",
          person:{
            name:"Misty Frank",
            company:"CEO, ABV Inn/Signatures"
          }

        } ,
        {
          content:"For the past three years, Zero Trust Managed IT & Cybersecurity Solutions LLC has been instrumental in setting up and maintaining our entire network infrastructure. This includes setting up access points, computers, and printers, as well as managing our emails and website. The level of service and support we have received has been outstanding. Their expertise and reliability have made a significant positive impact on our business operations. We highly recommend their services to anyone in need of top-notch IT solutions.",
          person:{
            name:"Rania Rahman",
            company:"CEO, ATSII (Accounting and Tax Solutions of Illinois Inc.)"
          }

        },
        {
          content:"We recently had a new NVR system installed and all our camera-related issues resolved by Zero Trust Managed IT & Cybersecurity Solutions. The service we received was outstanding. They were professional, efficient, and highly knowledgeable. Thanks to their expertise, our security system is now running smoothly, giving us peace of mind. We couldn't be happier with the results. I highly recommend Zero Trust Managed IT & Cybersecurity Solutions for any security system needs.",
          person:{
            name:"Joe Patel",
            company:"CEO, ABV Inn/Signatures"
          }

        },
        {
          content:"Zero Trust Managed IT & Cybersecurity Solutions provided exceptional service during a recent job in Danville, Illinois, where they adjusted five of our cameras. Their expertise and dedication were evident, and the results exceeded our expectations. We're grateful for the prompt and professional help we received. Thank you so much for your great help with this visit. I will definitely be in touch for future jobs!",
          person:{
            name:"Misty Frank",
            company:"Deployment Project Manager I, Solink"
          }

        }
      ]
    }
  }
})
</script>

<style scoped>

.testimonials-bg{
  background-image: linear-gradient(#62C9A8, #53C7D8);
}

</style>
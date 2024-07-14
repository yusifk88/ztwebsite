<template>
<v-container>

  <v-row>
    <v-col cols="12" sm="6" class="mx-auto">
   <v-row class="mt-15">
     <v-col cols="12" sm="6" class="mx-auto">
       <v-img src="/img/help.svg"></v-img>

     </v-col>

<v-col cols="12" sm="8" class="mx-auto">
<h1 class="text-center hero-text mt-8">Let's help you get started</h1>
  <p class="text-center">Follow the instructions to send a support ticket.</p>

</v-col>

   </v-row>

    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="8" class="mx-auto">
      <ol class="rounded-lg bg-cyan-lighten-5 pa-7">
        <li
            class="ma-4 font-weight-black text-blue"
            v-for="(item,index) in list"
            :key="index"
        >
        {{item.text}}
        </li>
      </ol>

      <v-alert color="blue" prominent variant="tonal" type="info" class="mt-5">
       <p class="font-weight-black ma-2"> <strong>Note:</strong> You can minimize the agent while you continue to do your work.
        Thank you in advance.</p>
      </v-alert>

      <v-btn href="https://sos.splashtop.com/" rounded height="80" target="_blank" size="x-large" block color="green" variant="flat" class="mt-4"><v-icon>mdi-link</v-icon>Click to Download Support Agent</v-btn>
    </v-col>
  </v-row>
</v-container>

  <mid-call-to-action-component></mid-call-to-action-component>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "support",
  data(){
    return{
      list:[
        {
          text:"Download the support agent and open it."
        },
          {
          text:"Once the agent open, it will present you with a code. Copy the code."
        },
          {
          text:"Fill the ticket form and include the code you copied in the body of the message along with a clear description of the issue you have."
        }, {
          text:"While you wait for support please keep the support agent open."
        },

      ]
    }
  }
})
</script>

<style scoped>

</style>
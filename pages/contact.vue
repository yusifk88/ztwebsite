<template>
  <div style="background-color: #04244C" class="pa-md-15">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 hero-text text-center">It all begins from here!</h1>
          <p class="text-center text-white mt-4">Contacts us now</p>
        </v-col>
        <v-col cols="12" sm="6" class="mx-auto">
          <v-card>
            <v-card-text>

              <p>All filed marked <span class="text-red">*</span> are strictly required</p>
              <v-form ref="contactForm">
                <v-label>First Name<sup class="text-red">*</sup></v-label>
                <v-text-field v-model="first_name" :rules="requiredRules" variant="outlined"></v-text-field>
                <v-label>Last Name<sup class="text-red">*</sup></v-label>
                <v-text-field v-model="last_name" :rules="requiredRules" variant="outlined"></v-text-field>
                <v-label>Email address<sup class="text-red">*</sup></v-label>
                <v-text-field v-model="email" :rules="requiredRules" type="email" variant="outlined"></v-text-field>
                <v-label>Phone Number<sup class="text-red">*</sup></v-label>
                <v-text-field v-model="phone" :rules="requiredRules" type="tel" variant="outlined"></v-text-field>
                <v-label>Message<sup class="text-red">*</sup></v-label>
                <v-textarea v-model="comment" :rules="requiredRules" rows="3" variant="outlined"></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="sendContact" :loading="sending" color="#50C6E0" block variant="flat" rounded size="x-large">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>

      <v-row class="mt-5">
        <v-col cols="12" sm="6" class="mx-auto text-white">
          <p class="text-h5 font-weight-black">
            <v-icon>mdi-map-marker-multiple-outline</v-icon>
            Address:
          </p>
          <p>15114 Evergreen Dr<br>
            15114 Evergreen Dr, Orland Park, IL 60462</p>

          <p class="text-h5 font-weight-black mt-5">
            <v-icon>mdi-mail</v-icon>
            Email:
          </p>
          <p>support@zerotrustmsp.tech</p>

          <p class="text-h5 font-weight-black mt-5">
            <v-icon>mdi-phone</v-icon>
            Tel:
          </p>
          <p>+1 (708) 940-9918</p>

        </v-col>
      </v-row>
    </v-container>

  </div>


  <testimonials-components></testimonials-components>
  <mid-call-to-action-component></mid-call-to-action-component>

  <v-dialog width="500" v-model="ShowSentDialog">
    <v-card>
      <v-card-text class="text-center">
        <v-icon size="60" color="green">mdi-check-circle-outline</v-icon>
        <h1 class="text-green font-weight-light">Thank you for contacting us!</h1>
        <p class="font-weight-light text-grey">We have received your inquiry and we would reach out shortly.</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="clearAndClose" block variant="flat" color="green" size="x-large" rounded>Okay</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {Buffer} from "buffer";

export default defineComponent({
  name: "contact",
  data() {
    return {
      first_name:"",
      last_name: "",
      email: "",
      company: "",
      phone: "",
      comment: "",
      ShowSentDialog: false,
      sending: false,
      requiredRules: [
        (v: any) => !!v || 'This field is required'
      ]

    }
  },
  methods: {
    clearAndClose(){
      this.first_name="";
      this.last_name="";
      this.email="";
      this.phone="";
      this.comment="";
      this.ShowSentDialog=false;
    },


    async sendContact() {
      const {valid} = await this.$refs.contactForm.validate();

      if (valid) {

        const name = this.first_name+" "+this.last_name;
        this.sending = true;
        const contactForm = new FormData();
        const subject = "inquiry: " + this.company;
        let html = "<p>" + this.comment + "</p>";
        html += "<p> Name:" + name + "</p>";
        html += "<p> Phone Number:" + this.phone + "</p>";
        html += "<p> Email:" + this.email + "</p>";


        contactForm.append("from", "support@zerotrustmsp.tech");
        contactForm.append("to", "support@zerotrustmsp.tech");
        contactForm.append("reply-to", this.email);
        contactForm.append('subject', subject);
        contactForm.append('html', html);
        const runtimeConfig = useRuntimeConfig();

        const Key = this.$config.public.mailgunKey;

        const domainname = this.$config.public.mailgunDomain;
        const resp = await fetch(
            `https://api.mailgun.net/v3/${domainname}/messages`,
            {
              method: 'POST',
              headers: {
                Authorization: 'Basic ' + Buffer.from('api:' + Key).toString('base64')
              },
              body: contactForm
            }
        );

        await resp.text();
        this.sending = false;
        this.ShowSentDialog = true;


      }


    }

  }
})
</script>

<style scoped>

</style>
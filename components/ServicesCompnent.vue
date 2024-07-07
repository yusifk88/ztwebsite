<template>

  <v-row class="mt-5">
    <v-col cols="12" sm="4" v-for="(service,index) in services" :key="index">
      <v-card variant="flat">
        <v-card-text class="pa-12">
          <v-icon size="60" class="hero-text">{{service.icon}}</v-icon>
          <p class="font-weight-black text-h5">{{service.title}}</p>
          <ul class="text-left">
            <li v-for="(item, i) in service.details" :key="1">{{item}}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="mt-5" v-if="extended">
    <v-col cols="12" sm="4" v-for="(service,index) in others" :key="index">
      <v-card variant="flat">
        <v-card-text class="pa-12">
          <v-icon size="60" class="hero-text">{{service.icon}}</v-icon>
          <p class="font-weight-black text-h5">{{service.title}}</p>
          <ul class="text-left">
            <li v-for="(item, i) in service.details" :key="1">{{item}}</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props:
    {
    extended:{
      type:Boolean,
      default:false
    }
    }
  ,
  name: "ServicesCompnent",
  data() {
    return {
      services: [
        {
          icon: "mdi-server-security",
          title: "Security Services",
          details: ["Cyber-security", "Security Compliance", "Malware Protection", "Vulnerability Management", "Security Monitoring"]

        },
        {
          icon: "mdi-cloud-arrow-up",
          title: "Cloud Services",
          details: ["Cloud Migration", "Cloud Security", "Microsoft 365 and Azure", "Private Cloud", "Hybrid Work Solutions"]

        },
        {
          icon: "mdi-face-agent",
          title: "Remote Help Desk",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

        }
        ,
        {
          icon: "mdi-laptop-account",
          title: "Device Life Cycle Asset Management",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

        },
        {
          icon: "mdi-cctv",
          title: "CCTV Installation & Maintenance",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

        },
        {
          icon: "mdi-server-network",
          title: "low voltage Cat6 and  Fiber cabling",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

        }

      ],
      others:[
        {
          icon: "mdi-xml",
          title: "Web & application development",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

        },
        {
          icon: "mdi-fit-to-screen",
          title: "IT consultancy",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

        }
,
        {
          icon: "mdi-cube-unfolded",
          title: "Custom Solutions",
          details: ["24/7 Technical Support", "Network Operations Center", "Remote Support Center", "On-Site IT Response", "Device troubleshooting"]

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
<template>

  <v-row class="mt-5">
    <v-col cols="12" sm="4" v-for="(service,index) in services" :key="index">
      <v-card variant="flat" height="350">
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
      <v-card variant="flat" height="350">
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
          title: "Device Life Cycle & Asset Management",
          details: ["Asset Inventory Management", "Procurement and Deployment", "Device Maintenance and Support", "End-of-Life Management", "Software and Firmware Updates"]

        },
        {
          icon: "mdi-cctv",
          title: "CCTV Installation & Maintenance",
          details: ["Customized CCTV system layout that maximizes coverage and effectiveness", "Installation and Setup", "Regular Maintenance and Inspections", "Troubleshooting and Repairs", "System Upgrades and Expansion"]

        },
        {
          icon: "mdi-server-network",
          title: "low voltage Cat6 and  Fiber cabling",
          details: ["Design and Planning of layout and installation of Cat6 and fiber optic cabling", "Installation and Configuration (including termination and testing)", "Cable Management", "Maintenance and Repairs to ensure the cabling infrastructure remains reliable and efficient"]

        }

      ],
      others:[
        {
          icon: "mdi-xml",
          title: "Web & Application Development",
          details: ["Custom Web Development", "Mobile App Development", "E-commerce Solutions", "Maintenance and Support"]

        },
        {
          icon: "mdi-fit-to-screen",
          title: "IT consultancy",
          details: ["IT Strategy and Planning", "Infrastructure Assessment and Optimization", "Cyber-security Consulting", "Cloud Services and Migration", "Technology Implementation and Integration"]

        }
,
        {
          icon: "mdi-cube-unfolded",
          title: "Managed IT Solutions",
          details: ["Managed IT Services", "Managed Security Services", "Managed Cloud Services", "Managed Backup and Disaster Recovery", "Managed Network Services"]

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
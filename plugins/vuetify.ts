import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
        directives,
        defaults:{
            VBtn: {
                variant: 'flat',
                rounded: 'lg',
                style: 'text-transform: capitalize; cursor:pointer; ',
            },
            VCard: {
                variant: 'flat',
                rounded: 'lg',
                style: 'text-transform: capitalize; border-radius:15px !important; ',
            },
        }
    })
    app.vueApp.use(vuetify)
})
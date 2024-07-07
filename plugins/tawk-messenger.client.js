import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';


export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.use(TawkMessengerVue, {

        propertyId : '6689f4d2eaf3bd8d4d18f545',

        widgetId : '1i25e8m7v'

    });

});
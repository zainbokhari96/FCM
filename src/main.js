import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB4ZLbtQy2jxueFIo03H3EL3PnHI7GQcmY",
  authDomain: "fcm-test-ea1fa.firebaseapp.com",
  projectId: "fcm-test-ea1fa",
  storageBucket: "fcm-test-ea1fa.appspot.com",
  messagingSenderId: "853023070862",
  appId: "1:853023070862:web:4ad4eb2472b7b994b1c7df",
  measurementId: "G-ZK6LVSSN4S"
});

const messaging = firebase.messaging();

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)

  messaging.onMessage(function(payload){
      console.log('onMessage:', payload)
    });
    
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

  
messaging.onTokenRefresh(function () {
  messaging.getToken().then(function (newToken) {
    console.log('Token refreshed: ', newToken)
  }).catch(function (err) {
    console.log('Unable to retrieve refreshed token ', err)
  })
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

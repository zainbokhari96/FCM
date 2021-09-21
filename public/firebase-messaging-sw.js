//firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyB4ZLbtQy2jxueFIo03H3EL3PnHI7GQcmY",
    authDomain: "fcm-test-ea1fa.firebaseapp.com",
    projectId: "fcm-test-ea1fa",
    storageBucket: "fcm-test-ea1fa.appspot.com",
    messagingSenderId: "853023070862",
    appId: "1:853023070862:web:4ad4eb2472b7b994b1c7df",
    measurementId: "G-ZK6LVSSN4S"
}

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);

  });


//  Curl Example

// curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
// --header 'Content-Type: application/json' \
// --header 'Authorization: key=AAAAxpwjGo4:APA91bGaj-_64P9TpZc_b9mgNQqaOeEtKFRGPmH_nQFcVso85DOLBFxulPV6_n3PY4CFblKxhkTDYkEpoNWTJBCWyxSRru-VMuDUZ0bcschPLKWdRsv2uq22F535OUsNkPTCCVrNFjPp' \
// --data-raw '{
//   "notification": {
//     "title": "Shani Shah ",
//     "body": "Kaise Ho",
//     "click_action": "https://www.google.com/"
//   },
//   "registration_ids": [
//     "d4oW3FdavLONs9cWyTSi-9:APA91bE2mc0OrNCxTNm-uBLcpdOnmgxLr46nXmW6SiglgNrL2pXrquabOUL97botmWJrsd8kXpDjLJJFlMK9qocJtcyogVm5XdzjgR3Y_cPljSG7ZkaOhzohN6qtJuj2tRgI5oFlmmfT"
//   ]
// }'
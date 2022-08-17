// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCA58hPjzk1Q0PmJmavzdHvypCCeBleDVQ',
  authDomain: 'clothing-store-eba22.firebaseapp.com',
  projectId: 'clothing-store-eba22',
  storageBucket: 'clothing-store-eba22.appspot.com',
  messagingSenderId: '104937580227',
  appId: '1:104937580227:web:9a1fceb9c3c4a7c0f76476',
  measurementId: 'G-CHGR6NP2E9'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

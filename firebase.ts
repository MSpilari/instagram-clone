// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBR41CHMFaTTkXtATYrdBK7fDOsDCtzEgk',
	authDomain: 'instagram-clone-6b506.firebaseapp.com',
	projectId: 'instagram-clone-6b506',
	storageBucket: 'instagram-clone-6b506.appspot.com',
	messagingSenderId: '197671100894',
	appId: '1:197671100894:web:1c0c963a5d441c95233d4f'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

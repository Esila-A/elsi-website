// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, list, ref } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDNJI6DrrHnbAWPQ_C5bPiL0aEBRge-7JI',
    authDomain: 'bro-s-website.firebaseapp.com',
    projectId: 'bro-s-website',
    storageBucket: 'bro-s-website.appspot.com',
    messagingSenderId: '339703580549',
    appId: '1:339703580549:web:2ce0398b54c258d731a6ec',
    measurementId: 'G-VCCF10C7LY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

async function getPictures() {
    const storage = getStorage()
    const listRef = ref(storage)

    const files = await list(listRef)
    const f = await Promise.all(files.prefixes.map(value => list(value)))
    return Promise.all(
        f.map(async (folder, i) => ({
            name: files.prefixes[i]._location.path_,
            images: await Promise.all(folder.items.map(e => getDownloadURL(e))),
        }))
    )

}


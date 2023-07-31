
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXB8rpbBx9XhdU_CAjSR56C6ib4RDgMcM",
  authDomain: "proyecto-react-com43290-ml.firebaseapp.com",
  projectId: "proyecto-react-com43290-ml",
  storageBucket: "proyecto-react-com43290-ml.appspot.com",
  messagingSenderId: "582082028858",
  appId: "1:582082028858:web:d70eff1e0f56d47dea5c03"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
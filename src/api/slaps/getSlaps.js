import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore/lite";
import firebaseConfig from "../fireBaseConfig";

async function getSlaps(){
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const slaps = collection(db, 'slaps');
    const slap = await getDocs(slaps);
    return slap.docs.map(doc => doc.data());
}


export default getSlaps();
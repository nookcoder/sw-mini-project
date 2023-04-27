import {ref, get, child} from "firebase/database";
import {appDatabase} from "./index";

export async function getComments(type){
    const dbRef = ref(appDatabase);
    return (await get(child(dbRef, `comments/${type}`))).val();
}

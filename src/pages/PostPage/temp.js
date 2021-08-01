import React, {useEffect, useState} from 'react';
import { db } from "../../firebase";
import firebase from "firebase";

function Temp() {
    const [state, setstate] = useState({error: "", data: ""});

    useEffect(() => {
        db.collection("posts").doc("temp").add({
           data:"hello data",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          }).then((result) => {
              setstate({...state,data:result})
          }).catch((err) => {
            setstate({...state,error:err})
          });
    }, [])
    return (
        <div>
            {JSON.stringify(state.error)}
            {JSON.stringify(state.data)}
        </div>
    )

}
export default Temp

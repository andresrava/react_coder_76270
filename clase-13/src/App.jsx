import { useState, useEffect } from 'react';
import {doc,getDoc,getFirestore} from "firebase/firestore";
import './App.css'

function App() {

  const [data,setData] = useState({});

  const db = getFirestore();

  useEffect(() => {
    const itemRef = doc(db,"items","QlVWHFzbbXnvTLJaIyvL");

    // traigo el elemento

    getDoc(itemRef).then(snapshot=>{
      console.log(snapshot);
      console.log(snapshot.data());
      setData(snapshot.data())
    })
  },[])


  

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>{data.price}</h3>
       
    </>
  )
}

export default App

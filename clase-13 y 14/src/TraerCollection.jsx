import { collection, getDocs,getFirestore } from "firebase/firestore"
import { useEffect } from "react"

function TraerCollection() {
    useEffect(() => {
      const db = getFirestore();

      // Creamos la referencia a la coleccion

      const itemCollection = collection(db,"items")

      // Traemos la información

      getDocs(itemCollection).then(snapshot=>snapshot.docs.map(docu=>
        {
        console.log(docu.data())
        console.log(docu.id)
        }
    ))
    },[])
  return (
    <div>TraerCollection</div>
  )
}

export default TraerCollection
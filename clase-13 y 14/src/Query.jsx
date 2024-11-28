import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import { useEffect } from "react"


function Query() {
    // conecto la base de datos

    const db=getFirestore();

    useEffect(() => {

        //creo la referencia a la collection

        const refItems = collection(db,"items");

        // generamos la consulta (query)

        // const refItemsFiltrada = query(refItems,where("price","<",200))
        const refItemsFiltrada = query(refItems,where("categoryId","==","indumentaria"))

        getDocs(refItemsFiltrada).then(snapshot=>{
            if(snapshot.size===0){
                console.log("No hay resultados para la búsqueda")
            } else {
                snapshot.docs.map(prod=>console.log(prod.data()))
            }
        })


    },[])
  return (
    <div>Query</div>
  )
}

export default Query
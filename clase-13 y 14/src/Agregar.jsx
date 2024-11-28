import { addDoc, collection,getFirestore } from "firebase/firestore"

function Agregar() {

    const item = {
        title: "Remera",
        description:"Remera manga corta oversize",
        categoryId:"indumentaria",
        imageId:"remera.jpg",
        price: 50,
        stock:10
    }

    // Conectamos a la base de datos

    const db=getFirestore();

    //Referenciamos la colección

    const itemCollection = collection(db,"items");

    //Agregamos el nuevo item a la colección

    addDoc(itemCollection,item).then(({id})=>{
        console.log(id)
        console.log("Producto agregado correctamente")
    })

  return (
    <div>Agregeando Item</div>
  )
}

export default Agregar
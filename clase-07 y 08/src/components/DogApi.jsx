import { useState } from "react";

function DogApi() {
    
    const [dogImageUrl,setDogImageUrl] = useState("");
    
    const fetchDogApi = () => {
        
        fetch("https://dog.ceo/api/breed/beagle/images/random")  // retorna una promesa
            .then(response=> response.json()) // retorna una prompesa
            .then(data=>{
                console.log(data);
                setDogImageUrl(data.message)
            })
            .catch(error =>console.error("error haciendo el fetch",error))

    }

    return (
        <div>
            <h1>Imagen de perro aleatoria</h1>
            <button onClick={fetchDogApi}>Traer foto</button>
            {dogImageUrl && <img src={dogImageUrl}/>}
       {/*      FALSE                    TRUE 
                          FALSE                        */}
        </div>
    )
}

export default DogApi
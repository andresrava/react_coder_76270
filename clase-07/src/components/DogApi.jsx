import { useState } from "react";

function DogApi() {

    const [dogImageUrl,setDogImageUrl] = useState("");

    const fetchDogApi = () => {
        
        fetch("https://dog.ceo/api/breeds/image/random")  // retornar una promesa
            .then(response=>{
                console.log(response)
                if (!response.ok){
                    throw new Error("No pudimos recibir la imagen")
                }
                return response.json()
            })
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
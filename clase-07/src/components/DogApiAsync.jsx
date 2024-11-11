import { useState } from "react";

function DogApiAsync() {

    const [dogImageUrl,setDogImageUrl] = useState("");

    const fetchDogApi = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            console.log(response);

            if(!response.ok){
                throw new Error("No pudimos hacer fetch")
            }

            const data=await response.json();
            console.log(data);
            setDogImageUrl(data.message);

        }
        catch (error){
            console.error("Error en la API",error)
        }
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

export default DogApiAsync
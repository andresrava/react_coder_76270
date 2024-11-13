import useFetch from "../customHooks/useFetch"

function DogApi2() {
    
   const {data,loading,error} = useFetch("https://dog.ceo/api/breeds/image/random")
    
    if (loading) return <p>loading...</p>

    return (
        <div>
            <h1>Imagen de perro aleatoria</h1>
            
            {data && <img src={data.message}/>}
       {/*      FALSE                    TRUE 
                          FALSE                        */}
        </div>
    )
}

export default DogApi2
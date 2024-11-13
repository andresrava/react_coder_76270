import useFetch from "../customHooks/useFetch";


function Harry() {

   const {data,loading,error}= useFetch("https://hp-api.onrender.com/api/characters")

   if (loading) return <p>Loading...</p> 
   if (error) return <p>Error: {error.message}</p>

   const characters = data.slice(0,200);
  return (
    <div>
        <h2>Bienvenidos a la web de Harry Potter</h2>
        <ul>
            {characters.map(personaje=>(
                <li key={personaje.id}>
                    <h2>{personaje.name}</h2>
                    <h3>{personaje.house}</h3>
                    <img src={personaje.image} width="100" alt="" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Harry
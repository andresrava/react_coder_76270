import { useEffect,useState } from "react";



function EjemploPicanteUseEffect() {
    const [laps,setLaps] = useState(0);

    const [timeInSenconds,setTimeInSeconds]=useState(0);

    useEffect(() => {
        setTimeInSeconds(0);
        const interval=setInterval(() => {
          setTimeInSeconds(time=>time+1);
        },1000);
        return () => {  // se desmonta el componente
          clearInterval(interval);
          console.log("se desmonta el componente")
        }
      
    },[laps])


  return (
    <div>
        <p>Vueltas: {laps}</p>
        <p>Tiempo en segundos: {timeInSenconds}</p>

        <button onClick={()=>setLaps(laps+1)}>Finalizar vuelta</button>
    </div>
  )
}

export default EjemploPicanteUseEffect

// Que pasa al clickear "finalizar vuelta"

//1 - Se actualiza el estado laps
//2 - Entonces, se vuelve a renderizar el componente
//3 - Por ello se desmonta y se vuelve a montar
//4 - En la acción de desmontaje limpiamos el intervalo.
//5 - Todo vuelve a comenzar de 0. 
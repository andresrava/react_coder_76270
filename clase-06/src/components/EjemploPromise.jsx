import {useState,useEffect} from "react";

function EjemploPromise() {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
     //Simulamos una solicitud de datos que tarde 2 segundos en completarse
     
     const fetchData = new Promise((resolve,reject) => {
       setTimeout(() => {
         const success = false;
         if(success){
            resolve("Datos recibidos correctamente")
         } else {
            reject("Error al obtener los datos")
         }
       },2000);

       
    });
    
    fetchData.then((data)=>{
       setData(data);
       setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    })

    },[])

     if(loading) return <p>Cargando...</p>
     if(error) return <p>{error}</p>
    
     return <p>{data}</p>
  
}

export default EjemploPromise


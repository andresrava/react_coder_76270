
// function EjemploMap() {
//   return <ul>
//     {["Daniel","Andrés","Martín","Cristian","Diego"].map((nombre,index)=><li key={index}>{nombre}</li>)}
//   </ul>
// }

// export default EjemploMap

import {useState} from "react";



function EjemploMap() {
    const [users,setUsers]=useState([
        {id:1,nombre:"Juan"},
        {id:2,nombre:"Laura"},
        {id:3,nombre:"Fernando"}
    ])
    return <ul>
        {users.map(user=><li key={user.id}>{user.nombre}</li>)}
    </ul>
}

export default EjemploMap
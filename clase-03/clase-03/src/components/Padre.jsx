import Hijo from "./Hijo";
function Padre() {
    return (
        <div>
            <Hijo nombre="Carla" edad= "22"/>
            <Hijo nombre="Fernanda" edad= "15"/>
            <Hijo nombre="Alberto" edad= "18"/>
            <Hijo nombre="Patricia" edad= "28"/>
        </div>
    )
}

export default Padre;
function Boton({count,setCount}) {
    return (
    <div className="card">
        <button onClick={() => setCount( count + 1)}>
          count is {count}
        </button>
       
    </div>
    )
}

export default Boton
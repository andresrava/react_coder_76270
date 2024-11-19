import { useState } from "react";

function EjemploOnSubmit() {

    const [inputValue,setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
        // console.log(inputValue)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese algo" value={inputValue} onChange={handleChange} />
            <button>Enviar</button>
        </form>

        {submittedValue && <p>Has enviado: {submittedValue}</p>}

    </div>
  )
}

export default EjemploOnSubmit
import { useState } from 'react';
import "./Contador.css";

const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={restarContador} className='button'> - </button>
                <strong> {contador} </strong>
                <button onClick={sumarContador} className='button'> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className='buttonAgregar'> Agregar al Carrito </button>
        </>
    )
}

export default Contador
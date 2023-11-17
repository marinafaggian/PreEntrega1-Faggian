import { useContext, useState } from 'react';
import CarritoContext from '../../context/CarritoContext';
import { db } from '../../service/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import './Checkout.css';


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();
        const alert1 = () => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor completa todos los campos",
            });
        }
        const alert2 = () => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Los campos de email no coinciden",
            });
        }

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            alert1();
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos de email no coinciden");
            alert2();
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        const Toast = Swal.mixin({
            toast: true,
            position: "top-center",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: `¡Muchas gracias por tu compra!`,
        });

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

            })
        )
            .then(() => {

                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                        Toast();
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error);
                        setError("Se produjo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.log("No se pudo actualiza rel stock", error);
                setError("No se pudo actualizar el stock");
            })

    }



    return (
        <div className='checkout'>
            <h2 className='titulo'>Detalles de tu compra</h2>
            <form onSubmit={manejadorFormulario} className='formulario'>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id} className='productos'>
                            <p className='producto'>{producto.item.nombre} x {producto.cantidad}</p>
                            <p className='producto'>${producto.item.precio}.-</p>
                        </div>
                    ))
                }
                <div className='formImputs'>
                    <div className='form-group'>
                        <label htmlFor="" className='label'>Nombre</label>
                        <input type="text" onChange={(e) => setNombre(e.target.value)} className='input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='label'>Apellido</label>
                        <input type="text" onChange={(e) => setApellido(e.target.value)} className='input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='label'>Teléfono</label>
                        <input type="text" onChange={(e) => setTelefono(e.target.value)} className='input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='label'>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className='input' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='label'>Confirmar Email</label>
                        <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} className='input' />
                    </div>
                    </div>
                    <button type='submit' className='buttonConfirmacion'>Confirmar compra</button>

                    <div className='ordenFinalizada'>
                        {
                            ordenId && (
                                <p> ¡Gracias por tu compra! Tu número de orden es: {ordenId}</p>
                            )
                        }
                    
                </div>
            </form>


        </div>
    )
}

export default Checkout
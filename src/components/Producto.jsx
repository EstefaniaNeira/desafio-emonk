import React, { useEffect, useState } from 'react'

const Producto = () => {

    const url = "http://54.203.82.32:3000/api/productos/producto/26"
    const [datos, setDatos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setDatos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className='Producto'>
            <div className='imgProducto'>
                <img id='imgProducto' src="http://54.203.82.32:3000/api/productos/img/pd2-3-000002-001.jpg" alt="" />
            </div>
            <div className='detalleProducto'>
                <ul>
                    {!datos ? 'Cargando...' :
                        datos.producto.map((dato, index) => {
                            return (
                                <ul>
                                    <h1>{dato.nombre}</h1>
                                    <h3>Sku: {dato.sku}</h3>
                                    <h2>Detalles del Producto</h2>
                                    <li>Material: {dato.material}</li>
                                    <li>Medidas: {dato.medidas}</li>
                                    <li>Peso: {dato.peso_producto}</li>
                                    <li>Color: {dato.color_diseno_panton}</li>
                                    <h2>Detalles del Packing</h2>
                                    <li>Packing: {dato.packing_venta}</li>
                                    <li>Medidas: {dato.medidas_ctn}</li>
                                    <li>Peso: {dato.peso_ctn}</li>
                                </ul>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}

export default Producto
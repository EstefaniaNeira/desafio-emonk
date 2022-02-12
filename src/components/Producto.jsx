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
        <div className='container-fluid'>
            <div className="row">
                <div className='col-md-6'>
                    <img className='img-fluid shadow-lg rounded-3 mx-auto d-block m-5 ' src="http://54.203.82.32:3000/api/productos/img/pd2-3-000002-001.jpg" alt="" />
                </div>
                <div className='col-md-6 mt-3'>
                    <ul>
                        {!datos ? 'Cargando...' :
                            datos.producto.map((dato, index) => {
                                return (
                                    <ul>
                                        <h2 className='border-bottom'>{dato.nombre}</h2>
                                        <p className='text-muted font-weight-light'>Sku: {dato.sku}</p>
                                        <p>{dato.descripcion}</p>
                                        <h4 className='mt-2 mb-2'>Detalles del Producto</h4>
                                        <li >Material: {dato.material}</li>
                                        <li>Medidas: {dato.medidas}</li>
                                        <li>Peso: {dato.peso_producto}</li>
                                        <li>Color: {dato.color_diseno_panton}</li>
                                        <h4 className='mt-2 mb-2'>Detalles del Packing</h4>
                                        <li>Packing: {dato.packing_venta}</li>
                                        <li>Medidas: {dato.medidas_ctn}</li>
                                        <li>Peso: {dato.peso_ctn}</li>
                                        <h4 className='mt-2 mb-2'>Formato</h4>
                                        <li>{dato.formato}</li>
                                    </ul>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Producto
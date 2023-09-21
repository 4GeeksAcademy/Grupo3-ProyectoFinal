import React from 'react'
import "../../styles/nosotros.css";
import Navbar from "../component/navbar";

const Nosotros = () => {
    return (
        <>
            <Navbar />
            <div className="landing-page container d-flex my-5 ">
                <div className="first-block d-inline-flex">
                    <div className="text-main-box d-block-flex">
                        <h1 className="title-nosotros d-flex">Acerca de FreeLancify</h1>
                        <h5 className="text-nosotros d-flex">FreeLanciy es una plataforma diseñada para freelancers que desean llevar un control eficiente de sus proyectos y maximizar su éxito profesional. Nuestra misión es empoderar a los freelancers, brindándoles las herramientas necesarias para gestionar sus proyectos de manera efectiva. Los usuarios pueden crear, editar y eliminar proyectos fácilmente, lo que les permite mantener un registro claro de sus tareas y plazos. Además, FreeLanciy permite a los freelancers generar cotizaciones precisas para sus clientes y llevar un seguimiento detallado del tiempo invertido en cada proyecto. También pueden administrar información sobre sus clientes de manera eficiente, lo que facilita la comunicación y la construcción de relaciones profesionales sólidas.</h5>
                        <h5 className="text-nosotros d-flex my-4">En FreeLanciy, creemos que al proporcionar estas herramientas, estamos contribuyendo al éxito de los freelancers en todo el mundo. Queremos que cada freelancer tenga igualdad de oportunidades para alcanzar sus metas y sueños en el mundo laboral independiente. Únete a nosotros y descubre cómo FreeLanciy puede ser la llave que abre puertas hacia un futuro profesional más brillante y organizado.</h5>
                    </div>
                    <div className="image-side d-flex">
                        <img className="img-nosotros d-flex" src="https://www.osmoscloud.com/blog/wp-content/uploads/2020/03/freelance.jpg" alt="Imagen de Freelancer" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Nosotros
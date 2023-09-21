import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../component/background";
import QuotationCard from "../component/QuotationCard";
import { Context } from "../store/appContext";
import Freelancer from "../../img/Freelancer.png";
import "../../styles/listQuotation.css";

export const ListQuotations = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        console.log(actions)
        actions.getQuotations();
    }, []);

    return (
        <>
            <Background>
                <div className="cards position-absolute top-0 start-50 translate-middle-x">
                    <div>
                    <p className="fs-1 mb-0 ms-1 pt-0 pt-md-2 pt-lg-3">Cotizaciones</p>
                    </div>
                    <div className="d-flex justify-content-end">
                    <Link to="/quotation/create">
                    <button type="button" className="btn btn-custom btn-sm mb-2 mb-md-3 me-2">Agregar</button>
                    </Link>
                    </div>
                    <div className="d-sm-flex d-lg-flex d-md-flex">
                    <div className="row row-cols-auto g-4 d-flex justify-content-center scrollable-div">
                        {
                            store.quotations && store.quotations.map((quotation,index)=>{
                                return (
                                    <QuotationCard key={index} name={quotation.project_proposal_name} date={quotation.date} leadName={quotation.lead_name} quotationId={quotation.id} total={quotation.total}></QuotationCard>
                                )
                            })
                        }

                    </div>
                    <div>
                        <img className="freelancer" src={Freelancer}></img>
                    </div>
                    </div>
                    
                </div>
            </Background >
        </>
    );


}

export default ListQuotations;
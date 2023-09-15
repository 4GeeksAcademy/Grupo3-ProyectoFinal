import React, { useState, useEffect } from 'react'

const QuotationCard = (props) => {
    
function formatDateToDDMMYYYY(originalString) {

  const dateObject = new Date(originalString);

  const day = String(dateObject.getUTCDate()).padStart(2, '0');
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados
  const year = dateObject.getUTCFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

let stringDate = props.date;
let date = formatDateToDDMMYYYY(stringDate);

    return (
        <>
            <div className="col w-auto">
                <div className="card rounded-4 shadow">
                    <div className="card-body">
                        <h5 className="card-title text-center quotation-list-title">{props.name}</h5>
                        <div className='quotation-row'>
                        <p className="card-text quotation-card-body">{date}</p>
                        </div>
                        <div className='quotation-row'>
                        <p className="card-text quotation-card-body">{props.leadName}</p>
                        </div>
                        <div className='quotation-row'>
                        <p className="card-text quotation-card-body">{props.total}</p>
                        </div>
                        <div className="d-flex justify-content-evenly">
                            <a type="button" className="btn btn-custom btn-sm text-center me-1">Eliminar</a>
                            <a type="button" className="btn btn-custom btn-sm text-center">Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuotationCard
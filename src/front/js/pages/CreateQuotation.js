import React, { useContext, useState,useEffect } from "react";
import { Context } from "../store/appContext";
import { Background } from "../component/background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import QuotationInputs from "../component/QuotationInputs";
import { IVA } from '/workspaces/Grupo3-ProyectoFinal/src/front/js/config.js';
import { Link } from "react-router-dom";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CreateQuotation = () => {
  const [lead, setLeadName] = useState("");
  const [project, setProjectName] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [ivaAmount, setIvaAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const {  actions } = useContext(Context);
  const [showAlert, setShowAlert] = useState(false);


  let pricePerHour = 30;

  function addNewBlankInputs() {
    let newTaskObject = {
      name: '',
      time: 0,
      task_price: 0
    }
    setTasksArray([...tasksArray, newTaskObject]);

  }

  //Acá agregamos el nuevo objeto al arreglo de objetos
  const handleInputChange = (index, updatedTask) => {
    const newTaskArray = [...tasksArray];
    newTaskArray[index] = {
      ...newTaskArray[index], // Acá conservamos las propiedades anteriores
      ...updatedTask
    };

    setTasksArray(newTaskArray);

    let subtotalTemp = 0;
    let intPrice = 0;

    tasksArray.forEach((taskGroup) => {
      intPrice = Number(taskGroup.task_price);
      subtotalTemp += intPrice;
    })

    let subtotalResult = 0; 
    subtotalResult = Math.round((subtotalTemp + Number(updatedTask.task_price)) * 100) / 100;

    setSubtotal(subtotalResult);
    let iva = Math.round((subtotalResult * IVA) * 100) / 100;
    setIvaAmount(iva);

    let totalResult = Math.round((subtotalResult + iva) * 100) / 100;
    let totalString = totalResult.toString();
    setTotal(totalString);
  };

  useEffect(() => {
    let timer;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);  
    }
    return () => {
      clearTimeout(timer);  
    };
  }, [showAlert]); 

  const saveQuotation = () => {
    actions.postQuotationData(tasksArray,lead,project,total,() => setShowAlert(true));

  }

  return (
    <Background>

      <div className='d-sm-flex-column d-lg-flex-column d-md-flex-column'>
        <div className='d-sm-flex d-lg-flex d-md-flex workspace-title justify-content-center'>
          <h2 className="title" style={{ fontWeight: '800' }}>Cotización</h2>
        </div>

        <div className="header-inputs-container">
        <div className="d-sm-flex d-lg-flex d-md-flex justify-content-around" style={{marginBottom: '2%', marginTop: '9%'}}>
        <div className="back-icon">
                    <Link to="/quotation/list">
                    <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                    </Link>
                    </div>
          <h5 className="header-labels">Cotización para:</h5>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                                          onChange={(e)=>setLeadName(e.target.value)} value={lead} placeholder="Nombre del prospecto"></input>
        </div>
        <div className="d-sm-flex d-lg-flex d-md-flex justify-content-around" style={{marginBottom: '4%'}}>
         
          <h5 className="header-labels">Proyecto:</h5>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                            onChange={(e)=>setProjectName(e.target.value)} value={project} placeholder="Nombre del proyecto"></input>
        </div>
      </div>
      </div>

      <div className="workspace-table d-sm-flex-column d-lg-flex-column d-md-flex-column position-absolute">

        <div className="table-header d-sm-flex d-lg-flex d-md-flex" >
          <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={() => addNewBlankInputs()} />
          <h5 style={{ paddingRight: '21%', paddingLeft: '4%' }}>Tarea a realizar</h5>
          <h5>Horas estimadas</h5>
          <h5 style={{ paddingLeft: '9%' }}>Valor en $</h5>
        </div>

        <div className="body-container">

          {tasksArray.map((taskObject, index) => (
            <QuotationInputs
              key={index}
              hourPrice={pricePerHour}
              initialTask={taskObject}
              onInputChange={(updatedTask) => handleInputChange(index, updatedTask)}
            />
          ))
          }

        </div>

        <div className="d-sm-flex d-lg-flex d-md-flex justify-content-around" style={{ paddingLeft: '19%' }} >

          <div>
            <button type="button" className="btn btn-info app-button" onClick={() => saveQuotation()}>Guardar</button>
            {showAlert && (
            <div className="alert alert-success" role="alert">
               La cotización se ha guardado exitosamente!
             </div>
            )}

          </div>

          <div className="d-sm-flex d-lg-flex d-md-flex flex-column total-card">

            <div className="d-sm-flex d-lg-flex d-md-flex total-inputs">
              <div className="total-label"><label>Subtotal</label></div>
              <div><input placeholder="______" className="no-border" readOnly value={subtotal}></input></div>
            </div>

            <div className="d-sm-flex d-lg-flex d-md-flex total-inputs">
              <div className="total-label"><label>IVA</label></div>
              <div><input placeholder="______" className="no-border" value={ivaAmount} readOnly></input></div>
            </div>

            <div className="d-sm-flex d-lg-flex d-md-flex total-inputs">
              <div className="total-label"><label>Total</label></div>
              <div><input placeholder="______" className="no-border" value={total} readOnly></input></div>
            </div>

          </div>
        </div>

      </div>
    </Background>
  )
}

export default CreateQuotation
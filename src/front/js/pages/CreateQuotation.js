import React, { useContext, useState } from "react";
import {Context} from "../store/appContext";
import { Background } from "../component/background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import QuotationInputs from "../component/QuotationInputs";
import { text } from "@fortawesome/fontawesome-svg-core";
import {IVA} from '/workspaces/Grupo3-ProyectoFinal/src/front/js/config.js';

const CreateQuotation = () => {
  //  const {store, actions} = useContext(Context);
  const [tasksArray, setTasksArray] = useState([]);
  const [subtotal, setSubtotal] = useState("");
  const [ivaAmount, setIvaAmount] = useState("");
  const [total, setTotal] = useState("");
  const { store, actions } = useContext(Context);

  let pricePerHour = 30;
  let client_id = 1;
  function addNewBlankInputs() {
    let newTaskObject = {
      task_name: '',
      estimated_time: '',
      task_price: '',
      client_id: client_id
    }
    setTasksArray([...tasksArray, newTaskObject]);
   
  }

  //Agregamos el nuevo objeto al arreglo de objetos
  const handleInputChange = (index, updatedTask) => {
    const newTaskArray = [...tasksArray];
    newTaskArray[index] = {
      ...newTaskArray[index], // conserva las propiedades existentes
      ...updatedTask
    };

    setTasksArray(newTaskArray);

    let subtotalTemp = 0;
    let intPrice = 0;

    tasksArray.forEach((taskGroup)=>{
    intPrice = Number(taskGroup.task_price);
    subtotalTemp += intPrice;
    })
    
    let subtotalResult = Math.round((subtotalTemp + Number(updatedTask.task_price)) * 100) / 100;
    
    setSubtotal(subtotalResult);
    let iva = Math.round((subtotalResult * IVA) * 100) / 100;
    setIvaAmount(iva);

    let totalResult = Math.round((subtotalResult + iva) * 100) / 100;
    setTotal(totalResult);
  };

  const saveQuotation = () =>{
    actions.postQuotationData(tasksArray);
  }

  return (
    <Background>
      <div className="workspace-table d-sm-flex-column d-lg-flex-column d-md-flex-column">
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
            <button type="button" className="btn btn-info app-button" onClick={()=> saveQuotation()}>Guardar</button>
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
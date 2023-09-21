import React,{useState, useEffect} from 'react'
import "../../styles/quotationInputs.css";
const QuotationInputs = (props) => {
  const [taskName,setTaskName] = useState("");
  const [hours,setHours] = useState(0);
  const [price,setPrice] = useState(0);

  const onInputChange = props.onInputChange;
  useEffect(() => {
    if (onInputChange) {
      onInputChange({ name: taskName, time: hours, task_price: price});
    }
  }, [taskName, hours]);

  const handleChange = (e) => {
    let newHours = 0;
    newHours = e.target.value;
    setHours(newHours)
    console.log(hours);
    let result = 0;
    result = props.hourPrice * newHours; 
    setPrice(result);

  }

  return (
    <div className='inputs-in-line d-sm-flex d-md-flex d-lg-flex justify-content-around'>
      <div>
        <input type='text' className='no-border task-input' placeholder='Tarea a realizar' value={taskName} 
                                                      onChange={(e) => setTaskName(e.target.value)}></input>
      </div>
      <div>
        <input type='number' className='no-border small-inputs' style={{marginLeft:'32%'}} placeholder='Horas'
                                                                 value={hours} onChange={handleChange}></input>

        <input type='number' className='no-border small-inputs' value={price} style={{marginLeft:'22%'}}
                                                                   placeholder='______' readOnly></input>
      </div>
    </div>
  )
}

export default QuotationInputs
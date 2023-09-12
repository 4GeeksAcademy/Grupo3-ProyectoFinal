import React,{useState, useEffect} from 'react'

const QuotationInputs = (props) => {
  const [taskName,setTaskName] = useState("");
  const [hours,setHours] = useState("");
  const [price,setPrice] = useState("");

  const onInputChange = props.onInputChange;
  useEffect(() => {
    if (onInputChange) {
      onInputChange({ task_name: taskName,  estimated_time: hours, task_price: price});
    }
  }, [taskName, hours]);

  const handleChange = (e) => {
    let newHours = e.target.value;
    setHours(newHours)
    let result = props.hourPrice * newHours; 
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
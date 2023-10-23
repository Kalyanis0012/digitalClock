import React, { useEffect, useState } from 'react'
import './Login.css'

const Login = () => {
    const initialValues={FirstName:"",LastName:"",Age:""};
    const[formValues,setFormValues]= useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0){
           
        }
    },[formErrors]);

    const validate=(values)=>{
        const errors={};
        
        if(!values.FirstName){
            errors.FirstName="field is required";
        }
        if(!values.LastName){
            errors.LastName="field is required";
        }
        if(!values.Age){
            errors.Age="field is required";
         } else if(values.Age<18){
                errors.Age = "Age should be above 18";
            } 
            return errors;
            
         }
          
    
   
  return (
    <>
      <div className='container'>
        {Object.keys(formErrors).length===0 && isSubmit ?
        (<div style={{color:"white",fontSize:"30px"}}>Form Submitted successfully </div>):
        (<pre>{JSON.stringify(formValues,undefined )}</pre>)}

        <form onSubmit={handleSubmit}>
            <h1>Voting Form </h1>
            <div className=' divider'></div>
            <div className='form'>
            <div className='field'>
                <label>First name</label>
                <input type="text" name='FirstName' placeholder='First Name' value={formValues.FirstName} onChange={handleChange} />
            </div>
            <p>{formErrors.FirstName}</p>
            <div className='field'>
                <label>Last Name</label>
                <input type="text" name='LastName' placeholder='Last Name' value={formValues.LastName} onChange={handleChange} />
            </div>
            <p>{formErrors.LastName}</p>
            <div className='field'>
                <label>Age</label>
                <input type="text" name='Age' placeholder='Age' value={formValues.Age} onChange={handleChange} />

            </div>
            <p>{formErrors.Age}</p>
            <button className=" blue button">Submit</button>
            </div>
      </form>
     </div>
     <pre>{JSON.stringify(formValues,undefined )}</pre>
    </>
  )
}

export default Login

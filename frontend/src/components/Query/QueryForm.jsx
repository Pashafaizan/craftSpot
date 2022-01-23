
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import emailjs from '@emailjs/browser'
// import Alert from '../Alert/Alert'
import "./QueryForm.css";
import { useState } from "react";
import { fetchData } from "../../middleware/requestHandler";


export default function QueryForm() {

    const [form,setForm] = useState({to_name:'CraftSpot',from_email:'',email:'',phone_number:'',message:'',product_name:'General',product_link:'N/A'});
    const [snackBar,setSnackBar] = useState({open:false,message:'',severity:'success'})

    const handleClose = () =>{
        setSnackBar({open:false,message:'',severity:''})
    }

    const handleSubmit = async e=>{
        e.preventDefault();
        if(form.email.trim() == '' || form.from_name.trim() == '' || form.phone_number.trim() == '' || form.message.trim() == '') {
            setSnackBar({open:true,message:'Please complete all the fields',severity:'warning'})
            return;
        }
    const res = await fetchData('/mail',{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        
    })
    console.log(res);
  
         setForm({to_name:'CraftSpot',from_email:'',email:'',phone_number:'',message:'',product_name:'General',product_link:'N/A'});
    }
  return <>
    
    <div style={{textAlign:'center',background:"whitesmoke",padding:"20px 30px"}}>
        <h1>Quick Enquiry</h1>
        <div className="quick-enquiry-form">
            <MDBInput label='Name' id='typeName' type='text' value={form.from_name} onChange={(e)=>setForm({...form,from_name:e.target.value})}/>
            <MDBInput label='Email' id='typeEmail' type='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <MDBInput label='Phone Number' id='typePhone' type='text' value={form.phone_number} onChange={(e)=>setForm({...form,phone_number:e.target.value})}/>
            <MDBInput label='Leave a message for us' id='typeMessage' textarea rows={4} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}/>
            <MDBBtn onClick={handleSubmit}  id='typeSubmit'>Send</MDBBtn>
            {/* <Alert {...snackBar} onClose={handleClose}/> */}
        </div>
    </div>
    
  </>;
}
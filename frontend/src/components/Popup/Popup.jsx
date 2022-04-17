import * as React from "react";
// import React, { useRef } from 'react';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import emailjs from '@emailjs/browser'

export default function Popup(props) {
 
 
   const [open,setOpen]=React.useState(props.open);
  const [form,setForm] = React.useState({to_name:'Craft Spot',from_email:'',phone_number:'',message:'',product_name:`${props.data.item_name}`});
   


  const [query, setQuery] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
     setOpen(false);
    props.setOpen(false);
  };
  const sendQuery =async()=>{
   
  //   if(form.from_email.trim() == '' || form.from_name.trim() == '' || form.phone_number.trim() == '' || form.message.trim() == ''|| form.product_name.trim() == '') {
  //     // setSnackBar({open:true,message:'Please complete all the fields',severity:'warning'})
  //     return;
  // }
  const result = await emailjs.send('service_leidpu2','template_h182xeq',form,'user_VWrjijknuIHuAqgNg6Sma')
 
  setForm({to_name:'CraftSpot',from_email:'',phone_number:'',message:'',product_name:''});
  setOpen(false);
  props.setOpen(false);
}
  

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Query About Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To purchase this product, please enter your email address here and
            send query. We will send updates occasionally.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={form.from_email}
            onChange={(e)=>setForm({...form,from_email:e.target.value})}
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mobile Number"
            type="text"
            value={form.phone_number}
            onChange={(e)=>setForm({...form,phone_number:e.target.value})}
            fullWidth
            variant="standard"
          />



          <TextField
            autoFocus
            margin="dense"
            id="name"
            multiline
            label="Query"
            maxRows={4}
            type="email"
            rows={3}
            value={form.message}
            onChange={(e)=>setForm({...form,message:e.target.value})}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendQuery}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

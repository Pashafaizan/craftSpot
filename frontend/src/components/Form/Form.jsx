import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import MultilineTextFields from './MultilineTextFields'
import './form.css'
import { fetchData } from "../../middleware/requestHandler";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display:"flex",
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center"
    },
  },
}));

function Form() {

  const [item_name, setName] = useState("");
  const [item_price, setPrice] = useState();
  const [item_description, setDescription] = useState("");
  const [place_of_origin, setPlaceOfOrigin] = useState("");
  const [material, setItemMaterial] = useState("");
  const [item_color, setItemColor] = useState("");
  const [item_type, setItemType] = useState("");
  const [item_weight, setItemWeight] = useState("");
  const [item_shape, setItemShape] = useState("");
 
 const [show_type,setType]=useState('')
  
  const [imageName, setImageName] = useState([]);
  
  const clearForm = ()=>{
    console.log("This is clear form");
    setName("");
    setPrice("");
    setDescription("");
    setPlaceOfOrigin("");
    setItemMaterial("");
    setItemColor("");
    setItemType('');
    setItemWeight("");
    setItemShape("");
    setType("");
    setImageName("");
    
  }

  const classes = useStyles();
  let payload = {

    item_name,
    item_price,
  
    item_description,
 
    
    place_of_origin,
    material,
    item_color,
    item_type,
 
    
    item_weight,
    item_shape,
    
   
    show_type,
  };
  const validateData = (payload) => {
    let result = {
      message: "",
      status: true,
    };
    if (payload.name === "") {
      result.message = "Please enter name";
      result.status = false;
    }
    if (payload.price === "") {
      result.message = "Please enter price";
      result.status = false;
    }
    if (payload.description === "") {
      result.message = "Please enter description";
      result.status = false;
    }

    return result;
  };

  const [storeImage, setImage] = useState([]);
  const fileSelectedHandler = (e) => {
    console.log(e.target);
    let Images = e.target.file;
    setImage(e.target.file);

  };
  let file = "";
  const handleInputSelect = (event) => {
    console.log(event)
    console.log(event.target.files)
    Object.entries(event.target.files).map((e) => {
      console.log(e[1]);
      sendData(e[1]);
    });

  };

  const sendData = async (file) => {
    var formData = new FormData();
    formData.append("fileUploaded", file);
    console.log(formData);

    let requestOptions = {
      method: "POST",
      body: formData,
    };

    fetchData("/upload", requestOptions).then((data) => {
      setImageName((e)=>[...e,data.filename])
       
      console.log(data);
      console.log(imageName);

    });
  };


  const submitForm = ()=>{
    
    payload = {
      ...payload,
      images:imageName
    }
    fetchData("/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((data) => {

      console.log("this is")
    
    });
    clearForm();
  }




  return (
    <>
      <div className="container" >
        <Container className="form_container" maxWidth="lg">
          <h1 style={{textAlign:"center",marginTop:2 }}>Fill Form Details</h1>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
         
            method="post"
            encType="multipart/form-data"
          >
            <TextField
              id="outlined-secondary"
              label="Name of Items"
              variant="outlined"
              color="primary"
              style={{ width: "60%" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Price of Items"
              variant="outlined"
              color="primary"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <TextField
              id="outlined-secondary"
              label="Description of Model"
              variant="outlined"
              color="primary"
             
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          
            <TextField
              id="outlined-secondary"
              label="Place Of origin"
              variant="outlined"
              color="primary"
             
              onChange={(e) => {
                setPlaceOfOrigin(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Material"
              variant="outlined"
              color="primary"
          
              onChange={(e) => {
                setItemMaterial(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Item Color"
              variant="outlined"
              color="primary"
             
              onChange={(e) => {
                setItemColor(e.target.value);
              }}
            />
             {/* <MultilineTextFields setType = {(type)=>{
               setItemType(type);

           }} /> */}

            <TextField
              id="outlined-secondary"
              label="Item Type(Mugs,Mirror...)"
              variant="outlined"
              color="primary"
               
              onChange={(e) => {
                setItemType(e.target.value);
              }}
            />

            {/* <TextField
              id="outlined-secondary"
              label="show type (like top categries, new arrivals.....)"
              variant="outlined"
              color="primary"
              
              onChange={(e) => {
                setType(e.target.value);
              }}
            /> */}
           <MultilineTextFields setType = {(type)=>{
           setType(type);

           }} />
           
          

            <TextField
              id="outlined-secondary"
              label="tem Weight"
              variant="outlined"
              color="primary"
               
              onChange={(e) => {
                setItemWeight(e.target.value);
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Item Shape"
              variant="outlined"
              color="primary"
            
              onChange={(e) => {
                setItemShape(e.target.value);
              }}
            />
         

          

            <input type="file" multiple onChange={handleInputSelect} />
           

            <Button
              variant="contained"
              color="primary"
              onClick={submitForm}
              value="submit"
            >
              Submit
            </Button>
            {/* </div>  */}
          </form>
        </Container>
      </div>

    </>
  );
}

export default Form;

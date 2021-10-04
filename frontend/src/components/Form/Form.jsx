import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import MultilineTextFields from "./MultilineTextFields";
import "./form.css";
import { fetchData } from "../../middleware/requestHandler";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
    },
  },
}));

function Form() {
  const [item_name, setName] = useState("1");
  const [item_price, setPrice] = useState(1);
  const [item_description, setDescription] = useState("1");
  const [place_of_origin, setPlaceOfOrigin] = useState("1");
  const [material, setItemMaterial] = useState("1");
  const [item_color, setItemColor] = useState("1");
  const [item_type, setItemType] = useState("1");
  const [item_weight, setItemWeight] = useState("1");
  const [item_shape, setItemShape] = useState("1");
  const inputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState([]);
  const [files,setFiles] = useState([]);

  const [show_type, setType] = useState("1");

  const [imageName, setImageName] = useState([]);

  const clearForm = () => {
    console.log("This is clear form");
    setName("");
    setPrice("");
    setDescription("");
    setPlaceOfOrigin("");
    setItemMaterial("");
    setItemColor("");
    setItemType("");
    setItemWeight("");
    setItemShape("");
    setType("");
    setImageName([]);
    setPreviewImage([])
    inputRef.current.value = "";
  };

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

  const handleInputSelect = (e) => {
    setPreviewImage([]);
    if (e.target.files.length > 4) {
      alert("Maximum 4 images are allowed.");
      inputRef.current.value = "";
      return;
    }
    console.log(e.target.files[0]);
    Object.entries(e.target.files).map((file) => {
      setFiles((f) => [...f,file[1]]);
      var oFReader = new FileReader();
      oFReader.readAsDataURL(file[1]);
      oFReader.onload = (OFEvent) => {
        setPreviewImage((previewImage) => [
          ...previewImage,
          OFEvent.target.result,
        ]);
      };
    });
  };

  const sendData =  (file) => {
    return new Promise((resolve,reject)=>{
      var formData = new FormData();
      formData.append("fileUploaded", file);
  
      let requestOptions = {
        method: "POST",
        body: formData,
      };
  
      fetchData("/upload", requestOptions).then((data) => {
        setImageName((e) => {console.log(e,"MOHAMMAD"); e.push(data.filename); return e;});
        console.log(imageName)
        resolve();
      }).catch(()=>{
        reject();
      });
    })
  };

  const submitForm = () => {

    files.forEach((v,i)=>{
      sendData(v).then(d=>{
        if(i == files.length - 1) {
          payload = {
            ...payload,
            images: imageName,
          };
          fetchData("/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }).then((data) => {
            console.log("this is");
          });
          clearForm();
        }
      })
    })

    
  };

  return (
    <>
      <Container
        className="form_container"
        maxWidth="lg"
        style={{ margin: "auto", width: "44%", zIndex: 100 }}
      >
        <h3 style={{ textAlign: "center", marginTop: 2, letterSpacing: 2 }}>
          Product Details
        </h3>
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
            value={item_name}
            color="primary"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="outlined-secondary"
            label="Price of Items"
            variant="outlined"
            color="primary"
            value={item_price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <TextField
            id="outlined-secondary"
            label="Description of Model"
            variant="outlined"
            color="primary"
            value={item_description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <TextField
            id="outlined-secondary"
            label="Place Of origin"
            value={place_of_origin}
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
            value={material}
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
            value={item_color}
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
            value={item_type}
            onChange={(e) => {
              setItemType(e.target.value);
            }}
          />
          <TextField
            id="outlined-secondary"
            label="show type (like top categries, new arrivals.....)"
            variant="outlined"
            color="primary"
            value={show_type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <MultilineTextFields
            setType={(type) => {
              setType(type);
            }}
          />

          <TextField
            id="outlined-secondary"
            label="tem Weight"
            variant="outlined"
            color="primary"
            value={item_weight}
            onChange={(e) => {
              setItemWeight(e.target.value);
            }}
          />
          <TextField
            id="outlined-secondary"
            label="Item Shape"
            variant="outlined"
            value={item_shape}
            color="primary"
            onChange={(e) => {
              setItemShape(e.target.value);
            }}
          />

          <input
            type="file"
            ref={inputRef}
            multiple
            accept="image/png, image/jpeg"
            onChange={handleInputSelect}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {previewImage.map((v) => {
              return <img style={{ width: 200, margin: 10 }} src={v}></img>;
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{ width: 200 }}
              variant="contained"
              color="primary"
              onClick={submitForm}
              value="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Form;

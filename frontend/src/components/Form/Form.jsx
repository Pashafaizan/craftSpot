import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import MultilineTextFields from "./MultilineTextFields";
import "./form.css";
import axios from "axios";
import { fetchData } from "../../middleware/requestHandler";
import ImageUploading from 'react-images-uploading';
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
  const [item_name, setName] = useState("");
  const [images,setImages] = React.useState([]);
  const [item_price, setPrice] = useState();
  const [item_description, setDescription] = useState("");
  const [place_of_origin, setPlaceOfOrigin] = useState("");
  const [material, setItemMaterial] = useState("");
  const [item_color, setItemColor] = useState("");
  const [item_type, setItemType] = useState("");
  const [item_weight, setItemWeight] = useState("");
  const [item_shape, setItemShape] = useState("");
  const inputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState([]);
  const [files,setFiles] = useState([]);

  const [show_type, setType] = useState("BAR PRODUCTS & ACCESSORIES");

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
    setType("BAR PRODUCTS & ACCESSORIES");
    setImageName([]);
    setFiles([])
    setPreviewImage([])
    setImages([]);
    // inputRef.current.value = "";
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

  const submitForm = async () => {

    // files.forEach((v,i)=>{
    //   sendData(v).then(d=>{
    //     if(i == files.length - 1) {
    //       payload = {
    //         ...payload,
    //         images: imageName,
    //       };
    //       fetchData("/form", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(payload),
    //       }).then((data) => {
    //         console.log("this is");
    //       });
    //       clearForm();
    //     }
    //   })
    // })

    var data = new FormData();
    images.forEach(v=>data.append("photos",v.file))
    const response = await axios.post(process.env.REACT_APP_API_KEY + '/api/v1/uploadProductImage',data);
    console.log(response)
    payload = {
      ...payload,
      images:response.data.images
    }
    const res = await fetchData("/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    console.log(res);
    if(res.success) {
      clearForm();
    }
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

          {/* <TextField
            id="outlined-secondary"
            label="Item Type(Mugs,Mirror...)"
            variant="outlined"
            color="primary"
            value={item_type}
            onChange={(e) => {
              setItemType(e.target.value);
            }}
          /> */}
          {/* <TextField
            id="outlined-secondary"
            label="show type (like top categries, new arrivals.....)"
            variant="outlined"
            color="primary"
            value={show_type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          /> */}
          <MultilineTextFields
            setType={(type) => {
              setType(type);
            }}
          />

          <TextField
            id="outlined-secondary"
            label="Item Weight"
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

          {/* <input
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
          </div> */}

<ImageUploading
        multiple
        value={images}
        onChange={(imageList, addUpdateIndex) => {
          // data for submit
          console.log(imageList, addUpdateIndex);
          setImages(imageList);
        }}
        maxNumber={4}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper" style={{border:"1px dashed black"}}>
            { imageList.length == 0 &&  <div
              style={isDragging ? { backgroundColor:"whitesmoke",textAlign:'center',cursor:"pointer",padding:"20px" } : {textAlign:'center',cursor:"pointer",padding:"20px"}}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or drop here
            </div>}
            {imageList.map((image, index) => (
              <div key={index} className="image-item" style={{textAlign:'center'}}>
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

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

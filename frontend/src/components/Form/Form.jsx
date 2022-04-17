import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import MultilineTextFields from "./MultilineTextFields";
import "./form.css";
import axios from "axios";
import { fetchData } from "../../middleware/requestHandler";
import ImageUploading from "react-images-uploading";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
  const [images, setImages] = React.useState([]);

  const [item_description, setDescription] = useState("");
 
  const [material, setItemMaterial] = useState("");
  const [item_color, setItemColor] = useState("");
 
  const [item_weight, setItemWeight] = useState({ weight: "", unit: "" });
  const [item_shape, setItemShape] = useState("");
  const inputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState([]);
  const [files, setFiles] = useState([]);
  const [requestProcessed, setRequestProcessed] = useState(true);
  const [categories, setCategories] = useState("Home Accessories");
  const [item_dimensions, setDimensions] = useState({
    length: "",
    breadth: "",
    height: "",
    unit: "",
  });
  const [imageName, setImageName] = useState([]);

  const clearForm = () => {
   
    setName("");
    setDescription("");
    setItemMaterial("");
    setItemColor("");
    setItemWeight({});
    setItemShape("");
    setCategories("Home Accessories");
    setImageName([]);
    setFiles([]);
    setPreviewImage([]);
    setImages([]);
    setDimensions({});
  
  };

  const classes = useStyles();
  let payload = {
    item_name,
     item_description,
     material,
    item_color,
    item_weight,
    item_shape,
    item_dimensions,
    categories,
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
    if(item_dimensions.unit==""){
      result.message = "Please enter item";
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

    Object.entries(e.target.files).map((file) => {
      setFiles((f) => [...f, file[1]]);
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

  const sendData = (file) => {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      formData.append("fileUploaded", file);

      let requestOptions = {
        method: "POST",
        body: formData,
      };

      fetchData("/upload", requestOptions)
        .then((data) => {
          setImageName((e) => {
            e.push(data.filename);
            return e;
          });
        
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  };

  const submitForm = async () => {
    
   
    setRequestProcessed(false);

    var data = new FormData();
    images.forEach((v) => data.append("photos", v.file));
    const response = await axios.post(
      process.env.REACT_APP_API_KEY + "/api/v1/uploadProductImage",
      data
    );

    payload = {
      ...payload,
      images: response.data.images,
    };
    const res = await fetchData("/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
   
    setRequestProcessed(true);
    if (res.success) {
      clearForm();
    }
  };

  return (
    <>
      <Container className="form_container" maxWidth="lg">
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
            label="Name"
            variant="outlined"
            value={item_name}
            color="primary"
            onChange={(e) => {
              setName(e.target.value);
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
            label="Color"
            variant="outlined"
            color="primary"
            value={item_color}
            onChange={(e) => {
              setItemColor(e.target.value);
            }}
          />

          <MultilineTextFields
            setType={(type) => {
              setCategories(type);
            }}
          />

          <TextField
            id="outlined-secondary"
            label="Shape"
            variant="outlined"
            value={item_shape}
            color="primary"
            onChange={(e) => {
              setItemShape(e.target.value);
            }}
          />
        
          <TextField
            id="outlined-secondary"
            label="Description"
            variant="outlined"
            color="primary"
            value={item_description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div
            style={{
              display: "flex",
              width: "99%",
              justifyContent: "space-between",
            }}
          >
            <TextField
              style={{ width: "89%" }}
              id="outlined-secondary"
              label="Weight"
              variant="outlined"
              color="primary"
              value={item_weight.weight}
              onChange={(e) => {
                setItemWeight({ ...item_weight, weight: e.target.value });
              }}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item_weight.unit}
                  label="Unit"
                  onChange={(e) => {
                    setItemWeight({ ...item_weight, unit: e.target.value });
                  }}
                >
                  <MenuItem value="mg">mg</MenuItem>
                  <MenuItem value="gg">gm</MenuItem>
                  <MenuItem value="kg">kg</MenuItem>
                  <MenuItem value="liter">liter</MenuItem>
                  <MenuItem value="ml">ml</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              width: "99%",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="outlined-secondary"
              label="Length"
              variant="outlined"
              color="primary"
              value={item_dimensions.length}
              onChange={(e) => {
                setDimensions({ ...item_dimensions, length: e.target.value });
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Breadth"
              variant="outlined"
              color="primary"
              value={item_dimensions.breadth}
              onChange={(e) => {
                setDimensions({ ...item_dimensions, breadth: e.target.value });
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Height"
              variant="outlined"
              color="primary"
              value={item_dimensions.height}
              onChange={(e) => {
                setDimensions({ ...item_dimensions, height: e.target.value });
              }}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item_dimensions.unit}
                  label="Unit"
                  onChange={(e) => {
                    setDimensions({ ...item_dimensions, unit: e.target.value });
                  }}
                >
                  <MenuItem value="mm">mm</MenuItem>
                  <MenuItem value="cm">cm</MenuItem>
                  <MenuItem value="m">m</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <ImageUploading
            multiple
            value={images}
            onChange={(imageList, addUpdateIndex) => {
              // data for submit
             
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
              <div
                className="upload__image-wrapper"
                style={{ border: "1px dashed black" }}
              >
                {imageList.length == 0 && (
                  <div
                    style={
                      isDragging
                        ? {
                            backgroundColor: "whitesmoke",
                            textAlign: "center",
                            cursor: "pointer",
                            padding: "20px",
                          }
                        : {
                            textAlign: "center",
                            cursor: "pointer",
                            padding: "20px",
                          }
                    }
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or drop here
                  </div>
                )}
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="image-item"
                    style={{ textAlign: "center" }}
                  >
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <Button onClick={() => onImageRemove(index)}>
                        Remove
                      </Button>
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
              disabled={!requestProcessed}
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

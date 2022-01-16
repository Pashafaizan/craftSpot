import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../middleware/requestHandler";
import Heading from "../Heading/Heading";
import "./Search.css"

export default function Search() {

  const params = useParams();

  const [state,setState] = useState({products:[]})

  useEffect(async()=>{
    const data = await fetchData('/list',{
      method:'GET'
    })
    setState({...state,products:data.filter((v)=>v.item_name.toLowerCase().indexOf(params.query.toLowerCase()) != -1)});
  },[])

  return <>
    <div style={{padding:"20px 10px",textAlign:'center'}}>
           <Heading text='Search Result' />
           <div className="is-divider" style={{margin:'auto'}}></div>
           <div className="product_container" >
           {state.products.map((e,k)=>{
                return <>'
                  <div className="product_container_box">
                    
                    <img
                      src={`${process.env.REACT_APP_API_KEY}/api/v1/images/product/${e.images[0]}`}
                    />
                 
                    <div>{e.item_name}</div>
                    <div className="product_name">
                      Rs. {e.item_price}
                    </div>
                    <Link to={`/product/${e._id}`}>
                   
                    <button className="btn_details"><span>Details</span></button>
                    </Link>
                  </div>
                  <div>
      
                  </div>
                </>
            })}
           </div>
           {state.products.length == 0 && <div>No Product Found</div>}
        </div>
  </>
}
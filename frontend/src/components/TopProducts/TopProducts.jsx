import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../middleware/requestHandler";
import Heading from "../Heading/Heading";
import "./TopProducts.css"

export default function TopProducts() {

    const [state,setState] = useState({products:[]});

    useEffect(async ()=>{
        const data = await fetchData('/topProducts',{
            method:'GET'
        })
        console.log('data : ',data)
        setState({...state,products:data})
    },[])

    return <>
        <div className="top-products-container">
            <div style={{padding:'0px 10px'}}>
                <Heading text={'Top Products'} />
            </div>
            <div className="product_container">
            {state.products.map((e,k)=>{
                return <>
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
        </div>
    </>
}
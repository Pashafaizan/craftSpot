import React from 'react'
import "./applicenceslider.css"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import trending1 from '../../resources/icons/trending1.png'
import trending2 from '../../resources/icons/trending2.png'
import trending3 from '../../resources/icons/trending3.png'
import trending4 from '../../resources/icons/trending4.png'
function ApplinceceSlider({topic}) {
    return (
        <div className="main_applicence_contaier">
            <div className="position_right">
            
            <ChevronRightIcon style={{fontSize:"40px",fontWeight:"bold"}}/>
            </div>
            <div className="position_left">
           
            <ChevronLeftIcon style={{fontSize:"40px",fontWeight:"bold"}}/>
            </div>
            <h3 style={{padding:"4px",fontFamily:"PT Sans Caption",fontSize:20,fontWeight:"lighter"}}>{topic}</h3>
               <div className="applicence_contaier">
                   
              
            <div className="applicence_container_box">
            <img src={trending1}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
            <img src={trending2}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
              
                <img src={trending3}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
              
                <img src={trending4}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
               
                <img src={trending4}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
               
                <img src={trending4}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
               
                <img src={trending4}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
            
                <img src={trending4}/>
                <div className="product_name">this is product</div>
            </div>
            <div className="applicence_container_box">
               
               <img src={trending4}/>
               <div className="product_name">this is product</div>
           </div>
           <div className="applicence_container_box">
              
               <img src={trending4}/>
               <div className="product_name">this is product</div>
           </div>
           <div className="applicence_container_box">
           
               <img src={trending4}/>
               <div className="product_name">this is product</div>
           </div>
          
           
          </div>
        </div>
    )
}

export default ApplinceceSlider

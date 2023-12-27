import React from "react";
import Mood_image from './Mood_image';
import  Data  from "./data.json";
class Mood_Songs_Container extends React.Component
{
   render()
   {
    Data=Data.slice(7,10);
    return <div className="images" id="Mood-images" style={{backgroundColor:'#2e2e2e'}}>
        <div className="container-fluid d-flex">
         <div className="row justify-content-around zoom-images">
       {  Data.map((e,index)=>{
       return  <Mood_image Image={e.Image} key={index}/>
       })}
         </div>

        </div>
    
    </div>
   }
}
export default Mood_Songs_Container;
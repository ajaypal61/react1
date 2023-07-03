import React,{useState} from "react";
import "./style.css";



const Tampapp = () => {

    const [city, setCity] = useState("pune");


    return (
        <>
            <div className="main">
                <div>
                    <input type="search" onChange={(event)=>{}}  />
                </div>
                <div>
                    <h2>+</h2>
                    <h1>5.25 cel</h1>
                    <h3>Min: 5.25cel | max: 5.25cel</h3>
                </div>
        </div>
        </>
    )
}



export default Tampapp;
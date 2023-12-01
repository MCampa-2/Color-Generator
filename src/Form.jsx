import { useState } from "react";

function Form({addColor}){
    const [color,setColor] = useState("");

    const handleChange = (e) =>{
        setColor(e.target.value);
        
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor(color);
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} type="color" value={color} style={{width: "40px", height: "40px"}}></input>
            <label htmlFor="text">Enter Color</label>
            <input onChange={handleChange} type="text" value={color} placeholder="#ffff"></input>
            <button className="btn">Submit</button>
        </form>
    )
};

export default Form;
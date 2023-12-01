import SingleColor from "./SingleColor";
import {nanoid } from "nanoid";



function ColorList({colors}){

    return(
      <section className="colors">
        {colors.map((color,index) =>{
           return <SingleColor key={nanoid()} index={index} color={color}/>
        })}
      </section>
    )
};

export default ColorList;
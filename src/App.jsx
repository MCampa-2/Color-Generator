import { useState } from "react";
import ColorList from "./Colorlist";
import Form from "./Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {

  const [colors, setColors] = useState(new Values('#f15025').all(10));
 

  const addColor = (color) =>{
    const newColor = new Values(color).all(10);
    try{
      setColors(newColor);
      toast.success("Cool Color Palette!");
    }catch(error){
      toast.error(error.message);
    }
  }

  return(
    <>
    <ToastContainer position='top-center' />
    <Form colors={colors} addColor={addColor}/>
    <ColorList colors={colors}/>
    </>
  )
};
export default App;

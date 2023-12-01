function SingleColor({color,index}){
   const {hex, weight} = color;
   console.log(hex,weight)
    return(
        <>
        <article className={index > 10 ? "color-light": "color"} style={{backgroundColor: `#${hex}`,height: "200px", width: "200px", padding: "20px"}}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>
        </>
    )
};

export default SingleColor;
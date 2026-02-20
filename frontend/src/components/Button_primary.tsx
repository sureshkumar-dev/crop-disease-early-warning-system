import type { JSX } from "react";
interface buttonprops{
    text:string,
    bgcolor:string,
    textcolor:string,
    bordercolor:string,
    width:string
}
function Button_primary({text,bgcolor,textcolor,bordercolor,width}:buttonprops):JSX.Element{
    return(
        <>

        <button className="btn_primary" style={{cursor:"pointer",borderRadius:"8px", fontSize:"medium", fontWeight:"600", outline:"none",letterSpacing:"0.5px" ,height:"47px",width:width, backgroundColor:bgcolor,color:textcolor,border:`2px solid ${bordercolor}`}}>
            {text}
        </button>
        
        
        </>
    )
}
export default Button_primary
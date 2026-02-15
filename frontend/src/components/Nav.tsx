import { useState, type JSX } from "react";
import navLogo from "@/assets/crop_logo.png";
import Home_logo from "@/assets/home_inactive_logo.png"
import Farm_logo from "@/assets/plant_inactive.png"
import Scan_logo from "@/assets/photo_camera_inactive.png"
import Admin_logo from "@/assets/bar_chart_4_bars_30dp_000000_FILL0_wght400_GRAD0_opsz24.png"
import Lang_logo from "@/assets/language_logo.png"
import "@/styles/Nav.css"


function Nav():JSX.Element{
    const [Lang,setLang] = useState<string>("Tamil")
    function changeLanguage():void{
        if(Lang === "Tamil"){
            setLang("English")
        }
        else
            setLang("Tamil")
    }
    return(
        <>
        <nav>
        <div className="Web_title">
        <img className="Navlogo" src={navLogo} alt="navlogo" />
        <h3 className="Nav_title">FarmGuard</h3>
        </div>
        <div className="Nav_links">
            <ul className="Nav_ul">
                
                <li className="Quick_links"> <img className="Navlinks_logo" src={Home_logo} alt="Home_logo" /> Home</li>
                <li className="Quick_links" > <img className="Navlinks_logo" src={Farm_logo} alt="Farm_logo" /> MyFarm</li>
                <li className="Quick_links" > <img className="Navlinks_logo" src={Scan_logo} alt="Scan_logo" /> Detection</li>
                <li className="Quick_links" > <img className="Navlinks_logo" src={Admin_logo} alt="Admin_logo" /> Admin</li>
                <span style={{paddingLeft:"60px",padding:"6px",borderRadius:"10px",backgroundColor:"#48b837",paddingRight:"10px",color:"white"}}>
                <li onClick={changeLanguage}> <img className="Navlinks_logo" src={Lang_logo} alt="Lang_logo" /> {Lang}</li>
                </span>
            </ul>
        </div>

        </nav>
        </>
    )
}
export default Nav
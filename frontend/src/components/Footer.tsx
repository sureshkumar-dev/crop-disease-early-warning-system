import type { JSX } from "react";
import "@/styles/Footer.css"
import { Langdata } from "@/Locales/language";
import { useContext } from "react";
import { Langcontext } from "@/App";
function Footer(): JSX.Element {
    const Langcntxt = useContext(Langcontext)
    const text = Langdata[Langcntxt.translation]
    return (
        <>
            <footer>
                <div className="User_manual">
                    <h1 style={{ paddingLeft: "5%", paddingTop: "2%", fontSize: "50px" }}>{text.how}</h1>
                    <div className="Manual_grid">
                        <div className="Grid_box">
                            <div className="Grid_step"><h1>1</h1></div>
                            <h2 className="Step_h1">{text.Register_Land}</h2>
                            <p>{text.step1}</p>
                        </div>
                        <div className="Grid_box" >
                            <div className="Grid_step"><h1>2</h1></div>
                            <h2 className="Step_h1">{text.System_Tracks}</h2> 
                            <p>{text.step2}</p>
                        </div>
                        <div className="Grid_box" >
                            <div className="Grid_step"><h1>3</h1></div>
                            <h2 className="Step_h1">{text.get}</h2>
                            <p>{text.step3}</p>
                        </div>
                    </div>
                </div>
                <div className="Footer">
                    <hr style={{border:"none",height:"1px",backgroundColor:"grey"}}/>
                    <center>
                    <p style={{paddingTop:"10px"}}>&copy; 2026 FarmGuard</p>
                    </center>
                </div>
            </footer>
        </>
    )

}
export default Footer
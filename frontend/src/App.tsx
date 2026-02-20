import type { JSX } from "react";
import Home from "@/pages/Home";
import  { createContext, useState } from "react";
interface context{
  translation:Language,
  toggle:() => void
}
type Language = "en" | "ta"
export const Langcontext = createContext<context>({ translation: "en", toggle: () => {} })

function App():JSX.Element{
  const[translation,settranslation] = useState<Language>("en")
  function toggle():void{
    settranslation(translation === "en"? "ta" : "en")
  }
  return(
    <>  
        <Langcontext.Provider value={{translation, toggle}}>
          <Home />
        </Langcontext.Provider>
        
    </>
  )
}

export default App

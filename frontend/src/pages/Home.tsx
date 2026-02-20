import type { JSX } from "react";
import Nav from "@/components/Nav"
import Section from "@/components/Section"
import Footer from "@/components/Footer"
function Home():JSX.Element{
    return(
        <>
            <Nav />
            <Section />
            <Footer/>
        </>
    )
}
export default Home
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutUs from "../aboutUs/AboutUs";
import Services from "../services/Services";
import Contact from "../contact/Contact";


export default function RoutePath(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
            </Routes>
        </div>
    );
}
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
             <h3>This is my Home page</h3>
             <Link to={"/about-us"} className="mx-2">About Us</Link>
             <Link to = {"/services"} className="mx-2">Our Services</Link>
             <Link to = {"/contact-us"} className="mx-2">Contact Us</Link>
        </div>
    );
}
import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";



const Navber = () => {
    const[open ,setOpen] = useState(false)


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
     
      
    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className=" md:hidden text-2xl " onClick={()=>setOpen(!open)}>
                {/* //here open means true thekle false hoye jabe and false thakle true hoye jabe */}
                {
                    open === true ? <AiOutlineClose></AiOutlineClose>:< IoMdMenu className=" "></IoMdMenu>
                }

                {/* //this process is called toggled */}
                
            
            </div>
           
            <ul className={`" md:flex absolute duration-1000 lg:static
                ${open ? 'top-16':'-top-60'}
                bg-yellow-200 px-6`}>
            {
                routes.map(route =><Link  key={route.id} route={route}></Link>)
                //inside the route we sent the route props
            }
            </ul>
        </nav>
    );
};

export default Navber;
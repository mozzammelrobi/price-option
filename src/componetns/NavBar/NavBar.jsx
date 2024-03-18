import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: '404', path: '/404' }
    ];

    return (
        <nav className="bg-green-700">
          <div
          className="md:hidden hover:cursor-pointer text-2xl"
           onClick={()=> setOpen(!open)}>
            {
                open === true?
                 <IoClose /> : 
                 <HiOutlineMenu />
            }
          
          </div>
            <ul className={`md:flex absolute md:static duration-150
             ${open ? 'top-7': '-top-60'}
            bg-green-900 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;
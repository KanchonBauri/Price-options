import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu} from 'react-icons/io';
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'about' },
        { id: 3, path: '/services', name: 'services' },
        { id: 4, path: '/contact', name: 'contact' },
        // {id: 5, path: '/', name: ''}
    ]
    return (
        <div className="m-3" >
            <div className="text-3xl md:hidden  " onClick={() => setOpen(!open)} >
                {
                    open === true ?
                    <ImCross></ImCross> : <IoMdMenu></IoMdMenu>
                }
                
                
            </div>
            {/* <ul className={`md:flex absolute ${open ? '':'hidden'} px-6`} > */}
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-12':'-top-60'} px-6`} >
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;
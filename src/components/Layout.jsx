import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    const menus = [
        {
            label:"Home",
            href:"/"
        },
        {
            label: "Product",
            href: "/product",
        },
        {
            label: "Category",
            href: "/category"
        },
        {
            label: "Contact us",
            href: "/contact",
        }
    ]
    const mobileLink = (href) => {
       
        navigate(href)
        setOpen(false)
    }
    

    return (
        <div className="             ">
            <nav className="shadow-lg  bg-slate-100 sticky top-0 left-0">
                <div className="w-10/12 mx-auto flex justify-between ">
                    <img
                        src="/images/logo.png" alt="Rahul Kumar"

                        className="w-[100px] "
                    
                    />
                    <button className="md:hidden" onClick={()=>setOpen(!open)}>
                        <i className="ri-menu-3-fill text-3xl "></i>
                    </button>
                    <ul className=" md:flex gap-6 items-center hidden ">
                        {
                            menus.map((item, index) =>
                            (
                                <li key={index} className="">
                                    <Link
                                        to={item.href}
                                        className=" block py-4 hover:bg-red-500 hover:text-green-500 w-[100px] text-center"
                                    
                                    >
                                        {item.label}
                                    </Link>
                               
                            
                            </li>)
                                
                            
                            )
                        }
                        <Link className=" block py-4 hover:bg-red-500 hover:text-green-500 w-[100px] text-center" to="/login">Login</Link>

                        <Link className=" bg-blue-600 px-4 text-md rounded font-semibold block py-2 hover:bg-red-500 hover:text-green-500 text-center" to="/signup">Sign up</Link>
                    </ul>
            
                </div>
            </nav>
            <div>
                {children}
            </div>

            <footer className="bg-orange-600 py-16">
                <div className="w-10/12 mx-auto flex gap-6 grid md:grid-cols-4">
                    <div>
                        <h1 className="text-2xl text-white font-semibold mb-2">Brand's Details
                        </h1>
                        <p className="text-black-500 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, repellendus.</p>

                       <img
                        src="/images/logo.jpg" alt="Rahul Kumar"

                        className="w-[120px] "
                    
                    />  
                    </div>
                    <div>
                        <h1 className="text-2xl text-white font-semibold mb-2">Website's Links</h1>
                        <ul className="space-y-4">
                        {
                            menus.map((item, index) => (
                                <li key={index}>
                                <Link
                                    to={item.href}
                                    
                                >
                                    {item.label}
                                </Link>
                                    </li>
                                
                            ))
                       }
                      
                    
                            
                            <li>
                                <Link to="/login">Login</Link>
                                
                            </li>
                            <li> <Link to="/signup">Signup</Link></li>
                            </ul>
                    </div>
                    <div>
                        <h1 className="mb-2 text-lg  font-semibold text-white">Contact's Details</h1>
                        <form >
                            <label htmlFor="">State Your Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="state your name"
                                className="w-full p-2 mb-4 border border-gray-400 rounded"
                            
                            />
                            <label htmlFor="">State Your Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="state your email"
                                className="w-full p-2 mb-4 border border-gray-400 rounded"
                            />
                            <label htmlFor="">State Your Phone Number</label>
                            <input
                                required
                                type="number"
                                name="phoneno"
                                placeholder="state your phone number"
                                className="w-full p-2 mb-4 border border-gray-400 rounded"
                            />
                            <textarea
                                required
                                name="message"
                                placeholder="state your message"
                                className="w-full p-2 mb-4 border border-gray-400 rounded"
                                rows="5"
                            />
                            
                        </form>
                        <button className="border px-3 py-2 bg-gray-500 hover:bg-red-600 hover:text-white rounded-md">Submit</button>
                    </div>

                    <div className="ml-8" >
                        <h1 className="text-lg text-white mb-4">Follow us</h1>
                        <ul className=" space-y-4">
                            <li><Link to="/">instagram</Link></li>
                           <li><Link to="/">X</Link></li>
                           <li><Link to="/">facebook</Link></li>
                           <li><Link to="/">linkden</Link></li>
                        </ul>
                    </div>

                </div>

            </footer>
            {
                
                <aside className=" overflow-hidden md:hidden bg-slate-900 w-[250px] z-50 h-full fixed top-0 left-0 shadow-lg"
                    style={{

                        width: open ? 250 : 0,
                        transition: 'all 0.5s ease-in-out',
                    }
                       
                     
                 }
                
                >
                    <div className="flex flex-col gap-8 p-6 text-red-500">
                        {
                        menus.map((item, index) => (
                            <button key={index} onClick={()=>(mobileLink(item.href))}>{item.label }</button>
                        ))
                        }

                    </div>
                    </aside>

             }
            
            
        </div>
    )
}
export default Layout;
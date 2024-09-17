import { useState } from "react";
import { Link, useLocation} from "react-router-dom";


const Layout = ({ children }) => {
    const [size, setSize] = useState(280)
    const[mobileSize,setMobileSize] = useState(0)
    const [accountMenu, setAccountMenu] = useState(false)
    const location = useLocation()

    
    const menus = [
     {
            label: "Dashboard",
            icon: <i className="ri-dashboard-3-line mr-2"></i>,
            link:'/layout/dashboard'

        },

         {
            label: "Customer",
            icon: <i className="ri-user-line mr-2"></i>,
            link:'/layout/customer'

        },


        {
            label: "products",
            icon: <i className="ri-shopping-cart-line mr-2"></i>,
            link:'/layout/products'

        },
        {
            label: "orders",
            icon: <i className="ri-shape-line mr-2"></i>,
            link:'/layout/order'

        },

         {
            label: "Payments",
            icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
            link:'/layout/payments'

        },
         
          {
            label: "Settings",
            icon: <i className="ri-settings-3-line mr-2"></i>,
            link:'/layout/settings'

        }
          

    ]


    return (
        <>
            {/* Desktop */}
            
             <div className="md:block hidden">
            
            <aside
                className=
                " bg-indigo-600 h-full fixed top-0 left-0 overflow-hidden"

                style={{
                    width: size,
                    transition:"0.3s"
                }}
            >
                <div className="flex flex-col">
                    {
                        menus.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="px-4 py-3 text-gray-50 text-[18px] hover:bg-rose-600 hover:text-white"
                                style={{
                                    background:(location.pathname === item.link) ? "red" : "transparent"
                                }}
                            >
                            
                                {item.icon}
                                {item.label}
                            </Link>
                            
                        )
                        
                        )
                        }
                        
                        <button className="px-4 py-3 text-gray-50  text-left text-[18px] hover:bg-rose-600 hover:text-white">
                            <i className="ri-logout-circle-r-line mr-2"></i>
                            Logout
  
                        </button>

                   

                    
                </div>
            
            </aside> 
            <section className="h-screen bg-gray-100"
                style={{
                    marginLeft: size,
                    transition:"0.3s"
                }
               
            }
            >
                <nav className="bg-white p-6 shadow flex justify-between items-center sticky top-0 left-0">
                    <div className="flex gap-1 items-center">
                        <button className="hover:bg-indigo-600 h-8 w-8 hover:text-white bg-gray-50" onClick={()=>setSize(size === 280 ? 0 : 280)}>
                            <i className="ri-menu-2-line"></i>
                        </button>
                       
                        <h1>ShopCode</h1>
                    </div>

                    <div>
                        <button className="relative">
                            <img src="/images/avt.png"
                                alt="Rahul"
                                className="h-12 w-12 "
                                onClick={() => setAccountMenu(!accountMenu)} />
                            {
                                accountMenu &&
                                  <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                                <div>
                                    <h1 className="text-lg font-semibold">Rahul Kumar</h1>
                                    <p>rahulkr8466@gmail.com</p>
                                    <div className="h-px bg-gray-200 my-6 ">
                                        <button className="my-2">
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout
                                    </button>

                                    </div>
                                   
                                </div>

                            </div>
                            }
                         
                        </button>
                    </div>
                </nav>



                <div>
                     {children}
                </div>
               
                
            </section>
        </div>
       
            {/* Mobile */}
             <div className="md:hidden block">
            
            <aside
                className=
                " bg-indigo-600 h-full fixed top-0 left-0 overflow-hidden z-50"

                style={{
                    width: mobileSize,
                    transition:"0.3s"
                }}
            >
                    <div className="flex flex-col">
                        <button className="text-left mx-4 mt-4" onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}>
                            <i className="ri-menu-2-fill text-white text-xl"></i>
                        </button>
                    {
                        menus.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="px-4 py-3 text-gray-50 text-[18px] hover:bg-rose-600 hover:text-white"
                                style={{
                                    background:(location.pathname === item.link) ? "red" : "transparent"
                                }}
                            >
                            
                                {item.icon}
                                {item.label}
                            </Link>
                            
                        )
                        
                        )
                    }

                     <button className="px-4 py-3 text-gray-50  text-left text-[18px] hover:bg-rose-600 hover:text-white">
                            <i className="ri-logout-circle-r-line mr-2"></i>
                            Logout
  
                        </button>
                   

                    
                </div>
            
            </aside> 
            <section className="h-screen bg-gray-100"
              
            >
                <nav className="bg-white p-6 shadow flex justify-between items-center sticky top-0 left-0">
                    <div className="flex gap-1 items-center">
                        <button className="hover:bg-indigo-600 h-8 w-8 hover:text-white bg-gray-50" onClick={()=>setMobileSize(mobileSize === 0 ? 280 : 0)}>
                            <i className="ri-menu-2-line"></i>
                        </button>
                       
                        <h1>ShopCode</h1>
                    </div>

                    <div>
                        <button className="relative">
                            <img src="/images/avt.png"
                                alt="Rahul"
                                className="h-12 w-12 "
                                onClick={() => setAccountMenu(!accountMenu)} />
                            {
                                accountMenu &&
                                  <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                                <div>
                                    <h1 className="text-lg font-semibold">Rahul Kumar</h1>
                                    <p>rahulkr8466@gmail.com</p>
                                    <div className="h-px bg-gray-200 my-6 ">
                                        <button className="my-2">
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout
                                    </button>

                                    </div>
                                   
                                </div>

                            </div>
                            }
                         
                        </button>
                    </div>
                </nav>



                <div>
                     {children}
                </div>
               
                
            </section>
        </div>
       
        </>
    )
}
export default Layout;
import { useState } from "react";
import Layout from "./Layout";


const Category = () => {

    const[categories, setCategories] = useState([
        {name: "Electronics"},
        {name: "Fashion"},
        {
            name: "Home & Kitchen"
            
         },
        {
            name: "cloth" 
            
        },
        {
            
            name: "Sports & Outdoors"
        },
        {
            
            name: "Toys & Games"
        },
        {
            
            name: "Beauty & Personal Care"
        }


        
    ])

    return (
        <Layout>
            <div className="md:p-16 p-8">
                <div className="md:10/12 mx-auto  grid md:grid-cols-4 gap-8">
                    {
                        categories.map((item, index)=> (
                            <div key={index} className=" hover:bg-orange-600 hover:text-white bg-white shadow-lg text-center border rounded-lg ">
                                <i className="ri-menu-search-line text-6xl justify-center items-center flex"></i>
                                <h1 className="text-2xl font-bold">{item.name}</h1>
                         </div>
                    ))
                  }

                </div>

            </div>
        </Layout>
    )
}
export default Category;
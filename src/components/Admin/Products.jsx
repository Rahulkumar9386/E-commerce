
import { useState } from "react";
import Layout from "./Layout";
const Products = () => {

    const [products, setProducts] = useState([
        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:"/images/4.jpg"
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/2.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/3.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/4.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/5.jpg'
        },

         {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:"/images/4.jpg"
        },
        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/2.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/3.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/4.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/5.jpg'
        },
         {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 10,
            image:'/images/2.jpg'
        },

        {
            title: 'Men`s shirt blue denim',
            description: 'Lorem ipsum dolor sit.',
            price: 2000,
            discount: 50,
            image:'/images/3.jpg'
        },
    ])
    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-semibold ml-2 mb-4">Payments</h1>
                <div className="grid md:grid-cols-4 gap-8">
                    {
                        products.map((item, index) => (
                            <div key={index} className="bg-white rounded-md shadow-lg">
                                <img src={item.image} alt="Rahul Kumar" className="rounded-t-md w-full  "/>
                                {/* {item.title} */}
                                
                                <div className="mt-2">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p>{item.description}</p>
                                    
                                    <div className="flex gap-3">
                                        <label >{item.price - (item.price * item.discount) / 100}</label>
                                        <del>{item.price}</del>
                                        <label >({item.discount })% off</label>
                                    </div>
                                </div>
                            </div>
                            
                            
                        ))
                   }
                </div>
            
            </div>
            
        </Layout>
    )
}
export default Products;
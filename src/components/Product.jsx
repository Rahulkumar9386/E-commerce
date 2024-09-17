import { useState } from "react";
import Layout from "./Layout";



const Product = () => {
    
    const [products, setProduct] = useState(
        
        [
        
            {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'/products/a.jpg'
                
            },
             {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/b.jpg'
                
            },
              {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/c.jpg'
                
            },
               {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/d.jpg'
                
            },
                {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/f.jpg'
                
            },
                 {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/g.jpg'
                
            },
             {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/i.jpg'
                
            },
              {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/j.jpg'
                
            },
               {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/k.jpg'
                
            },
                {
                title: "New blue shirts mens",
                price: 1200,
                discount: 15,
                thumbnail:'./products/l.jpg'
                
            },
    ])
    return (
        <Layout>
            <div>
               
{/* w-10/12 mx-auto */}

                <div className="md:p-16 p-8">
                    <h1 className="text-center text-2xl font-semibold ">All Products</h1>
                    <p className="text-center mx-auto md:w-7/12 mt-2 mb-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim minus rem neque in suscipit molestiae aspernatur reprehenderit sapiente accusamus!</p>

                    <div className="grid md:grid-cols-4 gap-8 w-10/12 mx-auto mb-8">
                        {
                           products.map((items, index) => (
                                <div key={index} className="shadow-lg bg-white  ">
                                    <img src={items.thumbnail} alt="" />

                                    <div>
                                    <h2 className="p-4 font-semibold">{items.title}</h2>
                                     
                                      <div className="flex gap-4">
                                        <p>price:${items.price-(items.price)*(items.discount)/100}</p>
                                        <del className="font-bold">${items.price}</del>
                                        <p>off: {items.discount}%</p>
                                        </div>
                                        
                                        <div>
                                           <button className="bg-green-500 w-full mt-2 py-4 rounded font-semibold">Buy Now</button>
                                           <button className="bg-green-500 w-full mt-2 py-4 rounded font-semibold">
                                               <i className="ri-shopping-cart-line mr-2"></i>
                                               Buy Now
                                           </button>
                                        </div>
                                        
                                    </div>
                                    
                                   
                                </div>


                                
                            ))
                        }

                    </div>
                </div>
           </div>
        </Layout>
        
    )
}
export default Product;
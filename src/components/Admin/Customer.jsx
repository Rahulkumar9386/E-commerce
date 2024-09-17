import { useState } from "react";
import Layout from "./Layout";
const Customer = () => {
    const [customer, setCustomer] = useState(
        [
            {

                
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                date: "12-10-2024 10:40:15 am",
                address: "B-1/1, Sector-1, Noida",

            }
            
            

                

                 
              



        ]
    )
    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-semibold ml-2">Order</h1>

                <div className="mt-6">
                    <table className=" w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white">
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                customer.map((item, index) => (
                            
                                    <tr className="text-center" key={index} style={{
                                        background:(index+1)%2===0 ? "#f1f5f9" : "white"
                                    
                                    }}>
                                        <div className="flex gap-2 items-center">
                                            <img src="/images/avt.png" alt="" className="h-10 w-12  " />
                                            <td className="capitalize" >
                                                {item.customerName}
                                            </td>
                                        </div>
                                   
                                    <td>{item.email }</td>
                                   <td>{item.mobile }</td>
                                    <td>{item.date}</td>
                                    <td>{item.address}</td>
                               
                            </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
export default Customer;
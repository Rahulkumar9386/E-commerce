import { useState } from "react";
import Layout from "./Layout";
const Payments = () => {
    const [payment, setPayment] = useState(
        [
            {

                paymentId:'#12345',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product:'iphad',
                amount:1000,
                date: "12-10-2024 10:40:15 am",

            }
            
            

                

                 
              



        ]
    )
    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-semibold ml-2">Payments</h1>

                <div className="mt-6">
                    <table className=" w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white">
                                <th>PaymentId</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                payment.map((item, index) => (
                            
                                    <tr className="text-center" key={index} style={{
                                        background:(index+1)%2===0 ? "#f1f5f9" : "white"
                                    
                                    }}>
                                         <td>{item.paymentId }</td>
                                        <div className="flex gap-2 items-center">
                                            <img src="/images/avt.png" alt="" className="h-10 w-12  " />
                                           
                                            <td className="capitalize" >
                                                {item.customerName}
                                            </td>
                                        </div>
                                   
                                    <td>{item.email }</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.product}</td>
                                        <td>${ item.amount}</td>
                                     <td>{item.date }</td>
                               
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
export default Payments;
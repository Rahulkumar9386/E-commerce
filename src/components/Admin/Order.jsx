import { useState } from "react";
import Layout from "./Layout";
const Order = () => {
    const [orders, setOrders] = useState(
        [
            {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

            },
            
             {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

            },
             
              {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

            },
               {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

            },
               
                {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

            },
                
                 {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

           },

                  {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

           },

                   {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

           },

                    {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

           },

                     {

                orderId: '#12234',
                customerName: 'Rahul Kumar',
                email: 'rahulkr8466@gmail.com',
                mobile: '+91 7667306033',
                product: 'Lenovo ideapad 340',
                amount: 1000,
                date: "12-10-2024 10:40:15 am",
                status:'pending'

           },



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
                                <th className="py-4">Order Id</th>
                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                orders.map((item, index) => (
                            
                                    <tr className="text-center" key={index} style={{
                                        background:(index+1)%2===0 ? "#f1f5f9" : "white"
                                    
                                }}>
                                   <td className="py-4" >{item.orderId }</td>
                                   <td className="capitalize" >{item.customerName }</td>
                                   <td>{item.email }</td>
                                   <td>{item.mobile }</td>
                                    <td >{item.product }</td>
                                    <td>${item.amount }</td>
                                     <td>{item.date }</td>
                                <td>

                                    <select className="border p-1 border-gray-200">
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="dispatch">Dispatch</option>
                                        <option value="return">Return</option>
                                
                                    </select>
                                    
                                     </td>
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
export default Order;
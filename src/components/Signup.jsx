 
 import Layout from "./Layout";

const Signup = () => {
    return (
    
            <div className="grid  grid-cols-2 h-screen mr-24 overflow-hidden space-x-24">
                <img src="/images/singup.jpg" alt="RAHUL"  className="h-full w-full"/>
            <div className="flex flex-col justify-center  p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Signup</h1>
                <p className="text-lg font-semibold text-gray-600">Create an account</p>
                <form className="mt-4 space-y-4">
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold">fullname</label>
                    <input
                        required
                        type="text"
                        placeholder="State your name"
                        name="fullname"
                        className="border border-gray-500 flex flex-col shadow-lg rounded-lg p-3"
                    
                    
                        />
                    </div>
                  
                    <div>
                         <label className="text-lg font-semibold">emailid</label>
                    <input
                        required
                        type="email"
                        placeholder="State your email"
                        name="emailid"
                        className="border border-gray-500 flex flex-col shadow-lg rounded-lg p-3"/>
                    
                      </div>
                    
                     <div>
                         <label className="text-lg font-semibold">password</label>
                    <input
                        required
                        type="password"
                        placeholder="enter your password"
                        name="password"
                        className="border border-gray-500 flex flex-col shadow-lg rounded-lg p-3"/>
                    
                    </div>
                    
                    <button className="  py-2 px-4 bg-blue-600 rounded font-semibold text-white  hover:bg-red-500 hover:text-white">
                        Signup
                    </button>
                    
                    



                </form>
                </div>

            </div>
        
       
    )
}
export default Signup;
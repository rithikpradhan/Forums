// src/components/Sidebar/Sidebar.js
import React from 'react'
import { IoIosSearch } from "react-icons/io";




export default function Dashboard() {

    return (

        <div className='flex flex-col lg:flex-row bg-white/30 backdrop-blur-sm border-blue-300 shadow-xl w-full h-full p-4 gap-4 rounded-4xl'>


          <div className='flex flex-col gap-10 mb-8 pl-4 pr-4 lg:pl-10 flex-1 '>

            {/* Header */}

             <div className='flex items-center justify-between mx-10'>
                    <h1 className='text-3xl text-center font-bold'>Dashboard</h1>
                 <div className="relative w-full max-w-md mt-2 lg:mt-0">
                  <IoIosSearch 
                   size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer "
                 />
                <input 
                 type="text" 
                 placeholder="Search" 
                 className="py-3 pl-10 rounded-4xl bg-white font-medium outline-offset-2 text-md outline-violet-500 focus:outline-2"
                />
                 </div>
             </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className='flex flex-col gap-5 justify-between bg-red-300 py-5 px-7 rounded-4xl'>

                        <h1 className='text-xl font-small'>Total Threads</h1>
                        <p className='text-4xl font-medium'>10</p>
                        <p className='text-sm text-gray-800'>Threads from all courses</p>

                    </div>


                    <div className='flex flex-col gap-5 justify-between bg-blue-300 py-5 px-7 rounded-4xl'>
                        <h1 className='text-xl font-small'>Total Courses</h1>
                        <p className='text-4xl font-medium'>6</p>
                        <p className='text-sm text-gray-800'>Courses from all departments</p>
                    </div>

                    <div className='flex flex-col gap-5 justify-between py-5 px-7 rounded-4xl bg-green-300'>
                        <h1>Total Students</h1>
                        <p className='text-4xl font-medium'>20</p>
                        <p className='text-sm text-gray-800'>Students from all departments</p>
                    </div>
                </div>

                <h3 className='font-medium text-xl'>Recent Chats</h3>

            <div className='flex flex-col sm:flex-row gap-5 items-center overflow-x-auto'>

                <div className='flex flex-col gap-5 justify-between py-5 px-7 rounded-4xl border-1 border-gray-500 w-[500px]'>

                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-medium'>Node Js</h1>
                        <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                    </div>

                    <h2 className='text-md font-medium'>Hey, I am learning Node Js</h2>
                    <p className='text-sm text-gray-600'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de</p>

                    <button className='border-1 border-gray-400 p-2 bg-white/30 rounded-xl'>Continue</button>  

                    <p className='text-xs text-gray-600'>Created at: July 9, 2025</p>                  
                </div>



                 <div className='flex  flex-col gap-5 justify-between py-5 px-7 rounded-4xl border-1 border-gray-500  w-[500px]'>

                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl font-medium'>Node Js</h1>
                        <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                    </div>

                    <h2 className='text-md font-medium'>Hey, I am learning Node Js</h2>
                    <p className='text-sm text-gray-600'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de</p>

                    <button className='border-1 border-gray-400 p-2 bg-white/30 rounded-xl'>Continue</button>  

                    <p className='text-xs text-gray-600'>Created at: July 9, 2025</p>                  
                </div>


            </div>

         </div>

            {/* profile */}
            <div className='flex-shrink-0 w-full lg:w-[300px] bg-white/40 rounded-[30px]'>



                <div className='flex flex-col gap-4 items-center  p-5 rounded-4xl'>

                    <h1 className='text-medium font-medium'>Profile</h1>

                    <div className='flex flex-col gap-3 items-center'>

                   <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-25 h-25 rounded-full' />

                    <p className='text-xl font-medium'>Rithik Pradhan</p> 
                    <p className='text-gray-500 text-md'>Student</p>

                    </div>

                    <div className='flex gap-5 justify-between'>
                        <a href="#" className='text-blue-500 hover:bg-blue-300 hover:text-white hover:font-medium transition-all hover:scale-105 scale-90 duration-200 cursor-pointer border border-blue-600 py-2 px-4 rounded-4xl'>Edit Profile</a>

                    </div>

                    <div className='flex flex-col gap-3 px-4 w-full'>

                        <h1 className='text-xl font-medium justify-start border-b-2 border-gray-200 pb-2 mt-5 gap-2'>Notifications</h1>

                        <div className='flex bg-red-200 items-center gap-2 rounded-lg py-2 px-4 w-full'>

                            <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                            <div className='flex flex-col items-start'>

                            <h1 className='text-sm font-medium'>New Thread Added !!</h1> 
                            <p className='text-gray-500 text-sm'>Rithik Pradhan</p>

                            </div>

                        </div>

                            <div className='flex bg-blue-200 items-center gap-2 rounded-lg py-2 px-4 w-full'>

                            <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                            <div className='flex flex-col items-start'>

                            <h1 className='text-sm font-medium'>Latest Update !! 👁</h1> 
                            <p className='text-gray-500 text-sm'>Abhishek Verma</p>

                            </div>

                        </div>            
                        
                        
                        <div className='flex bg-green-200 items-center gap-2 rounded-lg py-2 px-4 w-full'>

                            <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                            <div className='flex flex-col items-start'>

                            <h1 className='text-sm font-medium'>Lecture Rescheduling</h1> 
                            <p className='text-gray-500 text-sm'>Ankush Gupta</p>

                            </div>
                            

                        </div>        
                        
                        <div className='flex bg-yellow-200 items-center gap-2 rounded-lg py-2 px-4 w-full'>

                            <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />

                            <div className='flex flex-col items-start'>

                             <h1 className='text-sm font-medium'>New Thread Added !!</h1> 
                             <p className='text-gray-500 text-sm'>Rithik Pradhan</p>

                            </div>

                        </div>     
                        
                        <div className='flex bg-violet-200 items-center gap-2 rounded-lg py-2 px-4 w-full'>
                            <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                            <div className='flex flex-col items-start'>

                            <h1 className='text-sm font-medium'>New Thread Added !!</h1> 
                            <p className='text-gray-500 text-sm'>Rithik Pradhan</p>

                            </div>

                        </div>   
                        
                         <div className='flex bg-gray-200 items-center gap-2 rounded-lg py-2 px-4 w-full'>
                            <img src="../../src/assets/images/headshot-pleased-hipster-guy-dressed-maroon-t-shirt.jpg" alt="user" className='w-12 h-12 rounded-full' />
                            <div className='flex flex-col items-start'>

                            <h1 className='text-sm font-medium'>New Thread Added !!</h1> 
                            <p className='text-gray-500 text-sm'>Rithik Pradhan</p>

                            </div>

                        </div>


                    </div>

                    


                    


                </div>

                

               
           
            

            </div>

            
            
        </div>
    )
  
   
}

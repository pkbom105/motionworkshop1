"use client"

import {motion} from "framer-motion"
import { div } from "framer-motion/client"
import Image  from "next/image"

const Location = () => {
        return (
                <>
                        <div className=" container my-36"> 
                            <div className="flex flex-col justify-center items-center gap-8">
                                    {/* Form section */}
                                    <Form />
                                    
                                    {/* GPS Section */}
                                    <Gps />
                            </div>                        
                        </div>
                </>
                )
}
export default Location

function Form () {
    return (
        <>
            <div className="space-y-8"> 
                <motion.h1 
                    initial ={{ opacity: 0 ,y: -100}}
                    animate ={{ opacity: 1 ,y: 0}}
                    transition ={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.1
                    }}
                className="text-xl font-bold  text-gray-600">
                        Buy our Product from Anywhere!
                </motion.h1> 
                <motion.div 
                    initial ={{ opacity: 0 ,y: -100}}
                    animate ={{ opacity: 1 ,y: 0}}
                    transition ={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2
                    }}
                    className="flex items-center gap-4">
                    <input 
                    placeholder="Name"
                    type="text"
                    className="input-style w-full lg:w-[150px] focus:border-primary" />                        
                    
                    <input 
                    placeholder="Email "
                    type="email"
                    className="input-style w-full focus:outline-none" />    
                </motion.div>
                
                <div className="flex items-center gap-4">
                    <input 
                    placeholder="Country"
                    type="text"
                    className="input-style w-full focus:border-primary" />                        
                    
                    <input 
                    placeholder="Zipcode "
                    type="text"
                    className="input-style w-full lg:w-[150px] focus:outline-none" />    
                </div>
                <motion.button 
                    initial ={{ opacity: 0 ,y: -100}}
                    animate ={{ opacity: 1 ,y: 0}}
                    transition ={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                    }}
                    className="primary-btn w-full shadow-xl">
                        Order Now
                </motion.button>
            </div>
        </>
        )
}

function Gps () {
    
    const gpsMaps ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6517.940186333815!2d100.54413425087539!3d13.74322932255134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edcf327b91b%3A0x5480f75fcf67cfdb!2sGoogle%20Bangkok!5e0!3m2!1sth!2sth!4v1742386620778!5m2!1sth!2sth"
    
    return (
        <>
            <motion.div 
                    initial ={{ opacity: 0 ,scale: 0.5}}
                    animate ={{ opacity: 1 ,scale: 1}}
                    transition ={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4
                    }}
                className="rounded-xl w-full sm:w-[300px]  sm:h-[300px] md:w-[300px]  md:h-[250px] overflow-hidden shadow-2xl mx-auto"> 
                    <iframe 
                        title="Map"
                        src= {gpsMaps}
                        width={600}
                        height={450}
                        style={{border:2, borderRadius: "0.5rem"}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        >
                    </iframe>                        
            </motion.div>
        </>
        )
}
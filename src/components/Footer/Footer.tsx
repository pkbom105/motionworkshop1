"use client"

import {
    FaFacebook,
    FaInstagram,
    FaGoogle,
    FaPhone,
    FaTelegram
} from "react-icons/fa"

import {motion} from "framer-motion"
import { div } from "framer-motion/client"
import Image  from "next/image"
import { FaMapLocation } from "react-icons/fa6"
import { once } from "node:events"



const Footer = () => {

        return (
                <>
                        <div className=" bg-gradient-to-t from-primary to-primaryDark py-12 text-white"> 
                            <div className="container">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {/* company detail */}
                                            <CompanyDetails />
                                            {/* Links detail */}
                                            <FooterLinks />
                                            {/* Social details */}
                                            <SocialMedia />
                                    </div>
                                </div>
                                <motion.p
                                        initial ={{ opacity: 0 ,y: 100}}
                                        whileInView ={{ opacity: 1 ,y: 0}}
                                        viewport={{ once: true, amount: 0.5}}
                                        transition ={{ 
                                                duration: 0.5,
                                                delay: 0.5
                                        }}
                                        className="text-white text-center mt-4 pt-4">Copyright &copy; 2025 Motion Coder</motion.p>
                        </div>
                </>
                )
}
export default Footer 

function CompanyDetails () {
        return (
        <>
                <motion.div 
                    initial ={{ opacity: 0 ,y: 100}}
                    whileInView ={{ opacity: 1 ,y: 0}}
                    viewport={{ once: true, amount: 0.5}}
                    transition ={{ 
                            duration: 0.6,
                            delay: 0.3
                    }}
                    className="space-y-6"> 
                        <h1 className="text-3xl font-bold uppercase">Motion Coder</h1>
                        <p className="text-sm max-w-[300px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatum aspernatur 
                        provident ipsa qui sequi dignissimos quibusdam numquam facere nesciunt?</p> 
                        <div className="space-y-2">
                                <p className="flex items-center gap-2">
                                        <FaPhone />
                                        +99 123 456 789 
                                </p>
                                <p className="flex items-center gap-2">
                                        <FaMapLocation />
                                        99 street,  Bangkok , Thailand 10100 
                                </p>
                        
                        </div>
                </motion.div>
        </>
        )
}
function FooterLinks () {
    return (
    <>
            <motion.div
                initial ={{ opacity: 0 ,y: 100}}
                whileInView ={{ opacity: 1 ,y: 0}}
                viewport={{ once: true, amount: 0.5}}
                transition ={{ 
                        duration: 0.6,
                        delay: 0.3
                }}
                className="space-y-6"> 
                    <h1 className="text-3xl font-bold uppercase tracking-wider">Quick Link</h1>
                    <div className="grid grid-cols-2 gap-4">
                            {/* 1st column */}
                            <div>
                                    <ul className="space-y-2">
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Contact Us</li>
                                            <li>Privacy Policy</li>
                                    </ul>
                            </div>
                            {/* 2nd column */}
                            <div>
                                    <ul className="space-y-2">
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Contact Us</li>
                                            <li>Privacy Policy</li>
                                    </ul>
                            </div>
                    </div>
            </motion.div>
    </>
    )
}
function SocialMedia () {

        const creditCardImg = "/assets/creditCard.png"
        const scbImg = "/assets/scb.png"
        const kabankImg = "/assets/kbank.png"
    
    return (
    <>
            <motion.div
                initial ={{ opacity: 0 ,y: 100}}
                whileInView ={{ opacity: 1 ,y: 0}}
                viewport={{ once: true, amount: 0.5}}
                transition ={{ 
                        duration: 0.6,
                        delay: 0.3
                }}
                className="space-y-6"> 
                    <h1 className="text-3xl font-bold uppercase tracking-wider">Follow Us</h1>
                    {/* icon Section  */}
                    <div className="flex items-center gap-4">
                            <FaFacebook className="text-3xl hover:scale-110 transition-all duration-300"></FaFacebook>
                            <FaInstagram className="text-3xl hover:scale-110 transition-all duration-300"></FaInstagram>
                            <FaGoogle className="text-3xl hover:scale-110 transition-all duration-300"></FaGoogle>
                            <FaTelegram className="text-3xl hover:scale-110 transition-all duration-300"></FaTelegram>
                    </div>
                     {/* payment Section  */}
                    <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                    <p>Payment Method</p>
                            </div>
                            <div className="flex items-center gap-4">
                                    <Image
                                        src={creditCardImg}
                                        alt= "Credit Card"
                                        width={45}
                                        height={45}
                                    />
                                    <Image
                                        src={scbImg}
                                        alt= "SCB"
                                        width={45}
                                        height={45}
                                    />
                                    <Image
                                        src={kabankImg}
                                        alt= "kbank"
                                        width={45}
                                        height={45}
                                    />
                                </div>
                    </div>
            </motion.div>
    </>
    )
}
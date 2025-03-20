import { GiHamburgerMenu } from "react-icons/gi"
import { motion, AnimatePresence} from "framer-motion"
import { useState } from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"


const Navbar = ( ) => {

        const [sidebar, setSidebar] = useState(false)
    
    return (
            <>
                    <nav className="absolute top-0 left-0 w-full pt-8 z-20">
                            <div className="container">
                                    <div className="flex justify-between px-10 items-center">
                                            {/* Logo Section */}
                                            <motion.h1 
                                                initial ={{ opacity: 0 ,y: -100}}
                                                animate ={{ opacity: 1 ,y: 0}}
                                                transition ={{ 
                                                        type: "spring",
                                                        stiffness: 100,
                                                        damping: 10,
                                                        delay: 0.3
                                                }}
                                                className="text-2xl font-semibold uppercase tracking-wider">
                                                <span className="text-primary" >Motion </span>
                                                <span className="text-gray-100">Workshop</span> 
                                            </motion.h1>
                                            {/* Hamburger Section */}
                                                <motion.div
                                                        initial ={{ opacity: 0 ,y: -100}}
                                                        animate ={{ opacity: 1 ,y: 0}}
                                                        transition ={{ 
                                                                type: "spring",
                                                                stiffness: 100,
                                                                damping: 10,
                                                                delay: 0.3
                                                        }}
                                                        >
                                                        <GiHamburgerMenu 
                                                        onClick={() => setSidebar(!sidebar)}
                                                        className="cursor-pointer text-gray-100 text-2xl" />
                                                </motion.div>
                                    </div>
                            </div>
                    </nav>
                    <AnimatePresence>
                            {sidebar && (
                                    <motion.div 
                                    initial ={{ opacity: 0 ,x: 100}}
                                    animate ={{ opacity: 1 ,x: 0}}
                                    exit={{opacity: 0 ,x: 100}}
                                    transition ={{ 
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.3
                                    }}
                                        className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b 
                                        from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
                                            <div className="w-full h-full justify-center">
                                                    <div className="flex flex-col h-full justify-center items-center gap-6">
                                                        {/* line */}
                                                        <div className="w-[1px] h-[70px] bg-white/50" />
                                                        
                                                        {/* social icon 1 */}
                                                        <div className="text-yellow-50 inline-block p-2 rounded-full cursor-pointer border border-white " >
                                                                <FaFacebookF />
                                                        </div>
                                                          {/* social icon 2 */}
                                                        <div className="text-yellow-50 inline-block p-2 rounded-full cursor-pointer border border-white " >
                                                                <FaTwitter />
                                                        </div>
                                                          {/* social icon 3 */}
                                                        <div className="text-yellow-50 inline-block p-2 rounded-full cursor-pointer border border-white " >
                                                                <FaInstagram />
                                                        </div>
                                                        
                                                        {/* line 2 */}
                                                        <div className="w-[1px] h-[70px] bg-white/50" />
                                                    </div>
                                            </div>
                                    </motion.div>
                            )}
                    </AnimatePresence>
            </>
    )
}
export default Navbar
import {ShoppingCart} from 'lucide-react'
import {useState} from 'react'
import {motion} from 'framer-motion'


function Navbar() { 

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-screen  relative">
        <motion.nav 
        
        initial={{ y: -710, opacity: 1 }}
    animate={isOpen ? { y:-500, opacity: 1, transition: {type:"spring", stiffness:1000, damping: 100, duration:0.5, ease: "easeInOut"} } :  { y: -710, opacity: 1 }}

        className="h-200 z-1000  fixed  w-full bg-background text-black ">
            <div className=" px-5 absolute bottom-0 flex items-center justify-between w-full">   
                <a onClick={() => setIsOpen(false)} href = "/"><img src = "./assets/logo.svg" className="lg:size-30 size-20"></img></a>
                <div className= {`lg:relative absolute lg:bottom-0  lg:text-lg text-4xl bottom-20 left-35 flex-col ${isOpen ? "":""} lg:flex-row flex items-center gap-4`}>
                    <a onClick={() => setIsOpen(false)} href="/about" className="px-3 py-2 hover:text-amber-500 rounded">About</a>
                    <a onClick={() => setIsOpen(false)} href="/lookbook" className="px-3 py-2 hover:text-amber-500 rounded">Lookbook</a>
                    <a onClick={() => setIsOpen(false)} href="/contact" className="px-3 py-2 hover:text-amber-500 rounded">Contact</a>


                    
                </div>
                
                <div className = "items-center flex flex-row"> 
                    {/* <ShoppingCart size={35}/>                     */}
                <div className="flex gap-1 flex-col lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-black h-1.25 w-8 block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-black h-1.25 w-8 block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-black h-1.25 w-8 block"
                    />

                    </div>

                    
                    </div>
                                       
            </div>
        </motion.nav>
        <motion.div initial = {{opacity: 0}} animate= {isOpen ? {opacity: 0.25} : {opacity: 0 }}className={` ${isOpen ? "": " hidden"}w-screen opacity-25 h-screen fixed bg-black z-10`}></motion.div>
        </div>
    );
}

export default Navbar;
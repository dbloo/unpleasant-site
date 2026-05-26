import { createFileRoute } from '@tanstack/react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import {StyledButton} from '../components/ui/button'

export const Route = createFileRoute('/')({ component: Home })

function Home() {

  const { scrollY } = useScroll()

  const blobY = useTransform(scrollY, [0, 600], [0, 100], { clamp: false })
  const blob2Y = useTransform(scrollY, [0, 400], [0, 0], { clamp: false })

 


  return (
    <main className="w-screen justify-center items-center  overflow-x-hidden  h-auto flex flex-col">
        <section className=' flex flex-col  w-full  h-full lg:p-0 '>

          <div className = "overflow-hidden w-full h-full  ">

      <div className = "p-5 ">
          <motion.h1 
          
          initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          
          className = "lg:pl-10 mt-20 lg:text-8xl text-5xl w-full text-amber-500 font-black">FOR THE ART DEPRIVED.</motion.h1>

          <motion.p initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className = "lg:pl-10 mt-10 text-2xl">See what we've been up to.</motion.p>
          <motion.div

            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.13 }} 

            className='mt-10 lg:pl-10 h-full '
          
          >

                      <StyledButton to = "/events" color = "amber-500" className = "">View Our Past Exhibits</StyledButton>
                      </motion.div>
          </div>

          

    <div className = "  w-screen relative h-auto">
          <motion.span
            style = {{y: blobY}}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            
          className= ' block size-100 bg-amber-500 opacity-50 rounded-full bg-radial-[at_50%_5%] blur-xl absolute top-0 lg:right-0 lg:left-300 left-60 -z-1000 from-amber-100 to-amber-500 to-75%  '></motion.span>
          <motion.span
            style = {{y: blob2Y}}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.19 }}
            
          className= ' block size-40 bg-amber-500 rounded-full bg-radial-[at_50%_5%] blur-lg absolute top-70 lg:left-100 -left-20 -z-1000 from-amber-100 to-amber-500 to-75%  '></motion.span>
          </div>


          
          <img src = "/wi.png" className='lg:ml-200 mt-30 lg: w-100'></img>
   
          </div>

        </section>
    </main>
  )
}

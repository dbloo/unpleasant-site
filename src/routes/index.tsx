import { createFileRoute } from '@tanstack/react-router'
import {useState, useRef, useEffect} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import {StyledButton} from '../components/ui/button'

export const Route = createFileRoute('/')({ component: Home })

function Home() {

  const { scrollY } = useScroll()

  const blobY = useTransform(scrollY, [0, 600], [0, 100], { clamp: false })
  const blob2Y = useTransform(scrollY, [0, 400], [0, 0], { clamp: false })

 


  return (
    <main className="w-screen overflow-x-hidden min-h-screen flex flex-col">
        <section className='page-wrap flex  flex-col  w-full  h-full lg:p-0 '>

          <div className = "w-screen h-full  ">

          <motion.h1 
          
          initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          
          className = "mt-30 lg:text-8xl text-6xl w-full text-amber-500 font-black">EXTRA ORDINARY.</motion.h1>

          <motion.h1 
          
          initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.13 }} 
            
            className = "lg:text-8xl text-amber-500 text-6xl font-black">ON ALL THE DAYS.</motion.h1>

    <div className = " w-full h-full relative">
          <motion.span
            style = {{y: blobY}}
            
          className= ' block size-100 bg-amber-500 opacity-50 rounded-full bg-radial-[at_50%_5%] blur-xl absolute top-0 left-60 -z-1000 from-amber-100 to-amber-500 to-75%  '></motion.span>
          <motion.span
            style = {{y: blob2Y}}
            
          className= ' block size-40 bg-amber-500 rounded-full bg-radial-[at_50%_5%] blur-lg absolute top-70 -left-20 -z-1000 from-amber-100 to-amber-500 to-75%  '></motion.span>
          </div>


          <motion.div

            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.16 }} 
          
          >

                      <StyledButton to = "/lookbook" color = "amber-500" className = "mt-10">View Our Past Exhibits</StyledButton>
                      </motion.div>

   
          </div>

        </section>
    </main>
  )
}

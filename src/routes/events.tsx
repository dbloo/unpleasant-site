import { createFileRoute } from '@tanstack/react-router'
import { EventCards } from '#/components/eventcards'
import {motion} from "framer-motion"

export const Route = createFileRoute('/events')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
  
  
  
    <section className='lg:p-8 p-5 mb-20 w-full h-auto'>

        <div className='pt-20'>
        
        <motion.h1 
        
        initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}

        className = "font-black text-amber-500 text-6xl lg:text-8xl">Exhibits</motion.h1>

        <div className='grid-cols-1 lg:grid-cols-4 grid gap-10 mt-10'>

        <EventCards/>
        </div>

        </div>


    </section>


)
}

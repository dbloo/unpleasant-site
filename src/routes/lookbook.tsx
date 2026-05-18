import { createFileRoute } from '@tanstack/react-router'

import { motion } from 'framer-motion'

export const Route = createFileRoute('/lookbook')({
  component: RouteComponent,
})

  

function RouteComponent() {
  const images = [
  { url: '/assets/img1.JPEG', name: 'Image 1' },
  { url: '/assets/img2.jpg', name: 'Image 1' },
  { url: '/assets/img3.jpg', name: 'Image 1' },
  { url: '/assets/img4.jpg', name: 'Image 1' },
,
];
  return <main><section className = "w-screen h-auto lg:p-20 pt-20 p-5">
    
    <motion.h1 
    
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            
             className = "text-amber-500 font-black lg:text-9xl mt-10 text-6xl w-full">LOOKBOOK</motion.h1> 

             <motion.p 
             
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}

             className='italic text-black text-xl pt-5'>Past Exhibits and Events</motion.p>

    <motion.div 
    
    
    
    className = "overflow-hidden w-full flex flex-col min-h-screen   bg-background  ">
    <div className = "overflow-hidden w-full text-8xl  ">
   

          <div className="columns-1 md:columns-2 2xl:columns-4 gap-2 pt-20 pb-15">
        {images.map((image, index) => (
          <>
          <div key={index} className="mb-2 break-inside-avoid transition-all hover:opacity-80 hover:scale-102">
            <img
              src={image? image.url : " "}
              alt={image? image.name : " "}
              className="w-full h-auto rounded-2xl transition-all cursor-pointer"
              
            />
          </div>

          

          </>
        ))}

        


      </div>
     
            


        </div>
        </motion.div>
    
    </section></main>
}


import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import {
  Field,
  FieldError,
} from "@/components/ui/field"

import { useForm } from "@tanstack/react-form";
import { submitEmailForm } from '@/serverFunctions/contact'
import { emailFormSchema } from '../lib/validation'
import { Spinner } from "@/components/ui/spinner";




function Footer () {

   const [status, setStatus] = useState(0)
   const [isLoading, setIsLoading]= useState(false)
      const [showMessage, setShowMessage] = useState(false);


   const emailForm = useForm({
    defaultValues: {
        email: '',
    },

    validators: { onSubmit: emailFormSchema },
    onSubmit: async ({value}) => {
        setIsLoading(true);
        try {
            await submitEmailForm({ data: value  as any })
            emailForm.reset()
            setStatus(2)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setStatus(1)
            console.error('Error submitting email:', error)
        }



    }
   })  


// When status becomes 2, show message then hide it after a delay
useEffect(() => {
  if (status === 2) {
    setShowMessage(true);
    const timer = setTimeout(() => setShowMessage(false), 3000); // disappears after 3s
    return () => clearTimeout(timer);
  }
}, [status]);
   
   

    return (
        <footer className="p-4 bg-amber-500 -z-1000 w-screen h-screen  text-sm text-black-500">

            <div className="h-full justify-center items-center text-white">
                
                <div className="flex flex-col justify-center items-center w-full">
                    <div className = "text-center w-full">
                <h1 className = " font-black text-5xl mb-10 mt-10">Stay in the loop.</h1>
                <p className = " text-xl mb-10 ">Drop your email and we'll let you know about any upcoming events, exhibits, and open calls for art.</p>
                </div>

                <div className="flex relative mt-10 z-100 lg:w-100 w-full">
      
                    <emailForm.Field name="email"
                    children = {(field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return(
                            <Field>

                                <Input 
                                
                                id= {field.name}
                                    name= {field.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                    aria-invalid={isInvalid}
                                    type = "text"
                                    placeholder = "e.g johdoe@exmaple.com"
                                    autoComplete = "off"
                                    className = " text-xl lg:w-40 w-full placeholder:text-white placeholder:opacity-35 border-white" 
                                 />

                                 

                                {isInvalid && <FieldError errors = {field.state.meta.errors}/>}
                                <div className="w-full justify-center text-center">
                                {status == 1 && <p className = "z-1000 text-white mt-10">An error occurred. Please try again later.</p>}

                                <AnimatePresence>
                                {showMessage &&  <motion.p
                                    layout
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                
                                className = "z-1000 text-white mt-10">You're locked in!</motion.p>}
                                </AnimatePresence>
                                </div>
                                

                            </Field>
                        )
                    }}/>
                    <div className="absolute right-0">
                        <div className="relative">
                    {isLoading && <Spinner className ="absolute right-8 z-100000 top-2.5" color="white"/>}
                    <Button  disabled = {isLoading} onClick = {emailForm.handleSubmit} variant = "styled" className = "absolute bg-amber-500 border z-1000 border-white right-0 top-0 h-9 w-20 ">{isLoading ? "": "Submit"}</ Button>
                    </div>
                    </div>

                </div>

                </div>
                <div className="w-full justify-center mt-30 items-center flex">
            <p className="">&copy; 2026 Studio Unpleasant. All rights reserved.</p>
            </div>
            </div>

            
        </footer>
    );
}

export default Footer;
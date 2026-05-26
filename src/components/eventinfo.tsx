
import {events} from "./eventcards"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import {Link} from "@tanstack/react-router"
import {motion} from 'framer-motion'

const EventInfo = ({slug}: {slug:string}) => {

    const event = events.find(e => e.slug === slug)

    if(!event) return <p>Sorry, we couldn't find that event.</p>

    return(<>

        <div className="w-full h-auto lg:p-20 p-5 lg:pt-35 pt-30">
        <div className = "w-full h-full relative justify-center items-center cursor-pointer hover:text-white">
            
            <ArrowLeft className="absolute top-1 left-1 text-amber-500 z-10 transition-colors" />
            <Link to= "/events"><Button  variant = "styled" size="sm" className = "z-0 hover:bg-amber-500 hover:text-white hover:border-white  w-40 bg-base border z-1000 text-amber-500 rounded-full mb-5 border-amber-500  ">Back2Events</ Button></Link>
            
        </div>
        
        <div className = "lg:mb-15 mb-10">
        <motion.h1 
        

            
        className=" text-amber-500 font-black w-full lg:text-6xl text-4xl mb-5 lg:mb-10">{event.title} </motion.h1>
        <p className="lg:text-3xl font-medium text-lg">{event.date} • {event.location}</p>
        </div>

        <div className = "flex flex-col-reverse lg:gap-10  lg:flex-row items-start">
            <p className=" lg:indent-8 text-black text-xl mb-10">{event.about[0]}</p>
            <div className = "flex flex-col w-full">
        {event.images[0] == "" ? (<></>) : (<img className = ""src ={`/assets/events/images/${event.images[0]}`}></img>)}
        <a href = {event.credits[0].link}></a><p className=" text-black/70  mt-5  lg:mb-0 mb-10 text-center italic">{event.credits[0].name=="" ? "": `Taken by ${event.credits[0].name}`}</p>
        </div>
        
        
        </div>
        <div className = "justify-center items-center w-full flex flex-col lg:gap-10 gap-0 lg:mt-10 lg:flex-row lg:items-start">
            {event.video == "" ? 
            
            (<img className = "w-100"src ={`/assets/events/images/${event.images[1]}`}></img>)
            
            :(<video className="lg:w-125" autoPlay loop muted playsInline>

                <source src = {`/assets/events/images/${event.video}`} type = "video/mp4"></source>

            </video>)}
                        <a href = {event.credits[1].link}></a><p className="text-black/70  mt-5  lg:mb-0 mb-10 text-center italic">{event.credits[1].name=="" ? "": `Taken by ${event.credits[1].name}`}</p>

            <p className=" text-black  lg:indent-8 text-xl">{event.about[1]}</p>
        
        
        
        </div>

        
        <h1 className = "text-center mb-10 text-4xl lg:mt-30 mt-10 font-bold text-amber-500">Artists</h1>
        <div className = "lg:flex-row flex-col justify-around flex lg:items-center">
        {event.artists.map((artist, i) => (<>

                <div className = "flex flex-row underline decoration-1 decoration-black">
                <a href = {artist.link} className="flex flex-row w-full "><h1 className = " lg:text-4xl text-xl lg:pb-30 pb-5" key={i}>{artist.name}</h1>
                <ArrowUpRight /></a>
                </div>
                <p key = {i}>{artist.picture}</p>
                
        
        </>))}
        </div>

        <h1 className = "text-center mb-10 text-4xl mt-10 font-bold text-amber-500">Mentioned</h1>
        <div className = "underline decoration-1 decoration-black lg:flex-row flex-col justify-around flex lg:items-center">
        {event.mentions.map((mentioned, i) => (<>

                <div className = "flex flex-row">
                <a href = {mentioned.link} className="flex flex-row w-full " ><h1 className = "lg:text-4xl text-xl pb-5" key={i}>{mentioned.name}</h1>
                <ArrowUpRight /></a>
                </div>
                
                
        
        </>))}
        </div>

        </div>

        

    </>)


}

export default EventInfo
import { createFileRoute } from '@tanstack/react-router'
import {Button} from '../components/ui/button'
import {StyledButton} from '../components/ui/button'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div className=" px-5 py-30 w-screen min-h-screen flex flex-col page-wrap">
    
    
    <h1 className='text-6xl font-black  text-amber-500'>WHO WE ARE</h1>
    <p className='text-xl pt-10 '>We're an art event production company and clothing brand based in South Florida that specializes in bringing art and creative experiences to cities around the world. We believe in platforming emerging arists that are making compelling work,
      while also building a community around a love for art, tech, and design. Ultimately, we want to intentionally curate spaces for poeple to experience art in a way that is accessible, engaging and fun. Our merchandise, primarily only sold in person, serves as a
      physical memorabilia of the experiences we create, and as a way to support the artists we work with. We also want to use our platform to support causes that are important to us, and to give back to the communities we operate in.
    </p>

    <StyledButton color = "amber-500" className='mt-10'>View our past events</StyledButton>
    
    </div>)
}

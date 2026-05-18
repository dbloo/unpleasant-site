import { createFileRoute } from '@tanstack/react-router'
import {Resend} from "resend"
import {db} from "@/db"

import {contactFormSchema} from "@/lib/validation"

export const Route = createFileRoute('/api/contact/$')({
  component: RouteComponent,
})

async function POST({request}: {request: Request}) {

    const key = process.env.RESEND_KEY
    if(!key){
        console.error("Resend key is missing");
        return new Response("Internal Server Error", {status: 500})
    }

    const resend = new Resend(key);

    try{
        const body = await request.json()

        

        const parsed = contactFormSchema.safeParse(body);

   

         
    

    await resend.emails.send({
        from: "The Wisteria <onboarding@resend.dev>",
        to: ["info@thewisteriavenue.com"],
        subject: ` `,

        html: `
            <h2></h2>
            <p><strong>Name:</strong> </p>
            <p><strong>Email:</strong></p>
            <p><strong></p>
            <p><strong>Occasion:</p>
            <p><strong>Message:</strong></p>
            <p></p>
      `,

    });
    }

    catch(error){
        console.error("Error parsing request body:", error)
        return new Response("Bad Request", {status: 400})
    }

    
}

function RouteComponent() {
  return (

    <></>

  )
}

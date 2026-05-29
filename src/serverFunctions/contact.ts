import {createServerFn} from '@tanstack/react-start'

import {db} from '../db'
import {contactFormSubmissions, emails} from '../db/schema'
import {z} from 'zod'
import { sql } from 'drizzle-orm'
import {Resend} from 'resend'
import {ContactTemplate, NewsletterTemplate} from "@/components/emailtemplates"

import { render } from '@react-email/components'
import { parsePgArray } from 'drizzle-orm/pg-core'



  const resend = new Resend(process.env.RESEND_KEY);


const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
})

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address.')
})

export const submitContactForm = createServerFn({ method: 'POST' })
  .handler(async (ctx: any) => {
        const parsed = contactSchema.parse(ctx.data)

        try{

        await db.insert(contactFormSubmissions).values({name: parsed.name, email: parsed.email, message:parsed.message})
        
        const html = await render(
          ContactTemplate({
            name: parsed.name,
            email: parsed.email,
            message: parsed.message,
          })
        )

        await resend.emails.send({
      from: 'unplsnt.com <onboarding@resend.dev>',
      to: [`hello@unplsnt.com`],
      subject: 'New Contact Message',
      html: `${html}`
    })
        return { success: true }

        }
        catch (e: any){

          throw e
        }
    })

export const submitEmailForm = createServerFn({method: 'POST'})
    .handler(async (ctx: any) => {
        const parsed = emailSchema.parse(ctx.data)
        await db.insert(emails).values({email: parsed.email})

        console.log(ctx.data.email)


  try{

    const html = await render(
          NewsletterTemplate()
        )

    await resend.emails.send({
      from: 'Studio Unpleasant <hello@unplsnt.com>',
      to: [`${ctx.data.email}`],
      subject: 'You\'re in!',
      html: `${html}`
    })

    console.log('email sent successfully')

    return {success:true}


    }catch (e: any){

      console.error('Failed to send email: ', e.message, e.code, e.detail)

      throw e
    }
    })

  
// export const sendEmail = createServerFn({method: 'POST'})
// .handler(async (ctx: any) => {
//   console.log(ctx.data.email)


//   try{

//     const html = await render(
//           NewsletterTemplate()
//         )

//     await resend.emails.send({
//       from: 'Studio Unpleasant <hello@unplsnt.com>',
//       to: [`${ctx.data.email}`],
//       subject: 'You\'re in!',
//       html: `${html}`
//     })

//     console.log('email sent successfully')

//     return {success:true}


//     }catch (e: any){

//       console.error('Failed to send email: ', e.message, e.code, e.detail)

//       throw e
//     }

// })
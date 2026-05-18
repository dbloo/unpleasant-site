import { createFileRoute } from '@tanstack/react-router'
import {useForm} from '@tanstack/react-form'

import {
  Field,
  FieldError,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"

import { z } from 'zod'
import { StyledButton } from '#/components/ui/button'
import { contactFormSchema } from '../lib/validation'






export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {

   

const contactForm = useForm({
  validators: { onSubmit: contactFormSchema},
  defaultValues: {
    name: '',
    email: '',
    message: '',
  },
  onSubmit: async (values) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        alert('Message sent successfully!')
        contactForm.reset()
      } else {
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('An error occurred. Please try again later.')
    }
  }
})
  return (
    <section className="w-screen h-auto lg:p-20 pt-20 p-5">

        <div className="mt-10 w-full h-250 flex flex-col gap-5">
        <h1 className = "lg:text-8xl text-6xl font-black text-amber-500">Reach Out.</h1>
        <p>Interested in working with us? Feel free to drop a line!</p>

        <div className="w-full h-auto">
            <FieldSet>
                
                <FieldGroup>
                    <p className='mt-10'>Name</p>
                    <contactForm.Field name="name"
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
                                    placeholder = "e.g John Doe"
                                    autoComplete = "off"
                                    className = "text-lg border-amber-500"
                                />

                                {isInvalid && <FieldError errors = {field.state.meta.errors}/>}

                            </Field>
                        )
                    }}/>

                    <p className = "mt-5">Email</p>
                    <contactForm.Field name="email"
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
                                    placeholder = "e.g john.doe@example.com"
                                    autoComplete = "off"
                                    className = "text-lg border-amber-500"
                                />

                                {isInvalid && <FieldError errors = {field.state.meta.errors}/>}

                            </Field>
                        )
                    }}/>

                    <p className = "mt-5">Message</p>
                    <contactForm.Field name="message"
                    children = {(field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return(
                            <Field>

                                <Textarea
                                    id= {field.name}
                                    name= {field.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                    aria-invalid={isInvalid}
                                    placeholder = ""
                                    autoComplete = "off"
                                    className = "text-lg mt-0 items-start border-amber-500 h-80"
                                />

                                {isInvalid && <FieldError errors = {field.state.meta.errors}/>}

                            </Field>
                        )
                    }}/>

                    <StyledButton type = "submit" onClick={contactForm.handleSubmit} className = "w-full" color='amber-500'>Submit</StyledButton>


                </FieldGroup>

            </FieldSet>
        </div>
        </div>

    </section>)
}

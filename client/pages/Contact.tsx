import React, { FormEvent, useEffect, useRef, useState } from "react"
import Nav from "../components/layout/Nav"
import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const keyId = import.meta.env.VITE_PUBLIC_KEY

function Contact() {
  const titleArray = "Contact".split("")
  const timerId = useRef<number>()
  const form = useRef<string | HTMLFormElement>()
  const [notification, setNotification] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)

    if(formData.name === "" || !validEmail || formData.message === "") {
      setMessage('Fill in ALL the form, correctly.')
      setNotification(true)
    } else {
      // eslint-disable-next-line promise/catch-or-return
      emailjs
        .sendForm(serviceId, templateId, form.current as string | HTMLFormElement, {
          publicKey: keyId,
        })
        .then(
          () => {
            setMessage('Thanks for getting in contact, I will reply when I feel like it.')
            setFormData({name: '', email: '', message: ''})
            setNotification(true)
            timerId.current = window.setTimeout(() => {
              setNotification(false)
            }, 5000)
          },
          (error) => {
            // console.log('FAILED...', error.text)
            setMessage('Something went wrong (oh no!), please try again.')
            setNotification(true)
          },
        )
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerId.current)
    }
  }, [])

  const handleReset = (e: FormEvent) => {
    e.preventDefault()
    setFormData({name: '', email: '', message: ''})
    setNotification(false)
  }

  return (
    <main className="contact-container">
      <header>
        {titleArray.map((letter, idx) => (
          <h1 key={`${letter}-${idx}`}>{letter}</h1>
        ))}
      </header>

      <Nav />

      <section className="background-image">
        <section className="contact-info-container">
          <span>
            If you are interested in commissioning art, or working together on a project (be that programming, art, or anything else) -- use the below form to get in contact with me.
          </span>
        </section>

        <section className="contact-form-container">

          <form ref={form} onSubmit={handleSubmit}>
            <span className="window-header">
              <div className="button">_</div>
              <div className="button">O</div>
              <div className="button">X</div>
            </span>
            
            <span>
              Please make sure your name and email are correct so that communications can proceed without issue.
            </span>

            <span className="name-email">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </span>

            <span className="message">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            </span>

            <span className="joke-message">
              Your information will be saved and sold to the highest bidder.* This is a joke.**
            </span>

            <span className="button-container">
              <button type="submit" value="Send">SEND</button>
              <span className="pps">**this isn't a joke</span>
              <button onClick={handleReset}>RESET</button>
            </span>

          </form>

          {notification &&
            <div className="notification">
              <p>{message}</p>
            </div>
          }

        </section>
      </section>
    </main>
  )
}

export default Contact 
import React, { useRef, useState } from "react";
import './contactStyle.css'
import emailjs from '@emailjs/browser';

function Contact(props) {
  const form = useRef()

  const sendEmail = (e) => {
    
    e.preventDefault() 
    const name = document.querySelector('#name')
    const message = document.querySelector('#message')
    const emailInput = document.querySelector('#email')

    if (name.value == ' ' || message.value == ' ' || !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      alert('Something get wrong ! ')
    } else {
      emailjs.sendForm('service_3fdj0js', 'template_n7iku69', form.current, 'nhvADr2G-rlep_jlW')
        .then((result) => {
          // console.log(result.text);
          alert('Message sent !')
        }, (error) => {
          console.log(error.text)
          alert('Wrong Message !')
        })
    }
  } 

  return (

    <div className="contactPage" style={{ color: props.textColor }}>
      <h1 style={{ color: props.color }}> Contact </h1>

      <div className="header">
        <h2 style={{ color: props.color }}> Have you any questions? </h2>
        <p> I'm at your services </p>
      </div>

      <div className="connection">
        <div className="phone box">
          <i
            style={{
              color: props.color,
              fontSize: "30px",
              margin: "auto",
              marginBottom: "10px"
            }}
            class="fa-solid fa-phone"
          ></i>
          <p> calls us on </p>
          <span> +994 55 778 33 24 </span>
        </div>
        <div className="office box">
          <i
            style={{
              color: props.color,
              fontSize: "30px",
              margin: "auto",
              marginBottom: "10px"
            }}
            class="fa-sharp fa-solid fa-location-dot"
          ></i>
          <p> Office </p>
          <span> Azerbaijan , Baku </span>
        </div>
        <div className="email box">
          <i
            style={{
              color: props.color,
              fontSize: "30px",
              margin: "auto",
              marginBottom: "10px"
            }}
            class="fa-solid fa-envelope"
          ></i>
          <p> Email </p>
          <span> bunyamin2002@mail.ru </span>{" "}
        </div>
        <div className="website box">
          <i
            style={{
              color: props.color,
              fontSize: "30px",
              margin: "auto",
              marginBottom: "10px"
            }}
            class="fa-solid fa-earth-americas"
          ></i>
          <p> Website </p>
          <span> null </span>
        </div>
      </div>

      <div className="respons">
        <h2 style={{ color: props.color }}> send me an email</h2>
        <p> I'm very responsive to messages </p>
      </div>

      <div className="form" >

        <form ref={form} onSubmit={sendEmail} >
          <div className="person">
            <input
            required
              style={{ color: props.textColor }}
              type="text"
              placeholder="Name"
              name="user_name"
              id="name"
            />
            <input
              required 
              style={{ color: props.textColor }}
              type="email"
              placeholder="Email"
              name="user_email"
              id="email"
            />
          </div>

          <input
            style={{ color: props.textColor }}
            type="text"
            placeholder="Subject"
          />
          <textarea
          required
            style={{ color: props.textColor }}
            placeholder="Message"
            name="message"
            id="message"
            rows="3"
          />

          <div className="button">
            <input type="submit" value="Send Message" style={{ background: props.color }} />
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact
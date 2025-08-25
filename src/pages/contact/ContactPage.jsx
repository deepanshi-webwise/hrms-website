import React, { useEffect } from 'react'
import { Contact } from '../../component'

const ContactPage = () => {
    useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  });
  return (
    <div>
        <Contact/>
    </div>
  )
}

export default ContactPage
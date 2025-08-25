import React, { useEffect } from 'react'
import { BankingSolution, Faq, ServiceDetails, ServiceSection } from '../../component'

const Banking = () => {
    useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  });
  return (
    <div>
        <BankingSolution/>
        <ServiceSection/>
        <ServiceDetails/>
        <Faq/>
    </div>
  )
}

export default Banking
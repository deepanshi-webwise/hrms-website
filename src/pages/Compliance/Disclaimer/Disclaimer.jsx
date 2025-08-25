import { useEffect } from 'react';
import Notice from './Notice'

const Disclaimer = () => {
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  return (
    <>
    <Notice/>
    </>
  )
}

export default Disclaimer
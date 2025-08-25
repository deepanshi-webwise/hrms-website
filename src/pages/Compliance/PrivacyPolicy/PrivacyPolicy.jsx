import { useEffect } from "react";
import Policy from "./Policy";

const PrivacyPolicy = () => {
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  return (
    <>
      <Policy />
    </>
  );
};

export default PrivacyPolicy;

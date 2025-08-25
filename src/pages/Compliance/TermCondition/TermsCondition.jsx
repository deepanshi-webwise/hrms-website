import { useEffect } from "react";
import Terms from "./Terms";

const TermsCondition = () => {
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  return (
    <>
      <Terms />
    </>
  );
};

export default TermsCondition;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About,  Banking,  ContactPage,  Discliamer,  Home, PrivacyPolicy, TermCondition  } from "./pages";
import { Layout } from "./component";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/banking-solutions" element= {<Banking />} />     
          <Route path="/privacy-and-policy" element= {<PrivacyPolicy />} />     
          <Route path="/terms-and-condition" element= {<TermCondition />} />     
          <Route path="/disclaimer" element= {<Discliamer />} />     
          <Route path="/contact" element={<ContactPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

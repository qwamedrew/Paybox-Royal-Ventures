import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Hero from "./pages/user/Hero";
import About from "./pages/user/About";
import FormExample from "./components/FormExample";
import ProductShowcase from "./components/ProductShowcase";
import ModalDemo from "./components/ModalDemo";
import ProductCG from "./pages/user/ProductCG";
import ServiceHighlight from "./pages/user/ServiceHighlight";
import TestimonialsAndPartners from "./pages/user/TestimonialsAndPathers";
import LoginSignup from "./pages/user/LoginSignup";
import AccountProfileMain from "./pages/user/AccountProfileMain";
import ContactFormFD from "./components/ContactFormFD";
import ProductInquiryFormFD from "./components/ProductInquiryFormFD";
import QuoteRequestFormFD from "./components/QuoteRequestFormFD"
import FeedbackErrorFD from "./components/FeedbackErrorFD"
import Rootlayout from "./layout/Rootlayout";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* route for Routelayout */}
          <Route path="/" element={<Rootlayout />} >
            <Route index element={<Hero />} />
            <Route path="productcg" element={<ProductCG />} />
            <Route path="about" element={<About />} />
            <Route path="servicehighlight" element={<ServiceHighlight />} />
            <Route path="testimonialandpartners" element={<TestimonialsAndPartners />} />
            <Route path="form" element={<FormExample />} />
            <Route path="showcase" element={<ProductShowcase />} />
            <Route path="modal " element= {<ModalDemo />} />
            <Route path="loginsignup"element={<LoginSignup />} />
            <Route path="accountprofilemain"element={<AccountProfileMain />} />
            <Route path="contactfd"element={<ContactFormFD />} />
            <Route path="productinquiryfd"element={<ProductInquiryFormFD />} /> 
            <Route path="quoterequestfd"element={<QuoteRequestFormFD />} />
            <Route path="feedbackfd"element={<FeedbackErrorFD />} />
          {/* </Route> */}
          {/* route for the Dashboard */}
           
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

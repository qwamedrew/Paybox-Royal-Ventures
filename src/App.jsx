import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Hero from "./pages/user/Hero";
import About from "./pages/user/About";
// import FormExample from "./components/FormExample";
import ProductShowcase from "./components/ProductShowcase";
import ModalDemo from "./components/ModalDemo";
import ProductCG from "./pages/user/ProductCG";
import ServiceHighlight from "./pages/user/ServiceHighlight";
import TestimonialsAndPartners from "./pages/user/TestimonialsAndPathers";
import LoginSignup from "./pages/user/LoginSignup";
import AccountProfileMain from "./pages/user/AccountProfileMain";
import ContactFormFD from "./components/ContactFormFD";
import ProductInquiryFormFD from "./components/ProductInquiryFormFD";
import QuoteRequestFormFD from "./components/QuoteRequestFormFD";
import FeedbackErrorFD from "./components/FeedbackErrorFD";
import Rootlayout from "./layout/Rootlayout";
import AdminProfile from "./pages/user/AdminProfile";
import Import from "./pages/user/import";
import Export from "./pages/user/Export";
import LoginSignupAdmin from "./pages/user/LoginSignupAdmin";
import CartPreview from "./pages/user/CartPreview";

import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* route for Routelayout */}
            <Route path="/" element={<Rootlayout />}>
              <Route index element={<Hero />} />
              <Route path="productcg" element={<ProductCG />} />
              <Route path="about" element={<About />} />
              <Route path="servicehighlight" element={<ServiceHighlight />} />
              <Route
                path="testimonialandpartners"
                element={<TestimonialsAndPartners />}
              />
              {/* <Route path="form" element={<FormExample />} /> */}
              <Route path="showcase" element={<ProductShowcase />} />
              <Route path="modal " element={<ModalDemo />} />
              <Route path="loginsignup" element={<LoginSignup />} />
              <Route path="loginsignupad" element={<LoginSignupAdmin />} />
              <Route
                path="accountprofilemain"
                element={<AccountProfileMain />}
              />
              <Route path="contactfd" element={<ContactFormFD />} />
              <Route
                path="productinquiryfd"
                element={<ProductInquiryFormFD />}
              />
              <Route path="cart" element={<CartPreview />} />
              <Route path="quoterequestfd" element={<QuoteRequestFormFD />} />
              <Route path="feedbackfd" element={<FeedbackErrorFD />} />
              <Route path="adminprofile" element={<AdminProfile />} />
              <Route path="import" element={<Import />} />
              <Route path="export" element={<Export />} />
              {/* </Route> */}
              {/* route for the Dashboard */}
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

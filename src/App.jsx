import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import CourseDetailsPage from "./pages/CoursePage";
import RegistrationForm from "./pages/RegisterForm";
import up from './assets/up2.png'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import GenDis from "./pages/GeneralDisclaimer";
import Terms from "./pages/Termsofuse";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/register-course" element={<RegistrationForm />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/gendis" element={<GenDis />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <div className="fixed bottom-10 right-10">
        <button className="w-10 h-10 flex justify-center items-center hover:scale-110 duration-300 ease-in-out rounded-full animate-bounce" onClick={handleScrollToTop}>
          <img src={up} className="w-8" />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
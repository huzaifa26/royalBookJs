import { BrowserRouter, Route, Routes, useLocation, Link } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import General from './components/FAQs/General';
import Account from './components/FAQs/Account';
import Barbers from './components/FAQs/Barbers';
import Clients from './components/FAQs/Clients';
import Pricing from './components/FAQs/Pricing';
import AnimatedPage from "./components/Layout/AnimatedPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Profiles from "./pages/Profiles";
import UserInfo from "./pages/UserInfo";
import Information from "./components/UserInfo/Information";

function App() {
  return (
    <div className="w-[calc(100vw - 100%)] m-auto">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AnimatedPage><Home /></AnimatedPage>}></Route>
          <Route path='faq' element={<AnimatedPage><FAQ /></AnimatedPage>}>
            <Route index element={<General />}></Route>
            <Route path='account' element={<Account />}></Route>
            <Route path='barbers' element={<Barbers />}></Route>
            <Route path='clients' element={<Clients />}></Route>
            <Route path='pricing' element={<Pricing />}></Route>
          </Route>
          <Route path='privacy' element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>}></Route>
          <Route path='term' element={<AnimatedPage><Terms /></AnimatedPage>}></Route>
          {/* <Route path='profiles' element={<Profiles />}></Route> */}
          <Route path=":username" element={<UserInfo />}></Route>
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App

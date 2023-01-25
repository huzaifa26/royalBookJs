import { BrowserRouter, Route, Routes, useLocation, Link } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import General from './components/FAQs/General';
import Account from './components/FAQs/Account';
import Barbers from './components/FAQs/Barbers';
import Clients from './components/FAQs/Clients';
import Pricing from './components/FAQs/Pricing';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimatedPage from "./components/Layout/AnimatedPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="w-[calc(100vw - 100%)] m-auto">
      
      <BrowserRouter>
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
            {/* <Route path='privacy' element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>}></Route> */}
            {/* <Route path='term' element={<AnimatedPage><Terms /></AnimatedPage>}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter >
    </div >
  )
}

export default App

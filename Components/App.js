import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

import FAQs from "../Pages/FAQs";
import UsAndYou from "../Pages/UsAndYou";
import GoingPrivate from "../Pages/GoingPrivate";
import Legals from "../Pages/Legals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/UsAndYou" element={<UsAndYou />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/GoingPrivate" element={<GoingPrivate />} />
        <Route path="/Legals" element={<Legals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

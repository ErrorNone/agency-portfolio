import "./style/reset.scss";
import "./app.scss";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Contacts } from "./pages/Contacts";
import { NotFound404 } from "./pages/NotFound";
import BrandingPage from "./pages/selected-pages/BrandingPage";
import DesignPage from "./pages/selected-pages/DesignPage";
import IllustrationPage from "./pages/selected-pages/IllustrationPage";
import MotionPage from "./pages/selected-pages/MotionPage";
import { InDevelopment } from "./pages/InDevelopment";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <div className="page">
        <Header />
        <Routes>
            <Route element={<MainPage />} path="/" />
            <Route element={<BrandingPage />} path="/branding" />
            <Route element={<DesignPage />} path="/design" />
            <Route element={<IllustrationPage />} path="/illustration" />
            <Route element={<MotionPage />} path="/motion" />
            <Route element={<InDevelopment />} path="/notReady" />
            <Route element={<Contacts />} path="/contacts" />
            <Route element={<NotFound404 />} path="*" />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import Providers from "./Providers";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.page";
import { BrowserRouter } from "react-router-dom";
import LocalValidator from "./Pages/LocalValidator";
import NotFound from "./Pages/NotFound.page";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="validator" element={<LocalValidator/>} />
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;

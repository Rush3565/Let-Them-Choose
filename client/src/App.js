import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Stories from "./pages/Stories";
import Articles from "./pages/Articles";
import SpeakOut from "./pages/SpeakOut";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/speakout" element={<SpeakOut />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { Routes, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from './components/home/Home';
import Features from './components/home/features/Features';
import Login from './components/login/Login';
import Footer from "./components/footer/Footer";
import Downloads from "./components/home/downloadsSection/Downloads";
import Questions from "./components/home/questions/Questions";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="pricing" element={<Downloads/>} />
          <Route path="contact" element={<Questions/>} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

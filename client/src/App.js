import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/ds" element={<Dashboard />}/>
            {/* <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

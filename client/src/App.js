import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import dashboard_A from './pages/dashboard_A';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import dashboard_E from './pages/dashboard_E';
import Dashboard_E from './pages/dashboard_E';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/" element={<Dashboard_E />}/>
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

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import logo from "./Nephelis.png"; // Logonun yolu

// About sayfası bileşeni
function About() {
  return (
    <div className="min-h-screen p-5 md:p-10 bg-base-200 text-base-content">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">About Nephelis</h1>
      <p className="text-base md:text-lg">
        Welcome to the about page of Nephelis! We are a cutting-edge SaaS platform...
      </p>
    </div>
  );
}

// Home sayfası bileşeni
function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center">
      <div className="w-full md:w-2/3 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Nephelis</h2>
        <p className="text-base md:text-lg">
          Nephelis is a cutting-edge SaaS-based performance and automated non-functional testing framework
          designed to address industry challenges like cost, complexity, and scalability. By integrating 
          the Grafana k6 framework, Nephelis delivers a user-friendly interface for real-time load testing, 
          equipped with AI-driven insights.
        </p>
        <button
          onClick={() => window.location.href = "https://senin-hostladigin-site.github.io"}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
        </button>
      </div>

      <div className="w-full md:w-1/3 flex justify-center">
        <img src={logo} alt="Nephelis Logo" className="w-32 h-32 md:w-48 md:h-48" />
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-200 p-5 md:p-10">
        {/* Header */}
        <header className="navbar bg-base-100">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">Nephelis</h1>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0 hidden md:flex">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Contact Us Section */}
        <section className="p-5 md:p-10 bg-base-100 text-base-content">
          <h2 className="text-2xl font-bold mb-4">Let Us Reach Out to You</h2>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full md:w-1/2 mb-4 md:mb-0 md:mr-4"
            />
            <button className="btn btn-primary">Submit</button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer p-5 md:p-10 bg-base-100 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Load Testing</a>
            <a className="link link-hover">Performance Analysis</a>
            <a className="link link-hover">Real-Time Monitoring</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a href="https://www.linkedin.com/company/nephelis/about/" className="link link-hover" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="link link-hover">About Us</a>
          </div>
          <div>
            <span className="footer-title">Contact</span>
            <p>nephelis@gmail.com</p>
            <p>Metehan Yaka</p>
            <p>+90 538 373 01 66</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

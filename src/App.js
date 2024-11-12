import React from "react";
import logo from "./Nephelis.png"; // Logonun yolu

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="Nephelis Logo" className="w-16 h-16" /> {/* Logo */}
          <a className="btn btn-ghost normal-case text-xl ml-4">MyLandingPage</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </header>

      <main className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Our Project!</h1>
            <p className="py-6">
              Our project aims to revolutionize how we approach engineering challenges through an integrated, multidisciplinary design. The concept brings together innovative methodologies to achieve impactful outcomes while managing risks efficiently.
            </p>
            <h2 className="text-3xl font-bold mt-6">Key Features</h2>
            <ul className="list-disc text-left mx-auto mt-4">
              <li>Comprehensive research and background analysis to address critical engineering needs.</li>
              <li>Well-structured methodology with defined work packages and timelines.</li>
              <li>Impact analysis highlighting the significance and potential benefits of our outcomes.</li>
              <li>Risk management strategies to mitigate challenges throughout the development process.</li>
            </ul>
            <button className="btn btn-primary mt-6">Learn More</button>
          </div>
        </div>
      </main>

      <footer className="footer p-10 bg-base-100 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

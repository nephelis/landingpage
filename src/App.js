import React from "react";
import logo from "./Nephelis.png"; // Logonun yolu

function App() {
  return (
    <div className="min-h-screen bg-base-200 p-5 md:p-10">
      <header className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold">Nephelis</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 hidden md:flex">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </header>

      <main className="flex flex-col md:flex-row min-h-screen items-center">
        <div className="w-full md:w-2/3 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Nephelis</h2>
          <p className="text-base md:text-lg">
            Nephelis is a cutting-edge SaaS-based performance and automated non-functional testing framework
            designed to address industry challenges like cost, complexity, and scalability. By integrating 
            the Grafana k6 framework, Nephelis delivers a user-friendly interface for real-time load testing, 
            equipped with AI-driven insights. The platform's scalable architecture makes it suitable for 
            various team sizes, leveraging a cost-effective pay-as-you-go model.
          </p>
          <p className="text-base md:text-lg mt-4">
            Key features include real-time performance analysis, efficient integration with CI/CD pipelines, 
            and cloud-based infrastructure that dynamically scales resources. The platform aims to optimize 
            software performance, reduce fixed costs, and ensure reliability under peak loads, making it a 
            valuable tool for both startups and large enterprises.
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img src={logo} alt="Nephelis Logo" className="w-32 h-32 md:w-48 md:h-48" />
        </div>
      </main>

      <footer className="footer p-5 md:p-10 bg-base-100 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Load Testing</a>
          <a className="link link-hover">Performance Analysis</a>
          <a className="link link-hover">Real-Time Monitoring</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col">
      <div className="container mx-auto flex-grow px-6 py-12">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
            About Us
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
            <p className="text-lg leading-7">
              Many students aspiring to study in the US face difficulties in
              finding accurate and comprehensive guidance on college admissions.
              Our platform aims to bridge this gap by providing detailed and
              personalized guidance to help students make informed decisions
              about their education.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Creator</h2>
            <p className="text-lg leading-7">
              This project is created by <strong>Steve Joseph</strong>. It's a
              culmination of my passion for education and technology. My goal is
              to make the college application process smoother and more
              transparent for students around the world.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">About the Site</h2>
            <p className="text-lg leading-7">
              Welcome to our college guidance website designed for students
              aspiring to gain admission to colleges in the US. Our mission is
              to provide comprehensive resources and personalized guidance to
              help you navigate the complex process of college admissions. So
              far, we have developed a detailed guidance page, and we are
              working on implementing an AI assist feature that will offer
              real-time advice and support. Making this platform has always been
              my dream, and I'm thrilled to see it come to life.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

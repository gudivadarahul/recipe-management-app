"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBook, FaClipboardList, FaUsers, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center py-6">
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    ></motion.div>
    <div className="flex items-center space-x-8">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link
          href="/sign-up"
          className="text-primary-700 hover:text-primary-800 transition-colors"
        >
          Sign Up
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/sign-in"
          className="px-6 py-2 rounded-full bg-primary-gradient text-white hover:opacity-90 transition-opacity shadow-soft hover:shadow-hover"
        >
          Sign In
        </Link>
      </motion.div>
    </div>
  </nav>
);

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex flex-col items-center text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-6xl md:text-7xl font-bold text-gradient mb-4 pb-4"
      >
        Preserve Your Culinary Legacy
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-textLight mb-10 max-w-2xl leading-relaxed"
      >
        The Forgotten Cookbook: Where cherished family recipes meet modern
        technology. Keep your heritage alive, one dish at a time.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex w-full max-w-md mb-8"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-full border-2 border-primary-500 focus:outline-none focus:border-primary-600 transition-colors"
        />
        <button
          className="px-6 py-2 rounded-r-full text-white bg-primary-gradient hover:opacity-90 transition-all duration-200 shadow-soft hover:shadow-hover flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="mr-2">Start Now</span>
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-primary-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
  >
    <motion.div
      className="text-5xl text-primary-600 mb-6 flex justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-serif font-bold text-primary-700 mb-4">
      {title}
    </h3>
    <p className="text-primary-800">{description}</p>
  </motion.div>
);

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl md:text-5xl font-bold text-gradient text-center mb-12 pb-4"
      >
        Why Use The Forgotten Cookbook?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureCard
          icon={<FaBook />}
          title="Preserve Family Recipes"
          description="Digitize and safeguard your cherished family recipes for generations to come"
        />
        <FeatureCard
          icon={<FaClipboardList />}
          title="Easy Organization"
          description="Categorize, tag, and search your recipes with just a few clicks"
        />
        <FeatureCard
          icon={<FaUsers />}
          title="Share with Loved Ones"
          description="Collaborate and share your culinary heritage with family and friends"
        />
      </div>
    </div>
  </section>
);

const CallToAction: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 text-center bg-primary-gradient text-white rounded-lg my-20 shadow-lg"
    >
      <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Start Preserving Your Recipes Today
      </h2>
      <p className="text-xl mb-10 max-w-2xl mx-auto">
        Join thousands of others in keeping their culinary heritage alive.
        <br />
        Don&apos;t let another family recipe fade away.
      </p>
      <button
        className="px-10 py-4 text-lg font-semibold rounded-full bg-white text-primary-700 hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="mr-2">Create Your Cookbook</span>
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowRight />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.section>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-text">
      <div className="container mx-auto px-4">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <CallToAction />
        </main>
        <footer className="py-8 text-center text-textLight">
          © {new Date().getFullYear()} The Forgotten Cookbook. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HowToBuyCrypto: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="howtobuy"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-6 md:py-8"
      variants={staggerContainer}
    >
      {/* Heading */}
      <motion.h2
        className="text-white font-semibold text-center text-4xl md:text-6xl"
        variants={fadeInUp}
      >
        HOW TO BUY
      </motion.h2>
      <motion.p
        className="tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        STEP-BY-STEP GUIDE
      </motion.p>

      {/* Content */}
      <div className="container mx-auto max-w-screen-lg px-6 md:px-12">
        <motion.div
          className="bg-[rgba(31,31,31,0.5)] border border-gray-700 rounded-lg p-6 md:p-8 space-y-6 shadow-lg"
          variants={staggerContainer}
        >
          <motion.p
            className="text-gray-300 text-sm md:text-lg md:flex md:justify-center"
            variants={fadeInUp}
          >
            <span className="text-blue-400 font-bold">1.</span>
            ‎ Download Solfare or Phantom Wallet
          </motion.p>
          <motion.p
            className="text-gray-300 text-sm md:text-lg md:flex md:justify-center"
            variants={fadeInUp}
          >
            <span className="text-purple-400 font-bold">2.</span>
            ‎ Buy ‎<strong className="text-white">$SOL</strong>‎ from a centralized exchange or your wallet.
          </motion.p>
          <motion.p
            className="text-gray-300 text-sm md:text-lg md:flex md:justify-center"
            variants={fadeInUp}
          >
            <span className="text-blue-400 font-bold">3.</span>‎ Jump to ‎<a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500 transition-colors"
            >pump.fun</a>‎ and link your wallet.
          </motion.p>
          <motion.p
            className="text-gray-300 text-sm md:text-lg md:flex md:justify-center"
            variants={fadeInUp}
          >

            <span className="text-purple-400 font-bold">4.</span>‎ Search ‎<strong className="text-white">Halo</strong>‎ on ‎<a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-500 transition-colors"
            >pump.fun</a>.
          </motion.p>
        </motion.div>
      </div>

    </motion.section>
  );
};

export default HowToBuyCrypto;

"use client";
import { motion } from "framer-motion";

export const HandStar = ({ className = "", color = "#00e5ff" }) => (
  <motion.svg 
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className={className} width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L14.81 8.62L22 9.24L16.55 13.97L18.18 21L12 17.27L5.82 21L7.45 13.97L2 9.24L9.19 8.62L12 2Z" 
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={`${color}33`}/>
  </motion.svg>
);

export const Squiggle = ({ className = "" }) => (
  <svg className={className} width="60" height="20" viewBox="0 0 63 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 18C2 18 10 2 20 2C30 2 35 18 45 18C55 18 61 2 61 2" stroke="#FFD100" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
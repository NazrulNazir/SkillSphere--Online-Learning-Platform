'use client';

import { motion } from "framer-motion";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent"
      />
    </div>
  );
}
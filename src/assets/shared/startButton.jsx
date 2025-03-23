import React from "react";
import { motion } from "framer-motion";

const StartButton = () => {
  <a href="https://nuncare-web-app.vercel.app/">
    <motion.button
      className="text-sm md:text-lg bg-redNun text-white p-2 rounded-md mt-10"
      whileHover={{ scale: 1.1 }}
    >
      Commencer
    </motion.button>
  </a>;
};

export default StartButton;

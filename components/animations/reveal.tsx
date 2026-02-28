"use client"

import React from "react"
import { motion } from "framer-motion"

type Props = React.PropsWithChildren<{
  initialX?: number
  initialY?: number
  duration?: number
  delay?: number
  amount?: number
  once?: boolean
}>

const Reveal = ({
  children,
  initialX = 0,
  initialY = 0,
  duration = 0.8,
  delay = 0,
  amount = 0.3,
  once = true,
}: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ amount, once }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  )
}

export default Reveal
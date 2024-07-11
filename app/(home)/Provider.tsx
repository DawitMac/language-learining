"use client"
import { AnimatePresence } from 'framer-motion'
import React from 'react'


const Provider = ({ children} : { children : React.ReactNode}) => {
  return (
    <AnimatePresence>
        {children}
    </AnimatePresence>
  )
}

export default Provider
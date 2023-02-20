import { useState } from 'react'
import Header from './components/Header'
import { motion } from 'framer-motion'
import Landing from './components/Landing'

function Home() {
  return (
    <div className="homeContainer">
      <Header />
      <motion.div
      initial = {{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        duration: 0.5
      }}
      className="App"
      >
        <Landing />
      </motion.div>
      
    </div>
  )
}

export default Home

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@components/Button'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl text-center">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Manikandan M</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-400 mb-8"
        >
          Programmer | Full-Stack Developer Building responsive and functional web experiences with React, ASP.NET, and modern technologies.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
        >
          Passionate about working in professional environments where I can develop emerging technologies and expand my knowledge across the full spectrum of web development.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects">
            <Button size="lg">View My Work</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">Get in Touch</Button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-purple-500/20"
        >
          <p className="text-slate-500 text-sm mb-4">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home

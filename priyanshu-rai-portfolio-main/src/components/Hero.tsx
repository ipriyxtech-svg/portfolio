import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Blockchain Developer",
    "DevOps Engineer", 
    "Network Security Engineer",
    "ML/AI Explorer",
    "Problem Solver"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium"
              >
                <Code className="w-4 h-4 mr-2" />
                Available for new projects
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight text-primary"
              >
                Hi, I'm <span className="text-primary-500">Priyanshu Rai</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-12 flex items-center"
              >
                <span className="text-2xl md:text-3xl text-secondary mr-2">I'm a</span>
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-primary-500 font-bold"
                >
                  {texts[currentText]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl md:text-3xl text-primary-500 ml-1"
                >
                  |
                </motion.span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-secondary max-w-2xl"
              >
                Currently pursuing a Bachelor of Technology in Information Technology
from Rajkiya Engineering College, Azamgarh (2022–2026).

I have experience as a Blockchain Developer Intern,
where I worked on building secure and scalable decentralized applications.

Skilled in Smart Contract development and Hardhat,
with a strong foundation in Linux and Bash scripting.

Passionate about problem-solving and cybersecurity,
with hands-on practice on TryHackMe and competitive programming platforms.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1irjKzZS8F7Iy9tMRwhAMriPm7HAhihH_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Open Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Let's Connect
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-4 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">10+</div>
                <div className="text-sm text-muted">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">100+</div>
                <div className="text-sm text-muted">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">4</div>
                <div className="text-sm text-muted">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">5+</div>
                <div className="text-sm text-muted">Certifications</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <Zap className="w-8 h-8 text-primary-500 mb-2" />
                  <h3 className="font-semibold text-primary">Problem Solver</h3>
                  <p className="text-sm text-secondary">LeetCode, HackerRank</p>
                </div>
                <div className="card p-4">
                  <Users className="w-8 h-8 text-primary-500 mb-2" />
                  <h3 className="font-semibold text-primary">Team Player</h3>
                  <p className="text-sm text-secondary">Collaborative development</p>
                </div>
                <div className="card p-4">
                  <Code className="w-8 h-8 text-primary-500 mb-2" />
                  <h3 className="font-semibold text-primary">Blockchain + Web3 Practice</h3>
                  <p className="text-sm text-secondary">Ethernaut, Capture The Ether</p>
                </div>
                <div className="card p-4">
                  <Zap className="w-8 h-8 text-primary-500 mb-2" />
                  <h3 className="font-semibold text-primary">ML/AI</h3>
                  <p className="text-sm text-secondary">Learning & exploring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
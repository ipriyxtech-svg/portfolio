import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Home = () => {
  const featuredProjects = [
    {
      title: "Real World Asset Tokenization using Blockchain",
      description: "Real World Asset Tokenization | Solidity, Ethereum, Hardhat, Web3, Next.js Built a blockchain-based system that converts real-world assets into digital tokens using smart contracts. Implemented secure asset ownership transfer and MetaMask wallet integration, enabling transparent and decentralized asset trading.",
      technologies: ["Solidity", "Ethereum Blockchain", "Smart Contracts", "Hardhat", "Web3.js", "Ethers.js", "Next.js", "React JS", "MetaMask", "IPFS"],
      image: "/r1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/RealAsset-Tokenization/tree/main/Real-Asset-Tokenizer",
      githubUrl: "https://github.com/ipriyxtech-svg/RealAsset-Tokenization/tree/main/Real-Asset-Tokenizer",
      year: "2024",
      category: "Blockchain"
    },

    {
      title: "Blockchain Based Secure Voting System",
      description: "A decentralized voting application built on the Ethereum blockchain that allows users to securely cast votes using smart contracts. The system ensures transparency, immutability, and tamper-proof election results while preventing double voting through blockchain verification.",
      technologies: ["Solidity", "Ethereum Blockchain", "Smart Contracts", "Hardhat", "React.js", "Web3.js / Ethers.js", "MetaMask", "IPFS"],
      image: "/v1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/voting-system",
      githubUrl: "https://github.com/ipriyxtech-svg/voting-system",
      year: "2024",
      category: "Blockchain"
    },
    {
      title: "EduPilot",
      description:"Learning Platform with AI.",
      technologies: ["Docker", "HTML", "CSS", "JavaScript", "AI Integration", "Node.js", "MongoDB"],
      image: "/l1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/Edupilot",
      githubUrl: "https://github.com/ipriyxtech-svg/Edupilot",
      backendUrl: "https://github.com/ipriyxtech-svg/Edupilot",
      year: "2025",
      category: "Full Stack"
    }
  ]

  const testimonials = [
    {
      name: "CodSoft",
      role: "Web Developer Intern",
      content: "During this internship, Priyanshu developed responsive web applications, collaborated on UI/UX design, and implemented backend services. Successfully contributed to projects that enhanced user engagement and system efficiency.",
      rating: 5
    },
    {
      name: "CodSoft",
      role: "Machine Learning Intern",
      content: "During this internship, Priyanshu developed and trained machine learning models, worked on data preprocessing and feature engineering, and evaluated model performance to improve accuracy. Contributed to projects that enhanced data-driven decision-making and system efficiency.",
      rating: 5
    },
    {
      name: "indolike",
      role: "Machine Learning Intern",
      content: "During this internship, Priyanshu designed and implemented machine learning models, performed data cleaning and feature engineering, and applied model tuning techniques to enhance performance. Contributed to building scalable and efficient predictive systems.",
      rating: 5
    },
  ]

  return (
    <>
      <SEO page="home" />
      <div className="pt-16">
        <Hero />
      
      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800/50 transition-colors duration-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Featured Projects
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              See how I transformed concepts into engaging digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Experience & Recognition
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              My professional journey and achievements in the tech industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-secondary mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home 
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    // Blockchain Projects
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
      description:  "A decentralized voting application built on the Ethereum blockchain that allows users to securely cast votes using smart contracts. The system ensures transparency, immutability, and tamper-proof election results while preventing double voting through blockchain verification.",
      technologies:["Solidity", "Ethereum Blockchain", "Smart Contracts", "Hardhat", "React.js", "Web3.js / Ethers.js", "MetaMask", "IPFS"],
      image: "/v1.png",
      liveUrl:"https://github.com/ipriyxtech-svg/voting-system",
      githubUrl:"https://github.com/ipriyxtech-svg/voting-system",
      year: "2024",
      category: "Blockchain"
    },
    {
      title: "Decentralized Google Drive – Web3 File Storage DApp",
      description: "A decentralized cloud storage platform similar to Google Drive built on the Ethereum blockchain. Users can securely upload, store, and share files using IPFS while smart contracts manage file ownership and access permissions. The system ensures data integrity, decentralization, and enhanced privacy compared to traditional cloud storage services.",   
      technologies: ["Solidity", "Ethereum Blockchain", "Smart Contracts", "Hardhat", "React.js", "Web3.js / Ethers.js", "MetaMask", "IPFS"],
      image: "/d1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/google-drive",
      
      githubUrl: "https://github.com/ipriyxtech-svg/google-drive",
      
      year: "2025",
      category: "Blockchain"
    },
    {
      title: "Wallet Risk Analysis System for Crypto Transactions",
      description: "I added Solidity for writing secure smart contracts, Ethereum Blockchain for decentralized transaction processing, Smart Contracts to automate trustless operations, Hardhat for development and testing, React.js for building an interactive user interface, Web3.js / Ethers.js for blockchain integration, MetaMask for secure wallet authentication, and IPFS for decentralized file storage.",
      technologies:  ["Solidity", "Ethereum Blockchain", "Smart Contracts", "Hardhat", "React.js", "Web3.js / Ethers.js", "MetaMask", "IPFS"],
      image: "/w1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/wallet-risk-final",
      githubUrl: "https://github.com/ipriyxtech-svg/wallet-risk-final",
      year: "2025",
      category: "Blockchain"
    },
    {
      title: "Decentralized Portfolio on Polygon (POL)",
      description: "A decentralized portfolio tracking application built on the Polygon blockchain that allows users to securely connect their crypto wallets and monitor digital assets in real time. The platform uses smart contracts to manage portfolio data while providing a transparent and secure Web3 interface for tracking balances, transactions, and asset performance.",
      technologies: ["Solidity", "Polygon Blockchain", "Smart Contracts", "Hardhat", "React.js", "Web3.js / Ethers.js", "MetaMask", "IPFS"],
       image: "/p1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/Decentralized-Portfolio-",
      githubUrl:"https://github.com/ipriyxtech-svg/Decentralized-Portfolio-",
      year: "2025",
      category: "Blockchain"
    },
  

    // Full Stack Projects
    {
      title:  "Edupilot",
      description:  "Learning Platform with AI.",
      technologies: ["Docker", "HTML", "CSS", "JavaScript", "AI Integration", "Node.js", "MongoDB"],
      image: "/l1.png",
      liveUrl: "https://optimix-club-frontend.vercel.app",
      githubUrl: "https://github.com/ipriyxtech-svg/Edupilot",
      backendUrl: "https://github.com/ipriyxtech-svg/Edupilot",
      year: "2025",
      category: "Full Stack"
    },
   
    // Machine Learning Projects
    {
      title: "Credit Card Fraud Detection",
      description: "Developed a machine learning model to detect fraudulent credit card transactions using various algorithms. Implemented data preprocessing, feature engineering, and model evaluation to achieve high accuracy in identifying fraudulent activities.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Machine Learning"],
      image: "/mc1.png",
      liveUrl: "https://github.com/ipriyxtech-svg/codesoftML/tree/main/codesoft",
      githubUrl: "https://github.com/ipriyxtech-svg/codesoftML/tree/main/codesoft",
      year: "2024",
      category: "ML/AI"
    },
    {
      title: "Customer Churn Prediction",
      description: "Built a predictive model to identify customers likely to churn using machine learning techniques. Analyzed customer behavior patterns and implemented classification algorithms to predict customer retention with high accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Classification"],
        image: "/mc2.png",
      liveUrl: "https://github.com/ipriyxtech-svg/codesoftML/tree/main/codesoft",
      githubUrl: "https://github.com/ipriyxtech-svg/codesoftML/tree/main/codesoft",
      year: "2024",
      category: "ML/AI"
    },
    {
      title: "Movie Genre Classification",
      description: "Developed a natural language processing model for movie genre classification based on plot descriptions. Implemented text preprocessing, feature extraction, and multi-label classification to accurately categorize movies into multiple genres.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP", "Text Classification"],
       image: "/mc3.png",
      liveUrl: "https://github.com/ipriyxtech-svg/codesoftML/tree/main/codesoft",
      githubUrl: "https://github.com/ipriyxtech-svg/codesoftML/tree/main/codesoft",
      year: "2025",
      category: "ML/AI"
    },
    {
      title: "AI Personal Voice Assistant using Python",
      description: "An AI-powered personal voice assistant developed using Python that can perform various tasks through voice commands. The assistant uses speech recognition to understand user input and text-to-speech technology to respond. It can perform tasks such as opening applications, searching the web, retrieving information, and automating everyday activities.",
      technologies:  ["Python", "Artificial Intelligence", "Speech Recognition", "Natural Language Processing", "Text-to-Speech", "Automation", "Machine Learning"],
        image: "/mc4.png",
      liveUrl: "https://github.com/ipriyxtech-svg/codex-techno/tree/main/AI-Personal-Voice-assistant-using-Python-master",
      githubUrl: "https://github.com/ipriyxtech-svg/codex-techno/tree/main/AI-Personal-Voice-assistant-using-Python-master",
      year: "2024",
      category: "ML/AI"
    }
  ]

  const filters = ['All', 'Blockchain', 'Cyber Security', 'Full Stack', 'ML/AI']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <>
      <SEO page="projects" />
      <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              My Projects
            </h1>
            <p className="text-secondary max-w-2xl mx-auto">
              Explore my latest work and see how I bring ideas to life through code.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Stay Tuned!
                </h3>
                <p className="text-secondary text-lg mb-4">
                  {activeFilter === 'Backend' && "Backend projects are in development. Exciting server-side applications coming soon!"}
                  {activeFilter === 'ML/AI' && "Machine Learning and AI projects are brewing. Advanced algorithms and intelligent systems on the horizon!"}
                  {activeFilter !== 'Backend' && activeFilter !== 'ML/AI' && "More amazing projects are in the works. Check back soon!"}
                </p>
                <p className="text-sm text-muted">
                  Currently working on new {activeFilter.toLowerCase()} projects
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      </div>
    </>
  )
}

export default Projects 
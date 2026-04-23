import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    // Blockchain Projects
  
   {
     title: "blockchain-file-verification system",
     description: "File Integrity Verification | Solidity, Ethereum, Hardhat, Web3, Next.js Built a decentralized application that verifies file authenticity using blockchain technology. Implemented cryptographic hashing and smart contracts to ensure tamper-proof file validation. Integrated MetaMask wallet for secure user authentication and IPFS for decentralized file storage.",
     technologies: ["Solidity", "Ethereum Blockchain", "Smart Contracts", "Hardhat", "Web3.js", "Ethers.js", "Next.js", "React JS", "MetaMask", "IPFS", "Cryptographic Hashing"],
      image: "/v1.png",
      liveUrl: "https://blockchain-file-verification.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/blockchain-file-verification",
      year: "2026",
      category: "Blockchain"
       },
      {
     title: "Inventory & Order Management System",
     description: "Inventory Tracking & Order Processing | Node.js, Express, MongoDB, React, Next.js Built a full-stack system to manage inventory levels, track orders, and automate stock updates in real-time. Implemented CRUD operations, order lifecycle management, and role-based access control. Integrated REST APIs for seamless communication between frontend and backend.",
technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React JS", "Next.js", "REST API", "JWT Authentication", "Redux", "Bootstrap"],
      image: "/ab.png",
      liveUrl: "https://ipriyxtech-svg-inventory-app.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/inventory-app",
      year: "2026",
      category: "Blockchain"
       },
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
      image: "/vv1.png",
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
  
    // Frontend Projects

{

title: "Recipe App",
description: "Recipe Management & AI Suggestions | Node.js, MongoDB, JavaScript Built a full-stack recipe application that allows users to browse, create, and manage recipes. Integrated AI-based recommendations to suggest recipes based on user preferences and ingredients. Implemented responsive UI and REST APIs for seamless user experience.",
technologies: ["Node.js", "MongoDB", "Express.js", "HTML", "CSS", "JavaScript", "AI Integration", "REST API", "Docker"],
      image: "/rrr.png",
      liveUrl: "https://recipe-app-lac-sigma.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/recipe-app",
      year: "2026",
      category: "Frontend"
    },

    {

title: "Tic-Tac-Toe Computer Game",
description: "Game Development & AI Logic | JavaScript, HTML, CSS Developed a Tic-Tac-Toe game with an intelligent computer opponent. Implemented game logic and decision-making algorithms to enable the computer to play optimally. Designed an interactive and responsive UI for smooth gameplay experience.",
technologies: ["HTML", "CSS", "JavaScript", "Game Logic", "AI (Minimax Algorithm)"],
      image: "/tttc.png",
      liveUrl: "https://tic-tac-computer.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/tic-tac-Computer",
      year: "2026",
      category: "Frontend"
    },


    {

title: "Tic-Tac-Toe  Game",
description: "Game Development | JavaScript, HTML, CSS Developed a Tic-Tac-Toe game .",
technologies: ["HTML", "CSS", "JavaScript",],
      image: "/ttt.png",
      liveUrl: "https://tic-tac-game-vjof.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/tic-tac-game",
      year: "2026",
      category: "Frontend"
    },


    {
title: "Phishing URL Detection Web App",
description: "Web Security & URL Analysis | HTML, CSS, JavaScript Developed a client-side web application to detect phishing URLs using pattern analysis and heuristic rules. Implemented real-time URL validation, blacklist checking, and user alerts to identify potentially malicious links. Designed a responsive and interactive UI for better user experience.",
technologies: ["HTML", "CSS", "JavaScript", "Web Security", "URL Validation", "Heuristic Analysis"],
      image: "/phis.png",
      liveUrl: "https://phishing-url-detection-ashen.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/phishing-url-detection",
      year: "2026",
      category: "Frontend"
    },

    {

title: "Password Strength Checker",
description: "Web Security & Validation | HTML, CSS, JavaScript Developed a web-based tool to evaluate password strength based on length, complexity, and character variety. Implemented real-time feedback with visual indicators and suggestions to help users create secure passwords. Designed an interactive and responsive user interface.",
technologies: ["HTML", "CSS", "JavaScript", "Regex", "Web Security", "DOM Manipulation"],
      image: "/passw.png",
      liveUrl: "https://password-strength-checker-beta-one.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/password-strength-checker",
      year: "2026",
      category: "Frontend"
    },

    {

title: "3D To-Do List App",
description: "3D UI & Task Management | Three.js, JavaScript, Firebase Developed an interactive 3D to-do list application where tasks are visualized as draggable cubes in a 3D environment. Implemented task creation via text and voice input, real-time updates, and completion animations. Integrated Firebase for persistent storage with localStorage fallback and added dark/neon theme switching for enhanced user experience.",
technologies: ["HTML", "CSS", "JavaScript", "Three.js", "Firebase", "Web Speech API", "3D Graphics", "LocalStorage"],
      image: "/todo.png",
      liveUrl: "https://todo-notes-eosin.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/Todo-notes",
      year: "2026",
      category: "Frontend"
    },


 {

title: "3D To-Do List App",
description: "3D UI & Task Management | Three.js, JavaScript, Firebase Developed an interactive 3D to-do list application where tasks are visualized as draggable cubes in a 3D environment. Implemented task creation via text and voice input, real-time updates, and completion animations. Integrated Firebase for persistent storage with localStorage fallback and added dark/neon theme switching for enhanced user experience.",
technologies: ["HTML", "CSS", "JavaScript", "Three.js", "Firebase", "Web Speech API", "3D Graphics", "LocalStorage"],
      image: "/todo.png",
      liveUrl: "https://todo-notes-eosin.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/Todo-notes",
      year: "2026",
      category: "Frontend"
    },

     {

title: "Weather Forecast Application",
description: "Next.js & TypeScript | Real-Time Data Built a weather forecasting application using Next.js and TypeScript with optimized performance. Implemented API integration, component-based architecture, and responsive UI for real-time weather updates.",
technologies: ["Next.js", "React", "TypeScript", "OpenWeather API", "CSS"],
      image: "/wea.png",
      liveUrl: "https://weather-two-pearl.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/weathers",
      year: "2026",
      category: "Frontend"
    },


     {

title: "IpriyxTech - Personal Portfolio Website",
description: "Frontend Portfolio & UI Design | HTML, CSS Developed a modern personal branding website featuring glassmorphism UI, dark/light theme toggle, and interactive 3D tilt effects. Implemented responsive design, animated star background, and structured sections including services, contact, and social profiles to showcase projects and skills.",
technologies: ["HTML", "CSS", "UI/UX Design", "Responsive Design", "Animations", "Glassmorphism"],
      image: "/ipriy.png",
      liveUrl: "https://ipriyxtech.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/ipriyxtech",
      year: "2026",
      category: "Frontend"
    },

       {
title: "RiseNote - Motivational Quotes App",
description: "Frontend Web Application | HTML, CSS, JavaScript Developed a motivational quotes web app that displays dynamic quotes to inspire users. Implemented interactive UI, random quote generation, and responsive design for seamless experience across devices.",
technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Responsive Design"],
      image: "/rise.png",
      liveUrl: "https://rise-note.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/RiseNote",
      year: "2026",
      category: "Frontend"
    },


         {

title: "Astronide - 3D Landing Page",
description: "3D Web Experience | Next.js, React Three Fiber, Tailwind CSS Developed an interactive 3D landing page featuring animated galaxy backgrounds, floating planets, and real-time mouse parallax effects. Integrated GLB 3D models and optimized rendering performance using React Three Fiber and Drei. Implemented dark/light mode toggle and ensured full responsiveness across devices.",
technologies: ["Next.js", "React", "TypeScript", "Three.js", "React Three Fiber", "Drei", "Tailwind CSS", "3D Graphics", "Vercel"],
      image: "/astr.png",
      liveUrl: "https://astronide.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/Astronide",
      year: "2026",
      category: "Frontend"
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
   title: "Privacy-Preserving Medical Diagnosis System",
description: "Secure ML in Healthcare | Python, Scikit-learn Designed a machine learning-based diagnostic system with privacy-preserving mechanisms such as data anonymization and secure data processing. Trained and evaluated models on healthcare datasets to predict diseases with high accuracy while maintaining confidentiality of patient information.",
technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Machine Learning", "Data Anonymization", "Secure Computing"],
      image: "/ppp.png",
      liveUrl: "https://privacy-preserving-medical-diagnosi.vercel.app/",
      githubUrl: "https://github.com/ipriyxtech-svg/Privacy-Preserving-Medical-Diagnosis",
      year: "2026",
      category: "ML/AI"
    },

      {
title: "AI Jarvis - Intelligent Virtual Assistant",
description: "AI Assistant & Automation | Python, NLP, Machine Learning Developed an AI-powered virtual assistant capable of performing tasks such as voice recognition, task automation, and information retrieval. Integrated natural language processing for understanding user commands and executing actions like opening applications, fetching data, and responding intelligently.",
technologies: ["Python", "SpeechRecognition", "NLTK", "OpenAI API", "Pyttsx3", "Machine Learning", "Natural Language Processing", "Automation"],
      image: "/pppp.png",
      liveUrl: "https://github.com/ipriyxtech-svg/ai-jarvis",
      githubUrl: "https://github.com/ipriyxtech-svg/ai-jarvis",
      year: "2026",
      category: "ML/AI"
    },

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






  const filters = ['All', 'Blockchain', 'Cyber Security', 'Full Stack', 'ML/AI', 'Frontend']

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
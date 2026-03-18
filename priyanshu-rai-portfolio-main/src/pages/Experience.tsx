import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award, Zap, Code } from 'lucide-react'
import SEO from '../components/SEO'

const Experience = () => {
  const internships = [
    {
      company: "BlockseBlock",
      position: "Blockchain Develpoer Intern",
      duration: "July 2025 - August 2025",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1T0E2ce2KSAycA8iHlz6dfiiR5h60mi_Q/view?usp=sharing",
      description: "Completed a Blockchain Developer Internship at BlockseBlock, where I worked on building decentralized applications and gaining hands-on experience with blockchain technologies. Demonstrated strong dedication, adaptability, and a willingness to learn while contributing to real-world projects. Collaborated with the team to develop efficient and secure solutions, making a positive impact during the internship.",
      achievements: [
       " Developed and deployed decentralized application features using blockchain technologies.Implemented smart contract functionalities ensuring secure and efficient transactions.Gained hands-on experience with blockchain tools and improved understanding of Web3 architecture Collaborated with team members to build scalable and reliable solutions Demonstrated strong learning ability and adaptability in a fast-paced development environment.",
      ],
      technologies: ["Solidity", "Hardhat", "Ethereum", "Smart Contracts", "Web3.js", "IPFS", "MetaMask", "JavaScript"],  
          image: "/bsb.png"
    },
    {
      company: "CodSoft",
      position: "Machine Learning Intern",
      duration: "July 2025 - August 2025",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1JoqdHLA1b0XcFoFIX6jZkBVS7uyL8qVM/view?usp=sharing",
      description: "Worked on machine learning projects during my CodSoft internship, focusing on data analysis, model building, and performance evaluation.",
      achievements: [
       " • Developed and implemented machine learning models during CodSoft internship, gaining hands-on experience in data preprocessing, model training, and evaluation.",
      ],
     technologies: ["Python", "Machine Learning", "Supervised Learning", "NumPy", "Pandas", "Scikit-learn", "Data Cleaning", "Model Evaluation", "Matplotlib", "Seaborn"],
          image: "/code1.png"
    },

    {
      company: "Indolike",
      position: "Machine Learning Intern",
      duration: "July 2025",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1-rB1iNndlSYpnUvWxjtS25lbw7gG0V8e/view?usp=sharing",
      description: "Completed a Machine Learning internship at Indolike, working on real-world datasets to develop predictive models and perform data analysis. Gained practical experience in data preprocessing, model building, and evaluation techniques.",
      achievements: [
       " Successfully completed a Machine Learning internship at Indolike, gaining hands-on experience in model development and data analysis.",
      ],
technologies: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-learn", "Data Analysis", "Model Training", "Data Visualization"],         
 image: "/indo.png"
    },

    {
      company: "CDAC",
      position: "Ethical Hacking and Penetration Testing (Virtual Internship)",
      duration: "Sept 2024 - Oct 2024",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1-aGgfFAND4wOF030j_kfuOitCF_ZeWR4/view?usp=sharing",
      description: "Completed a virtual internship on Ethical Hacking and Penetration Testing at CDAC Noida, gaining hands-on experience in identifying vulnerabilities, basic penetration testing techniques, and network security fundamentals.",
      achievements: [
       " • Successfully completed a CDAC internship in Ethical Hacking and Penetration Testing, gaining practical exposure to cybersecurity concepts and security assessment techniques.",
      ],
      technologies: ["Ethical Hacking", "Penetration Testing", "Network Security", "Vulnerability Assessment", "Kali Linux", "Nmap", "Wireshark", "Metasploit"], 
        image: "/cdac1.png"
    },
    {
      company: "CodSoft",
      position: "Machine Learning Intern",
      duration: "Oct 2024 - Nov 2024",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1HazJazqYJ0_BI6M6h545Bw0Trlj6B2EH/view?usp=sharing",
      description: "Worked as a Machine Learning Intern at CodSoft, applying data preprocessing, feature engineering, and model evaluation techniques to develop ML models using real-world datasets.",
      achievements: [
 "Successfully completed a Machine Learning internship at CodSoft, gaining practical experience in building and evaluating machine learning models.",      ],
      technologies: ["Python", "Machine Learning", "Regression", "Classification", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
       image: "/code2.png"
    },

    {
      company: "A.R.S technologies",
      position: "Short Term Training Progrmme",
      duration: "Nov 2024",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1D16WZgokNuKf4MNoQF4iVNXHKOL5vK_Y/view?usp=sharing",
      description: "Completed a hands-on training on QualNet focusing on network simulation, performance analysis, and real-world networking scenarios.",
      achievements: [
       " • Gained hands-on experience in network simulation and analysis using QualNet during a certified training program.",
      ],
      technologies: ["QualNet", "Computer Networking", "Network Simulation", "TCP/IP", "Routing Protocols", "Wireless Networks", "Network Performance Analysis", "Packet Analysis"],
         image: "/ars.png"
    },
  ]

  const certifications: Array<{
  name: string;
  issuer: string;
  date: string;
  certificate: string;
  image: string;
}> = [
 {
  name: "Google Data Studio A-Z (Visualization and Dashboards)",
  issuer: "Udemy",
  date: "2022",

  // 🔗 REAL DRIVE LINK (ye hi use hoga click pe)
  certificate: "https://drive.google.com/file/d/1D-PnOOaagaQNfSEpero4cPtC_OOYyz8c/view",

  // 🖼️ IMAGE (public folder se)
  image: "/google-data-studio.png"
},
  {
    name: "Cyber Security and Digital Forensics (Basic)",
    issuer: "IIIT Kota",
    date: "2022",
    certificate: "https://drive.google.com/file/d/1D0VsIVGoa15b5bJWR3z0oto2dvNqi1td/view?usp=sharing",
    image: "/iiit.png"
  },
  {
    name: "Introduction to Cybersecurity Job Simulation (Intermediate)",
    issuer: "Forage",
    date: "2024",
    certificate: "https://drive.google.com/file/d/1D1sHZt2ULx5AEf28q6ZjWIxxqEXgTIA_/view?usp=sharing",
    image: "/cyber.png"
  },
  {
    name: "Ignite India Entrepreneurship Program",
    issuer: "Wadhwani Global",
    date: "2025",
    certificate: "https://drive.google.com/file/d/1tisR1t00rf_VdizvbyuPMKAnqNTJv8Ns/view?usp=sharing",
    image: "/enter.png"
  },
  {
    name: "Proactive Cybersecurity (ISEA Project, MeitY – Govt. of India)",
    issuer: "CDAC Noida",
    date: "2026",
    certificate: "https://drive.google.com/file/d/16oXFKRchX9C_UzvoHkAvboCCHhIq10KM/view?usp=sharing",
    image: "/cdac.png"
  },


  {
    name: "Introduction to Supply Chain Management",
    issuer: "Simplilearn SkillUp",
    date: "2026",
    certificate: "https://drive.google.com/file/d/1ZpOd2yz_BFlY9cpPM8gCprKhZ-9QfYS4/view?usp=sharing",
    image: "/supply.png"
  },
  {
    name: "Introduction to Cryptocurrency",
    issuer: "Simplilearn SkillUp",
    date: "2026",
    certificate: "https://drive.google.com/file/d/10TuxDq_hS_QMXOVVv6VilRE3lkPPc5tP/view?usp=sharing",
    image: "/crypto.png"
  },
  {
    name: "Certified Web 3.0 Professional (CW3P)",
    issuer: "101 Blockchains",
    date: "2025",
    certificate: "https://drive.google.com/file/d/1m5IJ_iy4bg7HpegyHIWOdguVFPZyOi1O/view?usp=sharing",
    image: "/web3.png"//c
  },
  {
    name: "Supply Chain Management (Short Course)",
    issuer: "eLearning College",
    date: "2025",
    certificate: "https://drive.google.com/file/d/1U-4WyUIgeCG25q2y20Nsl9LppMHjl049/view?usp=sharing",
    image: "/chain.png"
  },
  {
    name: "Blockchain Fundamentals",
    issuer: "101 Blockchains",
    date: "2024",
    certificate: "https://drive.google.com/file/d/1etdSKobs8lG5RorI_zoQzjCwcdLnhnni/view?usp=sharing",
    image: "/bloc.png"
  },
    {
    name: "Blockchain Certification Training",
    issuer: "Simplilearn SkillUp",
    date: "2025",
    certificate: "https://drive.google.com/file/d/1zHG5JIw5mfe1pU_PMtahzTQuARuAdWEm/view?usp=sharing",
    image: "/blockf.png"//dow
  }
]






  return (
    <>
      <SEO page="experience" />
      <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Experience & Certifications
            </h1>
            <p className="text-secondary max-w-3xl mx-auto text-lg">
              My professional journey through internships and certifications that have shaped my technical expertise.
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Internship Experience</h2>
            <div className="space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card p-8"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Image and Basic Info */}
                    <div className="space-y-4">
                     <div className="bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg p-6 text-center">
  
  <img
    src={internship.image}
    alt={internship.company}
    className="w-20 h-20 object-contain mx-auto mb-4"
  />

  <h3 className="text-xl font-bold text-primary-500">{internship.company}</h3>
  <p className="text-secondary">{internship.position}</p>
</div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary-500" />
                          <span className="text-secondary">{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-primary-500" />
                          <span className="text-secondary">{internship.location}</span>
                        </div>
                        <a
                          href={internship.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-primary-500 hover:text-primary-400 transition-colors duration-200"
                        >
                          <Award className="w-5 h-5" />
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-primary">Description</h4>
                        <p className="text-secondary leading-relaxed">{internship.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center text-primary">
                          <Zap className="w-5 h-5 mr-2 text-primary-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-secondary">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center text-primary">
                          <Code className="w-5 h-5 mr-2 text-primary-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Programming Languages</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Python</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">C</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">JavaScript</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">SQL</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Java</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Rust</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Solidity</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
        
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">DevOps/Cloud</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Linux</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Bash Scripting</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">CI/CD</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Docker</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Kubernetes</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Terraform</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">AWS/AZURE</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.7 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Blockchain Development</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Smart Contracts</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Web3</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div> 
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">DApps</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Ethereum</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Hardhat</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Solana</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.8 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Database & DevOps</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">MongoDB</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">MySQL</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Docker</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Vercel</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.9 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">AI/ML & Tools</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">NumPy</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Pandas</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary"> Matplotlib</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">scikit-learn</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Git</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Jupyter Notebook</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Data Analysis</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
                 </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.9 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Tools/Frameworks</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">VS Code</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Remix IDE</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary"> GitHub/Git</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">MetaMask</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Jenkins</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Canva</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">IntelliJs</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Node.JS</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">ethers.JS</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Bootstrap</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.0 }}
                 className="card p-6"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Achievements & Ratings</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Certification</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">10+</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Problems Solved</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">100+</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                     <span className="font-medium text-primary">Projects Build</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">10+</span>
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.2 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">📊</div>
                 <h3 className="font-semibold text-primary mb-2">100+ Problems Solved</h3>
                 <p className="text-sm text-secondary">Across GeeksforGeeks, LeetCode, and HackerRank</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.3 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="font-semibold text-primary mb-2">Continuous Learning</h3>
                 <p className="text-sm text-secondary">Exploring new technologies</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.3 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="font-semibold text-primary mb-2">10+ Projects Built</h3>
                 <p className="text-sm text-secondary">Using modern technologies and best practices</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.4 }}
                 className="card p-6 text-center"
               >
                 <div className="text-4xl mb-4">💼</div>
                 <h3 className="font-semibold text-primary mb-2">2 Successful Internships</h3>
                 <p className="text-sm text-secondary">Real-world project experience</p>
               </motion.div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Certifications</h2>
            {certifications.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                    className="card p-6 hover:border-primary-500/50 transition-colors duration-200"
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-primary mb-1 text-lg">{cert.name}</h3>
                        <p className="text-sm text-secondary">{cert.issuer}</p>
                        <p className="text-xs text-muted">{cert.date}</p>
                      </div>
                      <div className="w-full h-80 border border-gray-300 dark:border-dark-600 rounded overflow-hidden bg-gray-50 dark:bg-dark-800">
                        <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover"
              />
            </div>
                      <a
                        href={cert.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center text-sm w-full justify-center"
                      >
                        View Full Certificate
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="text-center"
              >
                <div className="card p-12">
                  <div className="text-6xl mb-6">📚</div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Currently Pursuing Certifications</h3>
                  <p className="text-secondary mb-6 max-w-2xl mx-auto">
                    I'm actively working on obtaining relevant certifications in web development, 
                    cloud technologies, and programming languages to enhance my professional profile.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted">
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌐</div>
                      <div className="font-medium text-primary">Web Development</div>
                      <div>React, Node.js, Full Stack</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-4">
                      <div className="text-2xl mb-2">☁️</div>
                      <div className="font-medium text-primary">Cloud Technologies</div>
                      <div>AWS, Azure, Google Cloud</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-4">
                      <div className="text-2xl mb-2">💻</div>
                      <div className="font-medium text-primary">Programming</div>
                      <div>Python, JavaScript, Java</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Experience 
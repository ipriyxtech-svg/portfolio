import { motion } from 'framer-motion'
import { ExternalLink, Trophy } from 'lucide-react'
import SEO from '../components/SEO'

const Profile = () => {
  const profiles = [
    {
      name: "LeetCode",
      description: "Sharpen coding skills, tackle algorithmic challenges, enhance problem-solving abilities, and prepare for technical interviews.",
      url: "https://leetcode.com/u/PriyanshuRai123/",
      icon: "💻",
      category: "Problem Solving",
      achievements: ["Algorithm Practice", "Data Structures", "Competitive Programming"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "GitHub",
      description: "Showcases projects, fosters collaboration, and highlights coding prowess with open source contributions.",
      url: "https://github.com/ipriyxtech-svg",
      icon: "🐙",
      category: "Code Repository",
      achievements: ["15+ Projects", "Open Source", "Collaboration"],
      color: "from-gray-500/20 to-black/20"
    },
    {
      name: "LinkedIn",
      description: "Profiles professional experience and connects with peers in the tech industry.",
      url: "https://www.linkedin.com/in/ipriyxtech",
      category: "Professional Network",
      icon:"ℹ️",
      achievements: ["Networking", "Career Growth", "Industry Connections"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "ipriyxtech.official",
      description: "Social Media official Technical Channel.",
      url: "https://www.instagram.com/ipriyxtech?igsh=MXA5eGxlejU0eWQxcg==",
      icon: "🅾",
      category: "Learning Platform",
      achievements: ["Growth", "Marketing", "Skill Development"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: "X-Twitter",
      description: "Share insights, connect with the tech community, and stay updated with latest trends.",
      url: "https://x.com/PRIYANSHUR37579",
      icon: "🐦",
      category: "Social Media",
      achievements: ["Tech Community", "Knowledge Sharing", "Networking"],
      color: "from-blue-400/20 to-blue-500/20"
    },
    {
      name: "HackerRank",
      description: "Sharpen coding skills, tackle algorithmic challenges, enhance problem-solving abilities, and prepare for technical interviews.",
      url: "https://www.hackerrank.com/profile/priyanshu112",
      icon: "⚡",
      category: "Coding Platform",
      achievements: ["Skill Assessment", "Problem Solving", "Certification"],
      color: "from-green-400/20 to-green-500/20"
    },

     {
      name: "Threads",
      description: "Technical Post ",
      url: "https://www.threads.com/@ipriyxtech",
      icon: "@",
      category: "Social Platform",
      achievements: ["Conversations and Growth with Connection"],
      color: "from-green-400/20 to-green-500/20"
    }
    
  ]

  const achievements = [
    {
      title: "Problem Solver",
      description: "Consistent practice on LeetCode, GeeksforGeeks, and HackerRank",
      icon: "🧠",
      stats: "100+ Problems Solved"
    },
    {
      title: "Project Creator",
      description: "Developed 10+ full-stack and Blockchain projects with modern technologies",
      icon: "🚀",
      stats: "10+ Projects"
    },
    {
      title: "Team Player",
      description: "Successfully completed internships with collaborative development",
      icon: "👥",
      stats: " 4 Internships"
    },
    {
      title: "Certification",
      description: "Completed",
      icon: "🏅",
      stats: "10+"
    }
  ]

  return (
    <>
      <SEO page="profile" />
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
              My Profiles & Achievements
            </h1>
            <p className="text-secondary max-w-3xl mx-auto text-lg">
              Explore my coding profiles, professional networks, and achievements across various platforms.
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Coding Profiles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative card overflow-hidden hover:border-primary-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${profile.color} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{profile.icon}</div>
                      <div className="text-right">
                        <h3 className="font-bold text-primary">{profile.name}</h3>
                        <p className="text-sm text-secondary">{profile.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-secondary text-sm leading-relaxed">
                      {profile.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-primary mb-2 flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-primary-500" />
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {profile.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-xs text-muted">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visit Button */}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary-500/10 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors duration-200 group-hover:scale-105"
                    >
                      <span>Visit Profile</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="card p-6 hover:border-primary-500/50 transition-colors duration-200 text-center"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-semibold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-sm text-secondary mb-3">{achievement.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium">
                    {achievement.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-gray-50 dark:bg-dark-800/50 rounded-2xl p-8 border border-gray-200 dark:border-dark-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">Profile Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">6</div>
                <div className="text-sm text-secondary">Active Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">100+</div>
                <div className="text-sm text-secondary">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">10+</div>
                <div className="text-sm text-secondary">Projects Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">4</div>
                <div className="text-sm text-secondary">Internships</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Profile 
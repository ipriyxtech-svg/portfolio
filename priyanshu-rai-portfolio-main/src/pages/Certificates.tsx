import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'

const certifications = [
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

const Certificates = () => {
  return (
    <>
      <SEO page="certificates" />

      <div className="pt-20">
        <section className="section-padding">
          <div className="container-custom">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-primary mb-4">
                Certifications
              </h1>

              <p className="text-secondary max-w-2xl mx-auto">
                Professional certifications and learning achievements that
                strengthen my technical and analytical skills.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card overflow-hidden hover:scale-[1.02] transition-all duration-300"
                >

                  <div className="h-64 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-primary mb-2">
                      {cert.name}
                    </h3>

                    <p className="text-secondary">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted mb-4">
                      {cert.date}
                    </p>

                    <a
                      href={cert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
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

export default Certificates
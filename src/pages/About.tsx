import { motion } from 'framer-motion'
import Section from '@components/Section'
import Card from '@components/Card'

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React Native', 'React.js', 'Flutter', 'HTML5', 'CSS3', 'JavaScript'] },
    { category: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL'] },
    { category: 'Third-Party Integrations', items: ['Firebase', 'Google Maps API', 'CC Avenue Payment Gateway', 'Odoo ERP', 'RFID Devices'] },
    { category: 'Tools & Platforms', items: ['Git & GitHub', 'Postman', 'Apache Superset', 'Android Studio', 'VS Code'] },
  ]

  const education = [
    {
      level: 'Post Graduation',
      degree: 'MCA (Master of Computer Applications)',
      institution: 'Currently Pursuing',
      percentage: '77%',
    },
    {
      level: 'Under Graduation',
      degree: 'B.Sc (IT) - Information Technology',
      institution: 'NGM Pollachi',
      percentage: '60%',
    },
    {
      level: 'Higher Secondary',
      degree: '12th Standard',
      institution: 'R.V.G. Hr. Sec. School, Kuruchikottai',
      percentage: '69%',
    },
    {
      level: 'Secondary',
      degree: '10th Standard',
      institution: 'R.V.G. Hr. Sec. School, Kuruchikottai',
      percentage: '88%',
    },
  ]

  const experience = [
    {
      role: 'Software Engineer',
      company: 'VitalMed',
      location: 'Coimbatore, Tamil Nadu, India',
      period: 'Apr 2024 – Present',
      points: [
        'Develop and maintain cross-platform mobile applications using React Native.',
        'Build responsive web applications using React.js.',
        'Design and integrate RESTful APIs using Java and Spring Boot.',
        'Work with Odoo ERP integrations and business process automation.',
        'Implement live streaming, audio/video streaming, and media playback solutions.',
        'Develop asset management, RFID tracking, CRM, workflow, and compliance applications.',
        'Integrate Google Maps APIs, Firebase services, payment gateways, and email notification systems.',
        'Collaborate with product owners, QA teams, and backend developers throughout the SDLC.',
        'Participate in testing, deployment, maintenance, and production support activities.',
      ],
    },
    {
      role: 'Project Intern',
      company: 'EaziBiz Technologies Pvt. Ltd.',
      location: 'Coimbatore, Tamil Nadu, India',
      period: 'Jan 2024 – Mar 2024',
      points: [
        'Developed application features using React Native and React.js.',
        'Worked on REST API integration and frontend-backend communication.',
        'Participated in application testing, debugging, and issue resolution.',
        'Learned Java and Spring Boot development practices.',
        'Gained exposure to Odoo ERP customization and integration.',
        'Collaborated with senior developers and participated in project delivery activities.',
        'Understood software development lifecycle processes and deployment workflows.',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div>
      <Section
        title="About Me"
        subtitle="Learn more about my background and expertise"
        id="about"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-purple-500/20 flex items-center justify-center overflow-hidden">
              <img src="/Manikandan-profile.png" alt="Manikandan M" className="w-full h-full object-cover" onError={(e) => {e.currentTarget.style.display = 'none'}} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a Software Engineer with experience in developing mobile and web applications using React Native, React.js, Java, and Spring Boot. I have worked on enterprise applications across multiple domains including Asset Management, CRM, E-Commerce, Media Streaming, Compliance Management, Workflow Automation, and Business Intelligence Dashboards.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise includes building scalable mobile applications, integrating REST APIs, implementing third-party services, and developing business-critical features that improve operational efficiency. I have experience working with technologies such as Firebase, Odoo ERP, Google Maps APIs, RFID devices, CC Avenue Payment Gateway, and media streaming platforms.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I am passionate about creating user-friendly applications, solving complex business problems, and delivering high-quality software solutions throughout the entire software development lifecycle.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section title="Skills & Expertise" subtitle="Technologies I work with daily">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup) => (
            <motion.div key={skillGroup.category} variants={itemVariants}>
              <Card>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-slate-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Experience" subtitle="My professional work history">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="mt-2 md:mt-0 text-sm text-purple-400 font-semibold whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-1 mt-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-400 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Education" subtitle="My academic background">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400">{edu.institution}</p>
                    <p className="text-sm text-slate-400">{edu.level}</p>
                  </div>
                  <span className="text-sm text-slate-500 font-semibold">{edu.percentage}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Certificates" subtitle="Courses and certifications I have completed">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Introduction to Data Science',
              issuer: 'Infosys Springboard',
              date: 'October 28, 2023',
              icon: '📊',
              file: '/cert-data-science.pdf',
            },
            {
              title: 'Microsoft Azure Fundamentals: Cloud Computing',
              issuer: 'Infosys Springboard',
              date: 'May 6, 2023',
              icon: '☁️',
              file: '/cert-azure.pdf',
            },
            {
              title: 'Full Stack Development',
              issuer: 'Edureka',
              date: '2024',
              icon: '🖥️',
              file: '/cert-fullstack.pdf',
            },
          ].map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a href={cert.file} target="_blank" rel="noopener noreferrer">
                <Card className="h-full flex flex-col cursor-pointer hover:border-blue-400/50 transition-colors">
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mb-4">{cert.date}</p>
                  <div className="mt-auto">
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                      View Certificate →
                    </span>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  )
}

export default About

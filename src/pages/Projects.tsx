import { motion } from 'framer-motion'
import Section from '@components/Section'
import Card from '@components/Card'
import Button from '@components/Button'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Asset Optima',
      overview: 'Asset Optima is an enterprise asset management solution designed to manage the complete lifecycle of organizational assets. The platform helps businesses track asset allocation, inventory, maintenance, approvals, and physical asset verification. The mobile application enables employees and auditors to perform asset-related operations from the field while maintaining real-time synchronization with backend systems.',
      contributions: [
        'Developed mobile application features using React Native.',
        'Implemented asset tracking and inventory management functionalities.',
        'Developed physical audit verification modules to validate asset availability.',
        'Integrated REST APIs with Java Spring Boot backend services.',
        'Built workflows for asset requests, approvals, transfers, and lifecycle management.',
        'Optimized user experience for field operations and audit activities.'
      ],
      tags: ['React Native', 'Java', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
      image: '📱',
    },
    {
      id: 2,
      title: 'Tracking Application – CRM Based Field Service Management',
      overview: 'The Tracking Application is a CRM-based mobile solution developed for service engineers to manage client visits, field activities, and daily operations. The application tracks engineer movements through GPS, records client interactions, captures meeting notes, and manages sales leads. Management teams can monitor field activities, visualize travel routes, and generate reports for performance evaluation and payroll processing.',
      contributions: [
        'Developed the React Native mobile application.',
        'Integrated Google Maps APIs for location tracking and route monitoring.',
        'Implemented real-time location collection during login and logout sessions.',
        'Built lead management and customer interaction modules.',
        'Integrated with Odoo CRM for activity tracking and reporting.',
        'Developed API integrations for communication between mobile and backend systems.',
        'Enabled route visualization for administrators using Google Maps Route APIs.'
      ],
      tags: ['React Native', 'Odoo CRM', 'Google Maps API', 'REST APIs'],
      image: '🗺️',
    },
    {
      id: 3,
      title: 'Meditation App – Wellness and Mindfulness Platform',
      overview: 'The Meditation App is a wellness platform focused on improving mental health through guided meditation, breathing exercises, mindfulness programs, and live sessions. The application delivers personalized content recommendations based on user preferences and engagement history while supporting high-quality multimedia streaming experiences.',
      contributions: [
        'Developed and maintained mobile application features using React Native.',
        'Implemented audio streaming and video streaming functionality.',
        'Developed live streaming support for real-time meditation sessions.',
        'Built personalized content recommendation modules.',
        'Integrated Firebase services for notifications and analytics.',
        'Enhanced media playback performance and user engagement features.',
        'Worked on content categorization and user activity tracking.'
      ],
      tags: ['React Native', 'Firebase', 'REST APIs', 'Audio Streaming', 'Video Streaming', 'Live Streaming'],
      image: '🧘',
    },
    {
      id: 4,
      title: 'PG Tune Tone App',
      overview: 'A music streaming application that allows users to search for songs and movies. Developed using React with API integration for data fetching and playback capabilities.',
      contributions: [
        'Integrated API for fetching music and movie data.',
        'Developed user interface with React for playback capabilities.',
        'Implemented search functionality for songs and movies.'
      ],
      tags: ['React', 'API Integration', 'Music Streaming', 'Search'],
      image: '🎵',
    },
    {
      id: 5,
      title: 'Dynamic Query Analyzer and Solution Provider',
      overview: 'An ASP.NET application that manages electronic device service requests. Users can register, login, and file service complaints. Employees can manage service appointments and collect payments.',
      contributions: [
        'Developed the ASP.NET backend for handling service requests.',
        'Implemented user authentication and complaint filing modules.',
        'Built employee dashboard for managing appointments and payments.',
        'Designed and integrated the underlying database schema.'
      ],
      tags: ['ASP.NET', 'User Management', 'Service Portal', 'Database'],
      image: '🔧',
    },
    {
      id: 6,
      title: 'RFID Reader Application',
      overview: 'The RFID Reader Application is a warehouse asset tracking solution designed for RFID-enabled Android devices. The application automatically detects nearby RFID-tagged assets using radio frequency technology, eliminating the need for manual barcode scanning and improving inventory management efficiency.',
      contributions: [
        'Developed Android application functionality for RFID reader devices.',
        'Integrated RFID hardware SDKs for asset detection.',
        'Implemented automatic identification of nearby assets.',
        'Developed asset verification and inventory lookup features.',
        'Integrated backend APIs for asset information retrieval.',
        'Improved warehouse asset audit and tracking processes.'
      ],
      tags: ['Android', 'Java', 'Spring Boot', 'REST APIs', 'RFID Technology'],
      image: '📻',
    },
    {
      id: 7,
      title: 'Workflow Management System',
      overview: 'The Workflow Management System is an enterprise application designed to automate business approval processes such as Purchase Requisitions (PR), Purchase Orders (PO), and other organizational workflows. The system supports configurable multi-level approvals, automated notifications, and audit tracking.',
      contributions: [
        'Developed approval workflow modules using React.js.',
        'Implemented configurable multi-level approval hierarchies.',
        'Developed automated email notification systems.',
        'Built approval, rejection, and status tracking workflows.',
        'Integrated Spring Boot APIs for workflow processing.',
        'Enhanced transparency and accountability through audit trails.'
      ],
      tags: ['React.js', 'Spring Boot', 'REST APIs', 'Email Services'],
      image: '⚙️',
    },
    {
      id: 8,
      title: 'Compliance Management System',
      overview: 'The Compliance Management System helps organizations monitor employee compliance activities through questionnaires, assessments, and performance tracking. The platform calculates incentives based on compliance completion and provides reporting dashboards for management.',
      contributions: [
        'Developed compliance questionnaire management modules.',
        'Implemented employee and administrator dashboards.',
        'Built incentive calculation functionality.',
        'Developed reporting and compliance tracking features.',
        'Integrated backend APIs for compliance data management.'
      ],
      tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
      image: '✅',
    },
    {
      id: 9,
      title: 'Sumathi Textile E-Commerce Application',
      overview: 'Sumathi Textile is a mobile e-commerce platform that allows customers to browse textile products, place orders, and make secure online payments. The application is integrated with Odoo ERP for inventory, order management, and business operations.',
      contributions: [
        'Developed Flutter mobile application features.',
        'Integrated CC Avenue payment gateway.',
        'Implemented product catalog and shopping cart functionality.',
        'Integrated Odoo ERP backend services.',
        'Developed order processing and payment workflows.'
      ],
      tags: ['Flutter', 'Odoo ERP', 'CC Avenue Payment Gateway', 'REST APIs'],
      image: '🛍️',
    },
    {
      id: 10,
      title: 'Global Art Parent App (SIP Academy)',
      overview: 'The Global Art Parent App enables parents to monitor their children\'s educational progress through a centralized mobile platform. Parents can access homework, rewards, attendance, performance reports, and learning progress updates in real time.',
      contributions: [
        'Developed mobile application features using React Native.',
        'Implemented student progress tracking modules.',
        'Built homework and reward management interfaces.',
        'Integrated backend APIs for real-time data access.',
        'Enhanced user experience for parent engagement.'
      ],
      tags: ['React Native', 'Firebase', 'REST APIs'],
      image: '🎨',
    },
    {
      id: 11,
      title: 'Production Dashboard',
      overview: 'The Production Dashboard provides business intelligence and operational visibility through real-time analytics and reporting. It enables management teams to monitor production metrics, product output, operational performance, and key performance indicators (KPIs).',
      contributions: [
        'Developed interactive dashboards using Apache Superset.',
        'Created data visualizations for production and operational metrics.',
        'Connected PostgreSQL databases for reporting.',
        'Designed KPI monitoring and analytical reports.',
        'Supported business decision-making through data insights.'
      ],
      tags: ['Apache Superset', 'PostgreSQL', 'SQL'],
      image: '📊',
    }
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
    <Section
      title="Projects"
      subtitle="A collection of my recent work and professional projects"
      id="projects"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="flex">
            <Card className="w-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{project.image}</div>
                <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Overview</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{project.overview}</p>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">My Contributions</h4>
                <ul className="space-y-1">
                  {project.contributions.map((point, index) => (
                    <li key={index} className="text-slate-400 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Projects

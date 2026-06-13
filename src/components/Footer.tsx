import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'GitHub', href: 'https://github.com/Manikandan-0311' },
    { icon: 'LinkedIn', href: 'https://linkedin.com/in/manikandan-m-9982a01a2' },
    { icon: 'Email', href: 'mailto:manimanikandan5533@gmail.com' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-950/50 border-t border-purple-500/20 backdrop-blur-md mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              Portfolio
            </h3>
            <p className="text-slate-400 text-sm">Building amazing web experiences with React.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={link.icon}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/10 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Manikandan M. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

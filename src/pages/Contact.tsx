import { motion } from 'framer-motion'
import { useState } from 'react'
import Section from '@components/Section'
import Card from '@components/Card'
import Button from '@components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'manimanikandan5533@gmail.com',
      link: 'mailto:manimanikandan5533@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9677806554',
      link: 'tel:+919677806554',
    },
    {
      icon: '�',
      label: 'GitHub',
      value: 'github.com/Manikandan-0311',
      link: 'https://github.com/Manikandan-0311',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manikandan-m-9982a01a2',
      link: 'https://linkedin.com/in/manikandan-m-9982a01a2',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' })
          setIsSubmitted(false)
        }, 3000)
      } else {
        alert(data.error || 'Failed to send message.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Network error. Please make sure the backend server is running.')
    } finally {
      setIsLoading(false)
    }
  }

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
      title="Get In Touch"
      subtitle="Let's connect and create something amazing together"
      id="contact"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
          {contactMethods.map((method) => (
            <motion.div key={method.label} variants={itemVariants}>
              <a href={method.link}>
                <Card className="flex items-center gap-4 cursor-pointer">
                  <div className="text-3xl">{method.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{method.label}</h4>
                    <p className="text-slate-400 text-sm">{method.value}</p>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitted || isLoading}
                >
                  {isLoading ? 'Sending...' : isSubmitted ? '✓ Message Sent!' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact

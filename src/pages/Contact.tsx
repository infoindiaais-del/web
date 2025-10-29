import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Share2 } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@strangerartistaditya.com',
      href: 'mailto:hello@strangerartistaditya.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7558659889',
      href: 'tel:+91 7558659889'
    },
    {
      icon: MapPin,
      label: 'Studio',
      value: 'Mumbai, India',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/stranger_artists_aditya?igsh=MXA2MDQxODFzYWRlOQ==',
      color: 'hover:text-pink-600'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@strangerartistsaditya7030?si=xsVYnDcjRYNyrl6Q',
      color: 'hover:text-red-600'
    },
    {
      icon: Share2,
      label: 'Portfolio',
      href: 'https://behance.net/strangerartistaditya',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-ivory"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss your vision and bring it to life together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl text-charcoal mb-8">
                Let's Create Something Amazing
              </h2>
              
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Whether you're looking for a custom artwork, interior design services, 
                or just want to discuss a creative project, I'd love to hear from you. 
                Let's turn your imagination into reality.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4 text-charcoal/80 hover:text-gold transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.label}</div>
                      <div>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-charcoal mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-charcoal text-ivory rounded-full flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Studio Hours */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 p-6 bg-beige/30 rounded-xl border border-gold/20"
              >
                <h3 className="font-semibold text-charcoal mb-2">Studio Hours</h3>
                <div className="text-charcoal/80 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-beige/30 rounded-2xl p-8 border border-gold/20"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-ivory"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-ivory"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-ivory"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-beige focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors bg-ivory"
                    placeholder="Tell me about your project, ideas, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gold text-charcoal py-4 rounded-xl font-semibold text-lg hover:bg-gold/90 disabled:bg-gold/50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-charcoal/60 text-center">
                  I typically respond within 24 hours. For urgent inquiries, please call directly.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
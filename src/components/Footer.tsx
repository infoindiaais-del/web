import { motion } from 'framer-motion'
import { Heart, Instagram, Youtube, Share2, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/strangerartistaditya',
      color: 'hover:text-pink-600'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/strangerartistaditya',
      color: 'hover:text-red-600'
    },
    {
      icon: Share2,
      label: 'Portfolio',
      href: 'https://behance.net/strangerartistaditya',
      color: 'hover:text-blue-600'
    }
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-charcoal text-ivory relative"
    >
      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold text-charcoal rounded-full flex items-center justify-center hover:bg-gold/90 transition-colors shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-charcoal font-playfair font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">Stranger Artist</h3>
                <p className="text-beige/60 text-sm">Aditya Viswakarma</p>
              </div>
            </div>
            <p className="text-beige/80 mb-4 max-w-md">
              Transforming imagination into art through sketches, paintings, and interior designs. 
              Creating meaningful spaces and artworks that tell your unique story.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-charcoal/50 rounded-full flex items-center justify-center text-beige border border-beige/20 ${social.color} transition-colors`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-beige/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-beige/80">
              <li>Custom Portraits</li>
              <li>Wall Art & Murals</li>
              <li>Interior Design</li>
              <li>Digital Art</li>
              <li>Art Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-beige/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-beige/60 text-sm">
            <span>© {currentYear} Stranger Artist Aditya</span>
            <span>•</span>
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>& passion</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-beige/60">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
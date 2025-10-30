import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Palette, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👨‍🎨' },
    { name: 'Portfolio', path: '/portfolio', icon: '🎨' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ]

  // Logo animation variants
  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  }

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 0px rgba(212, 175, 55, 0.3)",
        "0 0 20px rgba(212, 175, 55, 0.6)",
        "0 0 0px rgba(212, 175, 55, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-ivory/95 backdrop-blur-lg border-gold/30 shadow-lg' 
          : 'bg-ivory/80 backdrop-blur-md border-gold/20'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              {/* Main Logo Container */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-emerald flex items-center justify-center relative overflow-hidden shadow-lg"
              >
                <img
                  src="/images/logo/stranger-artist-logo.png" // 🔹 Change to your actual file name
                  alt="Stranger Artist Aditya Logo"
                  className="w-10 h-10 object-contain rounded-lg"
                />
                
                Fallback if logo image doesn't exist
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-ivory" />
                </div>

                {/* Animated Border */}
                <motion.div
                  variants={glowVariants}
                  animate="animate"
                  className="absolute inset-0 rounded-xl border-2 border-gold/50 pointer-events-none"
                />
              </motion.div>

              {/* Floating Sparkles */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-3 h-3 text-gold" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -bottom-1 -left-1"
                    >
                      <Sparkles className="w-2 h-2 text-emerald" />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <motion.h1 
                className="font-playfair text-xl font-bold text-charcoal group-hover:text-gold transition-colors"
                whileHover={{ x: 2 }}
              >
                Stranger Artist
              </motion.h1>
              <motion.p 
                className="text-xs text-charcoal/60 group-hover:text-gold/80 transition-colors"
                whileHover={{ x: 2 }}
              >
                Aditya Viswakarma
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-charcoal hover:text-gold'
                }`}
                onMouseEnter={() => setIsHovered(false)}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </motion.div>
                
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-gold -bottom-2"
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 bg-gold/10 rounded-full -z-10"
                />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-charcoal p-2 rounded-lg bg-beige/50 hover:bg-gold/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 py-4 space-y-2 border-t border-gold/20 mt-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 py-3 px-4 rounded-lg font-medium transition-all ${
                        location.pathname === item.path
                          ? 'bg-gold/20 text-gold border-l-4 border-gold'
                          : 'text-charcoal hover:bg-beige/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
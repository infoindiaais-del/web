import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, Home, ArrowDown, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentBackground, setCurrentBackground] = useState(0)
  
  const backgroundImages = [
    '/public/images/hero/hero-background.jpg',
    '/public/images/hero/hero-background.jpg', 
    '/public/images/hero/hero-background.jpg',
    '/public/images/hero/hero-background.jpg'
  ]

  // Auto-rotate backgrounds (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
      {/* Dynamic Background Images */}
      {backgroundImages.map((image, index) => (
  <div
    key={index}
    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
      index === currentBackground ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ backgroundImage: `url('/images/hero/hero-background.jpg')` }}
  />
))}

      
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/85 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/40 to-charcoal/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald/15 via-gold/10 to-transparent opacity-40 z-10" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl z-5"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl z-5"
      />
      
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-6 py-3 rounded-full mb-8 border border-gold/30"
          >
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="font-semibold text-sm">Available for Commissions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Transforming
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="block text-gold mt-2 bg-gradient-to-r from-gold to-emerald bg-clip-text text-transparent"
            >
              Imagination
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="block text-ivory mt-2 text-4xl md:text-6xl"
            >
              Into Art
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-beige mb-12 flex items-center justify-center space-x-4 flex-wrap"
          >
            <Palette className="w-6 h-6" />
            <span>Sketches | Paintings | Interior Designs</span>
            <Home className="w-6 h-6" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                <Palette className="mr-2 w-5 h-5" />
                View Portfolio
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 transition-all duration-300 inline-flex items-center group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Book Your Custom Art
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: '150+', label: 'Projects' },
              { number: '7+', label: 'Years Experience' },
              { number: '80+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-beige/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-beige text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-gold" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background Indicator Dots */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col space-y-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBackground(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentBackground 
                ? 'bg-gold scale-125' 
                : 'bg-beige/50 hover:bg-beige'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Palette, Home, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-charcoal text-ivory overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 via-gold/5 to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Transforming
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="block text-gold mt-2"
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
                className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-colors inline-flex items-center shadow-lg"
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
                className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 transition-colors inline-flex items-center"
              >
                Book Your Custom Art
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-beige text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
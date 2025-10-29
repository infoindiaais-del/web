import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

const AboutPreview = () => {
  return (
    <section className="py-20 bg-beige/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            The Artist Behind the Vision
          </h2>
          <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
            I'm Aditya Viswakarma, the mind behind Stranger Artist Aditya. I bring creativity 
            to life through sketches, portraits, murals, and interior designs. My goal is to 
            blend art and atmosphere to tell your unique story.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center bg-gold text-charcoal px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors shadow-lg"
            >
              Learn More About Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
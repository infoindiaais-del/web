import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import PortfolioPreview from '../components/PortfolioPreview'
import Testimonials from '../components/Testimonials'
import CommissionSection from '../components/CommissionSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <AboutPreview />
      <PortfolioPreview />
      <Testimonials />
      <CommissionSection />
      <ProcessSection />
      <CTASection />
    </motion.div>
  )
}

// Additional Sections for Enhanced Home Page

const ProcessSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and timeline',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Concept Design',
      description: 'Initial sketches and concepts based on our discussion',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Refinement',
      description: 'Your feedback incorporated into detailed designs',
      icon: '✨'
    },
    {
      number: '04',
      title: 'Final Delivery',
      description: 'Completed artwork or design delivered to perfection',
      icon: '🚀'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-charcoal text-ivory">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            My Creative Process
          </h2>
          <p className="text-xl text-beige max-w-2xl mx-auto">
            A collaborative journey from concept to completion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors border border-gold/30">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-charcoal rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="font-playfair text-xl text-gold mb-3">
                {step.title}
              </h3>
              <p className="text-beige/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-emerald/10 to-gold/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Whether it's a custom portrait, 
            stunning interior design, or unique artwork, I'm here to make it happen.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-colors shadow-lg"
            >
              Start Your Project Today
            </motion.a>
            
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-charcoal hover:text-ivory transition-colors"
            >
              View More Work
            </motion.a>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-charcoal/70"
          >
            <div className="text-center">
              <div className="font-semibold text-charcoal mb-2">Email</div>
              <a href="mailto:hello@strangerartistaditya.com" className="hover:text-gold transition-colors">
                hello@strangerartistaditya.com
              </a>
            </div>
            <div className="text-center">
              <div className="font-semibold text-charcoal mb-2">Response Time</div>
              <div>Within 24 hours</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-charcoal mb-2">Location</div>
              <div>Mumbai, India</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
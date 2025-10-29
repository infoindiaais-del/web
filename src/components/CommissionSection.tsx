import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const CommissionSection = () => {
  const [selectedType, setSelectedType] = useState('portrait')

  const commissionTypes = [
    {
      id: 'portrait',
      title: 'Portrait',
      description: 'Custom portrait drawings and paintings',
      price: 'Starting at ₹5,000'
    },
    {
      id: 'wall-art',
      title: 'Wall Art',
      description: 'Murals and large-scale artwork',
      price: 'Starting at ₹15,000'
    },
    {
      id: 'digital',
      title: 'Digital Sketch',
      description: 'Digital illustrations and concept art',
      price: 'Starting at ₹3,000'
    },
    {
      id: 'interior',
      title: 'Interior Project',
      description: 'Complete interior design solutions',
      price: 'Custom Quote'
    }
  ]

  return (
    <section id="commission" className="py-20 bg-beige/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            Commission Your Art
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Bring your vision to life with a custom artwork or interior design project
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Commission Type Selection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            {commissionTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all ${
                  selectedType === type.id
                    ? 'border-gold bg-gold/10 text-charcoal shadow-lg'
                    : 'border-beige bg-ivory text-charcoal/70 hover:border-gold/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-playfair text-xl font-semibold">
                    {type.title}
                  </h3>
                  {selectedType === type.id && (
                    <CheckCircle className="w-6 h-6 text-gold" />
                  )}
                </div>
                <p className="text-charcoal/60 mb-2">{type.description}</p>
                <span className="text-gold font-semibold">{type.price}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold text-charcoal px-12 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-colors shadow-lg"
            >
              Start Your Project
            </motion.a>
            <p className="text-charcoal/60 mt-4">
              Let's discuss your vision and bring it to life
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CommissionSection
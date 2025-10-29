import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PortfolioPreview = () => {
  const portfolioItems = [
    {
      id: 1,
      category: 'sketches',
      title: 'Charcoal Portrait',
    },
    {
      id: 2,
      category: 'paintings',
      title: 'Abstract Landscape',
    },
    {
      id: 3,
      category: 'interiors',
      title: 'Modern Living Room',
    },
    {
      id: 4,
      category: 'custom',
      title: 'Custom Mural',
    }
  ]

  return (
    <section className="py-20 bg-charcoal text-ivory">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">
            Featured Works
          </h2>
          <p className="text-xl text-beige max-w-2xl mx-auto">
            A curated selection of my latest artistic creations and design projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-beige/10 rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-gold font-playfair text-lg text-center px-4">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold/10 transition-colors"
          >
            View Full Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview
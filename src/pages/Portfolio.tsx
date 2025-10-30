import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filters = [
    { key: 'all', label: 'All Works' },
    { key: 'sketches', label: 'Sketches' },
    { key: 'paintings', label: 'Paintings' },
    { key: 'interiors', label: 'Interiors' },
    { key: 'custom', label: 'Custom Work' },
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'sketches',
      title: 'Eternal Gaze',
      description: 'Charcoal portrait capturing deep human emotion.',
      year: 2024,
      image: '/images/portfolio/sketch1.jpg'
    },
    {
      id: 2,
      category: 'paintings',
      title: 'Sunset Dreams',
      description: 'Abstract landscape with vibrant sunset hues and serene gradients.',
      year: 2024,
      image: '/images/portfolio/painting1.jpg'
    },
    {
      id: 3,
      category: 'interiors',
      title: 'Modern Serenity',
      description: 'Minimalist interior concept blending natural tones and comfort.',
      year: 2023,
      image: '/images/portfolio/interior1.jpg'
    },
    {
      id: 4,
      category: 'custom',
      title: 'Corporate Vision',
      description: 'A custom mural designed to represent a company’s identity and creativity.',
      year: 2024,
      image: '/images/portfolio/custom1.jpg'
    },
    {
      id: 5,
      category: 'paintings',
      title: 'Ocean Memories',
      description: 'A mixed-media painting inspired by the fluidity of ocean waves.',
      year: 2023,
      image: '/images/portfolio/painting2.jpg'
    }
  ]

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 min-h-screen bg-ivory"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Explore my finest works — from sketches and paintings to interiors and custom commissions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Filter className="w-5 h-5 text-charcoal/60" />
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gold text-charcoal shadow-lg'
                  : 'bg-beige text-charcoal/70 hover:bg-gold/40'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gold/20"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-gold font-playfair text-2xl mb-2">{item.title}</h3>
                  <p className="text-beige text-sm mb-3">{item.description}</p>
                  <span className="text-xs text-gold/70">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-charcoal/60 text-lg">
              No projects found in this category. Please check back soon!
            </p>
          </motion.div>
        )}
      </div>

      {/* 🔍 Modal for Item Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-ivory rounded-3xl overflow-hidden max-w-3xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-charcoal hover:text-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-playfair text-charcoal mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-charcoal/70 text-lg mb-4">{selectedItem.description}</p>
                <p className="text-gold font-semibold">{selectedItem.year}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Portfolio

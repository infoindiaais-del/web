import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

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
      description: 'Charcoal portrait capturing human emotion',
      year: 2024
    },
    {
      id: 2,
      category: 'paintings',
      title: 'Sunset Dreams',
      description: 'Abstract landscape with vibrant colors',
      year: 2024
    },
    {
      id: 3,
      category: 'interiors',
      title: 'Modern Serenity',
      description: 'Minimalist living space design',
      year: 2023
    },
    {
      id: 4,
      category: 'custom',
      title: 'Corporate Vision',
      description: 'Custom mural for office space',
      year: 2024
    },
    {
      id: 5,
      category: 'sketches',
      title: 'Urban Rhythm',
      description: 'Ink sketch series of city life',
      year: 2023
    },
    {
      id: 6,
      category: 'paintings',
      title: 'Ocean Memories',
      description: 'Mixed media seascape painting',
      year: 2023
    },
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

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
            My Portfolio
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            A collection of my artistic works and interior design projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
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
                  : 'bg-beige text-charcoal/70 hover:bg-gold/50'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-charcoal/5 rounded-2xl overflow-hidden border border-gold/20 shadow-lg hover:shadow-xl transition-shadow">
                {/* Image Placeholder */}
                <div className="aspect-[4/5] bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <div className="text-gold font-playfair text-2xl mb-2 group-hover:scale-105 transition-transform">
                      {item.title}
                    </div>
                    <div className="text-charcoal/60 text-sm mb-4">
                      {item.description}
                    </div>
                    <div className="text-gold text-xs font-semibold">
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-ivory text-center p-6">
                      <h3 className="font-playfair text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-beige text-sm">
                        {item.description}
                      </p>
                      <button className="mt-4 px-4 py-2 bg-gold text-charcoal rounded-full text-sm font-semibold hover:bg-gold/90 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-charcoal/60 text-lg">
              No projects found in this category. Please check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Portfolio
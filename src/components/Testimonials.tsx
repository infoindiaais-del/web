import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
  project: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Home Owner',
    quote: 'Aditya transformed our living space into a work of art. His attention to detail and creative vision is exceptional. The mural he created is the centerpiece of our home.',
    rating: 5,
    project: 'Living Room Mural & Interior Design'
  },
  {
    id: 2,
    name: 'Rajesh Mehta',
    role: 'Restaurant Owner',
    quote: 'The custom artwork for our restaurant has received countless compliments. Aditya understood our brand perfectly and delivered beyond expectations.',
    rating: 5,
    project: 'Custom Wall Art & Branding'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Art Collector',
    quote: 'I commissioned a portrait for my anniversary, and it brought tears to our eyes. The emotional depth and technical skill are remarkable.',
    rating: 5,
    project: 'Custom Anniversary Portrait'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            Client Love
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Discover what clients say about their experience working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-beige/30 rounded-2xl p-8 md:p-12 border border-gold/20 h-full flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-gold mb-6" />
                  <p className="text-xl md:text-2xl leading-relaxed text-charcoal/90 mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-charcoal">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-charcoal/60">{testimonials[currentIndex].role}</p>
                      <p className="text-sm text-gold font-semibold">
                        {testimonials[currentIndex].project}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold' : 'bg-beige'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 
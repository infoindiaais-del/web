import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview.tsx'
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
    </motion.div>
  )
}

export default Home
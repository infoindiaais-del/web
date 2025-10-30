import { motion } from 'framer-motion'
import { Award, Users, Palette, Sparkles, Clock, MapPin, Download, Heart, Star, BookOpen } from 'lucide-react'
import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('story')

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '150+', description: 'Successful deliveries' },
    { icon: Users, label: 'Happy Clients', value: '80+', description: 'Satisfied customers' },
    { icon: Palette, label: 'Artworks Created', value: '300+', description: 'Unique pieces' },
    { icon: Sparkles, label: 'Years Experience', value: '7+', description: 'Professional journey' }
  ]

  const galleryImages = [
    '/images/about/art1.jpg',
    '/images/about/art2.jpg',
    '/images/about/art3.jpg',
    '/images/about/interior1.jpg',
    '/images/about/interior2.jpg',
    '/images/about/interior3.jpg'
  ]

  const education = [
    {
      year: '2016-2019',
      degree: 'BFA in Fine Arts',
      institution: 'Sir J.J. Institute of Applied Art, Mumbai',
      description: 'Specialized in traditional drawing techniques and color theory'
    },
    {
      year: '2019-2020',
      degree: 'Diploma in Interior Design',
      institution: 'National Institute of Design, Ahmedabad',
      description: 'Focused on spatial design and modern interior concepts'
    },
    {
      year: '2020',
      degree: 'Digital Art Certification',
      institution: 'Online Masterclass Series',
      description: 'Advanced digital illustration and 3D modeling techniques'
    }
  ]

  const achievements = [
    { year: '2023', title: 'Best Emerging Artist', organization: 'India Art Fair' },
    { year: '2022', title: 'Interior Design Excellence Award', organization: 'Design India' },
    { year: '2021', title: 'Digital Art Innovation Prize', organization: 'Creative Tech Awards' },
    { year: '2020', title: 'Young Artist Grant', organization: 'National Art Foundation' }
  ]

  const tabContent = {
    story: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 text-charcoal/80 leading-relaxed"
      >
        <p>
          Welcome to my creative world! I'm <span className="text-gold font-semibold">Aditya Viswakarma</span>, 
          a passionate artist and interior designer with over 7 years of experience transforming visions into 
          breathtaking realities.
        </p>
        <p>
          My journey began in the bustling streets of Mumbai, where I discovered my love for art at a young age. 
          What started as simple sketches evolved into a lifelong passion for creating spaces that inspire emotion.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start space-x-3">
            <Heart className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-charcoal mb-1">My Philosophy</h4>
              <p className="text-sm">Every space has a story, and every artwork carries emotion. I bridge imagination and reality.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Star className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-charcoal mb-1">My Approach</h4>
              <p className="text-sm">Collaborative, detail-oriented, and always pushing creative boundaries to exceed expectations.</p>
            </div>
          </div>
        </div>
      </motion.div>
    ),

    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4 p-4 rounded-lg bg-beige/30 border border-gold/20"
          >
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-gold" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <h4 className="font-semibold text-charcoal">{edu.degree}</h4>
                <span className="text-gold font-semibold text-sm bg-gold/10 px-2 py-1 rounded-full">{edu.year}</span>
              </div>
              <p className="text-charcoal/70 font-medium mb-1">{edu.institution}</p>
              <p className="text-charcoal/60 text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),

    achievements: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-gold/5 to-emerald/5 border border-gold/20 text-center"
          >
            <div className="text-gold font-playfair text-2xl font-bold mb-2">
              {achievement.year}
            </div>
            <h4 className="font-semibold text-charcoal mb-2">{achievement.title}</h4>
            <p className="text-charcoal/60 text-sm">{achievement.organization}</p>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-24 pb-16 min-h-screen bg-ivory">
      <div className="container mx-auto px-6">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold shadow-lg">
            <img
              src="/images/portfolio/aditya-profile.jpg"
              alt="Aditya Viswakarma"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">About Aditya</h1>
          <p className="text-charcoal/80 max-w-2xl mx-auto text-lg">
            The creative journey of an artist and designer passionate about transforming spaces and emotions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="max-w-3xl mx-auto mb-10 flex justify-center border-b border-gold/20">
          {[
            { id: 'story', label: 'My Story' },
            { id: 'education', label: 'Education' },
            { id: 'achievements', label: 'Achievements' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-3 px-4 font-medium transition-colors ${
                activeTab === tab.id ? 'text-gold' : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto mb-16">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

        {/* 🖼️ Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h3 className="font-playfair text-3xl text-center text-charcoal mb-8">
            A Glimpse Into My Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gold/20 bg-white"
              >
                <img src={src} alt={`Gallery ${i}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-beige/30 border border-gold/20 shadow-sm"
            >
              <stat.icon className="w-10 h-10 text-gold mx-auto mb-3" />
              <h4 className="font-playfair text-3xl text-charcoal">{stat.value}</h4>
              <p className="text-charcoal/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default About

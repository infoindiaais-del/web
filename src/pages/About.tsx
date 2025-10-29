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

  const skills = [
    { name: 'Sketching & Drawing', level: 95, icon: '✏️', category: 'Traditional' },
    { name: 'Portrait Art', level: 90, icon: '👤', category: 'Traditional' },
    { name: 'Digital Illustration', level: 88, icon: '💻', category: 'Digital' },
    { name: 'Interior Design', level: 92, icon: '🏠', category: 'Design' },
    { name: 'Color Theory', level: 94, icon: '🎨', category: 'Fundamentals' },
    { name: 'Client Collaboration', level: 96, icon: '🤝', category: 'Professional' },
    { name: '3D Visualization', level: 85, icon: '📐', category: 'Digital' },
    { name: 'Material Selection', level: 89, icon: '🪵', category: 'Design' }
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
          What started as simple sketches in my school notebooks evolved into a lifelong passion for creating 
          meaningful spaces and artworks that tell compelling stories.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="flex items-start space-x-3">
            <Heart className="w-6 h-6 text-emerald flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-charcoal mb-1">My Philosophy</h4>
              <p className="text-sm">Every space has a story, and every artwork carries emotion. I bridge the gap between imagination and reality.</p>
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
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h4 className="font-semibold text-charcoal">{edu.degree}</h4>
                <span className="text-gold font-semibold text-sm bg-gold/10 px-2 py-1 rounded-full">
                  {edu.year}
                </span>
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

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-ivory"
    >
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-emerald flex items-center justify-center"
          >
            <Palette className="w-10 h-10 text-ivory" />
          </motion.div>
          <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            About Aditya
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            The creative journey of an artist and designer passionate about transforming spaces
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center border border-gold/30 shadow-lg relative overflow-hidden">
                  {/* Profile Image Container */}
                  <div className="w-72 h-72 rounded-xl bg-charcoal/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-emerald flex items-center justify-center text-ivory font-playfair text-2xl font-bold">
                        <img
                          src="./image/logo.png"     // <-- replace with your logo file
                          alt="Aditya V"
                          className="w-16 h-16 mb-4 object-contain"
                        />                    
                      </div>
                      <span className="text-gold font-playfair text-2xl block mb-2">
                        Aditya Viswakarma
                      </span>
                      <span className="text-charcoal/70 text-sm">
                        Artist & Interior Designer
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center"
                >
                  <Star className="w-4 h-4 text-charcoal" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald rounded-full flex items-center justify-center"
                >
                  <Heart className="w-3 h-3 text-ivory" />
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/50 rounded-br-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-gold" />
                <span className="text-charcoal/70">Based in Mumbai, India</span>
              </div>

              <h2 className="font-playfair text-3xl text-charcoal mb-6">
                The Mind Behind <span className="text-gold">Stranger Artist Aditya</span>
              </h2>

              {/* Tab Navigation */}
              <div className="flex space-x-4 mb-6 border-b border-beige">
                {[
                  { id: 'story', label: 'My Story' },
                  { id: 'education', label: 'Education' },
                  { id: 'achievements', label: 'Achievements' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-2 font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-gold'
                        : 'text-charcoal/60 hover:text-charcoal'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {tabContent[activeTab as keyof typeof tabContent]}
              </div>

              {/* Animated Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 flex items-center justify-between"
              >
                <div>
                  <div className="text-gold font-playfair text-2xl italic">
                    Aditya Viswakarma
                  </div>
                  <div className="w-32 h-0.5 bg-gold/50 mt-2" />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gold text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-beige/30 border border-gold/20 hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                </motion.div>
                <div className="font-playfair text-3xl md:text-4xl text-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-charcoal/60 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-charcoal/40 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-beige/30 rounded-2xl p-8 md:p-12 border border-gold/20 mb-20"
          >
            <h3 className="font-playfair text-3xl text-charcoal text-center mb-12">
              My Skills & Expertise
            </h3>
            
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="mb-8 last:mb-0">
                <h4 className="font-playfair text-xl text-charcoal mb-6 text-center">
                  {category} Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-semibold text-charcoal group-hover:text-gold transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gold font-semibold bg-gold/10 px-2 py-1 rounded-full text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-beige rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, type: "spring" }}
                          className="bg-gradient-to-r from-emerald to-gold h-3 rounded-full relative"
                        >
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                            className="absolute right-0 top-0 w-4 h-3 bg-white/30 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-emerald/10 to-gold/10 rounded-2xl p-12 border border-gold/20">
              <h3 className="font-playfair text-3xl text-charcoal mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-charcoal/70 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your creative vision to life. Whether it's a custom artwork or a complete interior transformation, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-colors"
                >
                  Start a Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition-colors"
                >
                  View My Work
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
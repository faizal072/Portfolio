"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
} from "react-icons/si"

// Map of skills to their corresponding icons
const skillIcons = {
  // Frontend
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  React: SiReact,
  Tailwind: SiTailwindcss,

  // Backend
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PHP: SiPhp,
}

// Tech categories with their colors
const techCategories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-400",
    darkColor: "from-blue-600 to-cyan-500",
    icon: SiReact,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind", level: 85 },
    ],
  },
  {
    name: "Backend",
    color: "from-green-500 to-emerald-400",
    darkColor: "from-green-600 to-emerald-500",
    icon: SiNodedotjs,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PHP", level: 65 },
    ],
  },
]

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div ref={containerRef} className="space-y-12" style={{ opacity, scale }}>
      {/* Tech category tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {techCategories.map((category, index) => (
          <motion.a
            key={category.name}
            href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className={`px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow`}
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-xl">{<category.icon />}</span>
            {category.name}
          </motion.a>
        ))}
      </motion.div>

      {/* Tech categories */}
      <div className="space-y-20">
        {techCategories.map((category, categoryIndex) => (
          <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-20">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold relative inline-flex items-center gap-3 mb-2">
                <span className={`text-3xl text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {<category.icon />}
                </span>
                <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                  {category.name}
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </h3>
              <p className="text-muted-foreground text-sm mt-4">
                Technologies and tools I use in {category.name.toLowerCase()} development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skillIcons[skill.name]
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-all"
                  >
                    {/* Decorative gradient corner */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${category.color} opacity-20 rounded-bl-full transform translate-x-6 -translate-y-6`}
                    />

                    {/* Skill header */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-r ${category.color} shadow-sm`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {Icon && <Icon className="w-6 h-6" />}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg">{skill.name}</h4>
                        <div className="text-xs text-muted-foreground">{skill.level}% proficiency</div>
                      </div>
                    </div>

                    {/* Skill progress */}
                    <div className="mt-4">
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden relative">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />

                        {/* Animated dots on progress bar */}
                        <motion.div
                          className="absolute top-0 bottom-0 rounded-full bg-white w-2 h-2"
                          style={{ left: `${skill.level}%`, translateX: "-50%" }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.2, duration: 0.3 }}
                        />
                      </div>

                      {/* Experience level */}
                      <div className="mt-4 flex justify-between text-xs">
                        <span>Experience</span>
                        <span className="font-medium">
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 80
                              ? "Advanced"
                              : skill.level >= 70
                                ? "Intermediate"
                                : "Basic"}
                        </span>
                      </div>
                    </div>

                    {/* Hover reveal border */}
                    <motion.div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* MERN stack highlight */}
      <motion.div
        className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-center">Web Development Specialist</h3>
        <div className="flex flex-wrap justify-center gap-8 py-6">
          {[
            { name: "Frontend", icon: SiReact, color: "text-blue-500" },
            { name: "Backend", icon: SiNodedotjs, color: "text-green-600" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <tech.icon className={`w-16 h-16 ${tech.color}`} />
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-4">
          Specialized in building responsive and interactive web applications with modern frontend and backend
          technologies.
        </p>
      </motion.div>
    </motion.div>
  )
}

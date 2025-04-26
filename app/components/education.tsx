"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, Calendar, MapPin } from "lucide-react"
import { useRef } from "react"

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Veer Narmad South Gujarat University",
    location: "Gujarat",
    period: "2022 - 2025",
    description: "SGPA: 7.78 | CGPA: 7.09 (70%)",
  },
  {
    degree: "12th Science",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    location: "Gujarat",
    period: "2017 - 2018",
    description: "Percentage: 50%",
  },
  {
    degree: "10th Standard",
    institution: "Gujarat Secondary and Higher Secondary Education Board",
    location: "Gujarat",
    period: "2015 - 2016",
    description: "Percentage: 60%",
  },
]

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="space-y-8" ref={containerRef}>
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Timeline connector */}
          {index < educationData.length - 1 && (
            <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-primary to-transparent z-0 transform -translate-x-1/2" />
          )}

          <Card className="border-primary/20 hover:border-primary transition-colors duration-300 overflow-hidden group">
            <div className="h-2 bg-gradient-to-r from-primary to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <CardContent className="pt-6 relative">
              {/* Animated circle on timeline */}
              <motion.div
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-purple-600 z-10 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                />
              </motion.div>

              <motion.h3
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {item.degree}
              </motion.h3>

              <motion.div
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>{item.institution}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{item.period}</span>
                </div>
              </motion.div>

              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {item.description}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

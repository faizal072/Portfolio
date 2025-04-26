"use client"

import type React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  const spotlightStyle = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(147, 51, 234, 0.15),
      transparent 80%
    )
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="overflow-hidden h-full border-primary/20 hover:border-primary transition-colors duration-300 hover:shadow-lg relative group"
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightStyle }}
        />

        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <motion.h3
                className="font-bold text-xl text-white mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-sm text-white/80 line-clamp-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
        </div>

        <CardContent className="p-5 relative z-20">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(147, 51, 234, 0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 flex justify-between items-center relative z-20">
          <span className="text-sm text-muted-foreground">Project Details</span>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </CardFooter>
      </Card>
    </motion.div>
  )
}

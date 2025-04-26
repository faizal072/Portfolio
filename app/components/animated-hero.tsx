"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function AnimatedHero() {
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Animated greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                  className="inline-block mr-2"
                >
                  👋
                </motion.span>
                Hello, World!
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Patel Faizal
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              className="text-2xl md:text-3xl font-medium h-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1000,
                  "MongoDB developer",
                  1000,
                  "Express.js Developer",
                  1000,
                  "React Specialist",
                  1000,
                  "Node.js Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-muted-foreground"
              />
            </motion.div>

            {/* Animated tech icons */}
            <motion.div
              className="flex justify-center gap-8 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {[
                { icon: "M", color: "bg-green-500", label: "MongoDB" },
                { icon: "E", color: "bg-gray-700", label: "Express" },
                { icon: "R", color: "bg-blue-500", label: "React" },
                { icon: "N", color: "bg-green-600", label: "Node.js" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  className="relative group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {tech.icon}
                  </div>
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    {tech.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
             
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <a href="#about">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-12 w-12 border border-primary/20 hover:border-primary transition-colors"
                >
                  <ArrowDown className="h-6 w-6 text-primary" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

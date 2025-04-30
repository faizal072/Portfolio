"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Loader2, Send, User, Mail, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // 🔁 POST request function (formData to backend)
  async function submitContactForm(formData: FormData) {
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    const res = await fetch("https://portfolio-02o3.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      throw new Error("Failed to submit contact form")
    }

    return res.json()
  }

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setSuccess(false)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message || "Message sent successfully!")
      setSuccess(true)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
      setSuccess(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 border-primary/20 overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,50 L100,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M50,0 L50,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <form action={handleSubmit} className="space-y-4 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center">
              <User className="h-4 w-4 mr-2 text-primary" />
              Name
            </label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                required
                className="border-primary/20 focus:border-primary transition-colors pl-10"
                placeholder="Your name"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center text-muted-foreground"
                animate={{
                  color: focusedField === "name" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                <User className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: focusedField === "name" ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="border-primary/20 focus:border-primary transition-colors pl-10"
                placeholder="your.email@example.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center text-muted-foreground"
                animate={{
                  color: focusedField === "email" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                <Mail className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: focusedField === "email" ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              Message
            </label>
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                required
                className="min-h-[120px] border-primary/20 focus:border-primary transition-colors pl-10"
                placeholder="Your message here..."
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
              <motion.div
                className="absolute left-0 top-3 w-8 flex items-center justify-center text-muted-foreground"
                animate={{
                  color: focusedField === "message" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
              >
                <MessageSquare className="h-4 w-4" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: focusedField === "message" ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity relative overflow-hidden group"
              disabled={pending}
            >
              <span className="relative z-10 flex items-center">
                {pending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className={`text-sm text-center p-3 rounded-md ${
                  success
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                <div className="flex items-center justify-center">
                  {success && <CheckCircle className="inline-block mr-2 h-4 w-4" />}
                  {message}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Card>
    </motion.div>
  )
}

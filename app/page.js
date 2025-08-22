"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Target, Zap, BookOpen, Play } from "lucide-react"
import Image from "next/image"
import ProgressiveOverloadExplanation from "@/components/about_pr_ol/whatIsProgressiveOverloading"
import GooglePlayDownload from "@/components/google_play_download/google_play_download"
import Link from "next/link"
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const principles = [
  {
    icon: TrendingUp,
    title: "Gradual Progression",
    description: "Systematically increase weight, reps, or intensity to continuously challenge your muscles.",
  },
  {
    icon: Target,
    title: "Targeted Adaptation",
    description: "Force your body to adapt by progressively demanding more from your muscle fibers.",
  },
  {
    icon: Zap,
    title: "Consistent Overload",
    description: "Apply the right amount of stress to stimulate growth without causing injury.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content: "Progressive overload transformed my workouts. I've seen incredible strength gains in just 3 months!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Mike Chen",
    role: "Personal Trainer",
    content: "This scientific approach to training is what separates good results from great results.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emma Davis",
    role: "Athlete",
    content: "Understanding progressive overload helped me break through my training plateaus.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const resources = [
  {
    type: "Article",
    title: "The Science Behind Progressive Overload",
    description: "Deep dive into the physiological mechanisms that make progressive overload effective.",
    icon: BookOpen,
  },
  {
    type: "Video",
    title: "Progressive Overload in Action",
    description: "Watch real examples of how to apply progressive overload in your workouts.",
    icon: Play,
  },
  {
    type: "Guide",
    title: "Building Your Progressive Program",
    description: "Step-by-step guide to creating your own progressive overload training plan.",
    icon: Target,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                Beta
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              variants={fadeInUp}
            >
              Unlock Your Strength with <span className="text-primary">Progressive Overloading</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A scientific approach to muscle building and growth that guarantees continuous progress
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button  size="lg" className="text-lg px-8 py-6">
                <Link href='https://www.google.com'>Start Your Journey</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Progressive Overload Section */}
      <ProgressiveOverloadExplanation />
      {/* Principles Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Principles of Progressive Overload
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master these fundamental concepts to maximize your training effectiveness
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {principles.map((principle, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how progressive overload has transformed training for athletes and fitness enthusiasts
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                        width={60}
                        height={60}
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Learning Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into progressive overload with our comprehensive resources
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {resources.map((resource, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{resource.type}</Badge>
                      <resource.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Training?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of athletes who have unlocked their potential with progressive overload
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </motion.div>
        </div>
      </section>

      {/* Google Play Download Section */}

      <section className="py-24 bg-white text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <GooglePlayDownload />
          </motion.div>
        </div>
      </section>
    

      {/* Footer */}
      <footer className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-foreground">Progressive Overload</h3>
              <p className="text-muted-foreground">Science-based training for optimal results</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Resources
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

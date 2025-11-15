'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Sparkles, Package, HomeIcon, Leaf, Grid3x3, ChevronRight, Star, Check, Shield, DollarSign } from 'lucide-react'

const services = [
  {
    id: 1,
    name: 'Assembly & Mounting',
    description: 'Furniture assembly, shelf installation, and more',
    icon: Wrench,
    color: 'hover:border-emerald-500'
  },
  {
    id: 2,
    name: 'Cleaning Services',
    description: 'Deep cleaning, regular maintenance, and move-out cleans',
    icon: Sparkles,
    color: 'hover:border-cyan-500'
  },
  {
    id: 3,
    name: 'Moving & Hauling',
    description: 'Moving services, furniture delivery, and junk removal',
    icon: Package,
    color: 'hover:border-orange-500'
  },
  {
    id: 4,
    name: 'Handyman & Repairs',
    description: 'Drywall, painting, electrical work, and general repairs',
    icon: HomeIcon,
    color: 'hover:border-red-500'
  },
  {
    id: 5,
    name: 'Landscaping',
    description: 'Lawn care, gardening, tree trimming, and outdoor work',
    icon: Leaf,
    color: 'hover:border-green-500'
  },
  {
    id: 6,
    name: 'Organization',
    description: 'Organizing, decluttering, and storage solutions',
    icon: Grid3x3,
    color: 'hover:border-purple-500'
  },
]

const stats = [
  { label: 'Tasks Completed', value: '2.5M+' },
  { label: 'Trusted Taskers', value: '50K+' },
  { label: 'Active Users', value: '800K+' },
  { label: 'Average Rating', value: '4.9★' }
]

const benefits = [
  {
    icon: Check,
    title: 'Vetted Professionals',
    description: 'Every tasker is carefully screened and verified to ensure quality work.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Compare quotes upfront. No hidden fees, no surprise charges.'
  },
  {
    icon: Shield,
    title: 'Protected Transactions',
    description: 'Payment is held securely until you\'re satisfied with the work.'
  },
  {
    icon: Star,
    title: 'Real Reviews',
    description: 'Read verified reviews from real customers to choose the perfect tasker.'
  }
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, San Francisco',
    text: 'I was dreading moving my office around, but the tasker made it so easy. Professional, punctual, and friendly!',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Business Owner, Seattle',
    text: 'TaskFlow has been incredible for our office maintenance. We\'ve found reliable people we trust completely.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Professional, Austin',
    text: 'Finally, a service that\'s actually reliable and affordable. The quality of taskers here is outstanding.',
    rating: 5,
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                Get Help Done Right, When You Need It
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                TaskFlow connects you with trusted, skilled professionals for everything from furniture assembly to deep cleaning. Browse services, compare quotes, and get the job done.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="w-full sm:w-auto">
                    Browse Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/become-tasker">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Become a Tasker
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <img src="/professional-handyman-working.jpg" alt="Handyman working" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Browse Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From home maintenance to special projects, find skilled taskers for hundreds of services in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Link key={service.id} href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className={`h-full cursor-pointer transition-all hover:shadow-lg border-2 ${service.color}`}>
                    <CardHeader>
                      <IconComponent className="h-8 w-8 text-primary mb-3" />
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              How TaskFlow Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting help has never been easier. Four simple steps to a completed task.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1', title: 'Describe Your Task', description: 'Tell us what you need done, when, and where.' },
              { number: '2', title: 'Get Quotes', description: 'Qualified taskers send you personalized quotes.' },
              { number: '3', title: 'Choose & Schedule', description: 'Pick the perfect tasker and schedule the work.' },
              { number: '4', title: 'Task Complete', description: 'Your tasker arrives on time and gets it done.' }
            ].map((step, idx) => (
              <div key={idx}>
                <div className="text-5xl font-light text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Why TaskFlow Works Better
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <img src="/team-working-together.jpg" alt="Team working" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Loved by Customers
            </h2>
            <p className="text-lg text-muted-foreground">
              See what people are saying about TaskFlow and our trusted taskers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary opacity-90" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Post your first task today and join thousands of satisfied customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Browse Services Now
              </Button>
            </Link>
            <Link href="/become-tasker">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white hover:bg-white/10 text-teal-800">
                Become a Tasker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              { q: 'How do I post a task?', a: 'Click "Browse Services," describe your task, set your budget and timing, and wait for quotes.' },
              { q: 'Are taskers background checked?', a: 'Yes, all taskers go through thorough verification including background checks.' },
              { q: 'What if I\'m not satisfied?', a: 'Contact us immediately. We ensure all tasks meet our quality standards.' },
              { q: 'How does payment work?', a: 'Payment is held securely until you confirm the task is complete.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-card border border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors">
                <summary className="flex justify-between items-center font-semibold text-foreground">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

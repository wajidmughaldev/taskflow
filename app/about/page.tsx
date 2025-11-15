'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ShieldCheck, Award, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 border-b border-border bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About TaskFlow
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-background">
            We're connecting people who need help with skilled professionals ready to work
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                TaskFlow was founded with a simple mission: make it easy for anyone to find trusted help for everyday tasks.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We believe everyone should have access to skilled professionals who can help with home services, moving, cleaning, and more. Our platform connects customers with vetted taskers who are passionate about their work.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have facilitated over 1 million tasks and helped thousands of taskers build their own businesses.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl h-96 flex items-center justify-center text-muted-foreground border border-border">
              <span className="text-sm">Company Story Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Trust', description: 'Every tasker is verified and background-checked. We prioritize safety and reliability.' },
              { icon: Award, title: 'Quality', description: 'We are committed to high standards. Our taskers are professionals who take pride in their work.' },
              { icon: TrendingUp, title: 'Accessibility', description: 'We make it simple and affordable for everyone to get help with tasks they need done.' }
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="border-0 bg-background">
                  <CardHeader>
                    <Icon className="h-6 w-6 text-primary mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1M+', label: 'Tasks Completed' },
              { number: '50K+', label: 'Active Taskers' },
              { number: '£10M+', label: 'Paid Out' },
              { number: '4.8★', label: 'Average Rating' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Co-founder' },
              { name: 'Michael Chen', role: 'CTO & Co-founder' },
              { name: 'Emma Davis', role: 'Head of Operations' },
              { name: 'James Wilson', role: 'Head of Marketing' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-border">
                  <Users className="h-16 w-16 text-primary/50" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DollarSign, Clock, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const benefits = [
  { icon: DollarSign, title: 'Set Your Own Rates', description: 'You decide how much you want to charge for your services' },
  { icon: Clock, title: 'Flexible Schedule', description: 'Work when you want, as much or as little as you like' },
  { icon: TrendingUp, title: 'Earn Extra Income', description: 'Turn your skills into a reliable side income or full-time business' },
  { icon: Users, title: 'Be Your Own Boss', description: 'No boss, no meetings, just you and your work' },
  { icon: CheckCircle, title: 'Grow Your Business', description: 'Access a large customer base and build your reputation' },
  { icon: DollarSign, title: 'Secure Payments', description: 'Get paid safely and on time for every task you complete' }
]

const steps = [
  { number: 1, title: 'Apply', description: 'Tell us about yourself and your skills' },
  { number: 2, title: 'Get Verified', description: 'Pass our background check and verification process' },
  { number: 3, title: 'Complete Profile', description: 'Add your portfolio and set your rates' },
  { number: 4, title: 'Start Earning', description: 'Accept tasks and start earning money' }
]

export default function BecomeTaskerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 sm:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Earn Money by Doing What You Do Best
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Join thousands of taskers earning flexible income on their own schedule. Start today and set your own rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/become-tasker/apply">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Active Taskers' },
              { number: '1M+', label: 'Tasks Completed' },
              { number: '£10M+', label: 'Paid Out' },
              { number: '4.8★', label: 'Average Rating' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-background/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Why Join TaskFlow Taskers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card key={idx} className="border-0 bg-muted/30 hover:shadow-sm transition-shadow">
                  <CardHeader>
                    <Icon className="h-6 w-6 text-primary mb-3" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="border-0 bg-background text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-12 items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">What We're Looking For</h2>
          <div className="max-w-3xl mx-auto bg-muted/30 border border-border rounded-lg p-8">
            <ul className="space-y-4">
              {[
                'Must be 18 years or older',
                'Valid UK ID or passport',
                'Reliable internet connection',
                'Professional communication skills',
                'Positive attitude and willingness to help',
                'Must pass background check'
              ].map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How much can I earn?', a: 'You set your own rates! Most taskers earn between £15-£50 per hour depending on their skills and experience.' },
              { q: 'When can I start working?', a: 'After your application is approved and verified, you can start accepting tasks immediately.' },
              { q: 'How do I get paid?', a: 'We pay taskers weekly via direct bank transfer. Payment is secured and guaranteed for completed tasks.' },
              { q: 'Do I need experience?', a: 'No! We accept taskers of all skill levels. Just be honest about your capabilities and build your rating.' }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Apply now and join our community of successful taskers earning flexible income
          </p>
          <Link href="/become-tasker/apply">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Apply to Become a Tasker
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

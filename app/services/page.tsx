'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Sparkles, Package, Home, Leaf, Grid3x3, Paintbrush, Truck, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Service {
  id: number
  name: string
  icon: React.ComponentType<{ className?: string }>
  subservices: string[]
}

const services: Service[] = [
  {
    id: 1,
    name: 'Assembly & Mounting',
    icon: Wrench,
    subservices: [
      'Furniture Assembly',
      'IKEA Assembly',
      'Office Furniture',
      'Electronics Setup',
      'Shelving Installation',
      'TV Mounting',
      'Bookcase Assembly',
      'Desk Setup'
    ]
  },
  {
    id: 2,
    name: 'Cleaning Services',
    icon: Sparkles,
    subservices: [
      'Regular Cleaning',
      'Deep Cleaning',
      'Office Cleaning',
      'Carpet Cleaning',
      'Window Cleaning',
      'Move-Out Cleaning',
      'Post-Construction Cleaning',
      'Pressure Washing'
    ]
  },
  {
    id: 3,
    name: 'Moving & Hauling',
    icon: Package,
    subservices: [
      'Local Moving',
      'Long Distance Moving',
      'Packing Service',
      'Unpacking Service',
      'Storage Help',
      'Furniture Delivery',
      'Junk Removal',
      'Heavy Lifting'
    ]
  },
  {
    id: 4,
    name: 'Handyman & Repairs',
    icon: Home,
    subservices: [
      'General Repairs',
      'Wall Mounting',
      'Door Repair',
      'Drywall Repair',
      'Fixture Installation',
      'Cabinet Repair',
      'Deck Repair',
      'Gutter Cleaning'
    ]
  },
  {
    id: 5,
    name: 'Painting',
    icon: Paintbrush,
    subservices: [
      'Interior Painting',
      'Exterior Painting',
      'Cabinet Painting',
      'Trim Work',
      'Wallpaper Installation',
      'Accent Walls',
      'Touch-Up Painting',
      'Stain & Varnish'
    ]
  },
  {
    id: 6,
    name: 'Delivery & Moving',
    icon: Truck,
    subservices: [
      'Same-Day Delivery',
      'White Glove Delivery',
      'Furniture Delivery',
      'Grocery Pickup',
      'Document Delivery',
      'Oversized Item Moving',
      'Fragile Item Transport',
      'Last-Mile Delivery'
    ]
  },
  {
    id: 7,
    name: 'Landscaping',
    icon: Leaf,
    subservices: [
      'Yard Cleanup',
      'Tree Trimming',
      'Lawn Mowing',
      'Garden Design',
      'Leaf Removal',
      'Landscaping Design',
      'Mulch Installation',
      'Hedge Trimming'
    ]
  },
  {
    id: 8,
    name: 'Organization',
    icon: Grid3x3,
    subservices: [
      'Closet Organization',
      'Garage Organization',
      'Home Office Setup',
      'Decluttering',
      'Storage Solutions',
      'Pantry Organization',
      'Office Organization',
      'Moving Organization'
    ]
  },
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.subservices.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <section className="border-b border-border py-12 md:py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Browse All Services
          </h1>
          <p className="text-lg mb-8 max-w-2xl text-background">
            From home maintenance to special projects, find skilled taskers for every service you need.
          </p>

          {/* Search */}
          <div className="max-w-md">
            <Input
              type="text"
              placeholder="Search services or sub-services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 text-card bg-background"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = service.icon
                return (
                  <Link key={service.id} href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary group border-2">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {service.subservices.length} services available
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-2">
                          {service.subservices.slice(0, 6).map((sub, idx) => (
                            <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                              <span className="text-primary">•</span>
                              {sub}
                            </div>
                          ))}
                          {service.subservices.length > 6 && (
                            <div className="text-xs text-primary font-medium col-span-2 pt-2">
                              +{service.subservices.length - 6} more
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No services found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* All Services Detailed View */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            All Services & Sub-Services
          </h2>

          <div className="space-y-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">{service.name}</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {service.subservices.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                        className="p-4 bg-muted rounded-lg hover:bg-primary hover:text-white transition-all group text-sm font-medium text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {sub}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary opacity-90" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See What You Need?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Post a custom task and our taskers will help you find the perfect solution.
          </p>
          
          <Link href="/booking">
            <Button size="lg" variant="secondary">
              Post a Custom Task
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, MapPin, Award, Zap, ChevronLeft, Calendar, Clock, MapPinIcon, FileText } from 'lucide-react'

interface PageProps {
  params: Promise<{ category: string }>
}

const mockTaskers = [
  {
    id: 1,
    name: 'John Smith',
    rating: 4.9,
    reviews: 150,
    price: '£25/hour',
    location: 'San Francisco, CA',
    badge: 'Top Tasker',
    description: 'Experienced in all types of assembly tasks with attention to detail',
    responsive: true
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 4.8,
    reviews: 120,
    price: '£22/hour',
    location: 'San Francisco, CA',
    description: 'Fast and reliable service with great communication',
    responsive: true
  },
  {
    id: 3,
    name: 'Mike Davis',
    rating: 4.7,
    reviews: 95,
    price: '£20/hour',
    location: 'Oakland, CA',
    description: 'Flexible scheduling available for all timezones',
    responsive: false
  },
  {
    id: 4,
    name: 'Emily Chen',
    rating: 4.9,
    reviews: 140,
    price: '£26/hour',
    location: 'San Francisco, CA',
    badge: 'Top Tasker',
    description: 'Premium quality service with guaranteed satisfaction',
    responsive: true
  },
]

export default async function ServicePage({ params }: PageProps) {
  const { category } = await params
  const [selectedTasker, setSelectedTasker] = useState<typeof mockTaskers[0] | null>(null)
  const [showHireForm, setShowHireForm] = useState(false)
  const [hireFormData, setHireFormData] = useState({
    date: '',
    time: '',
    location: '',
    description: '',
    duration: '1'
  })

  const handleHireFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setHireFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Booking submitted for ${selectedTasker?.name}!`)
    setShowHireForm(false)
    setSelectedTasker(null)
    setHireFormData({ date: '', time: '', location: '', description: '', duration: '1' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-3 capitalize">
            {category.replace(/-/g, ' ')} Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Find trusted taskers for your {category.replace(/-/g, ' ')} needs
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">Showing {mockTaskers.length} available taskers</p>
            <select className="px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Recommended</option>
              <option>Highest rated</option>
              <option>Lowest price</option>
            </select>
          </div>

          {/* Taskers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mockTaskers.map((tasker) => (
              <Card key={tasker.id} className="overflow-hidden hover:shadow-md transition-all border-0 bg-muted/30 flex flex-col">
                {/* Header with Badge */}
                <div className="relative h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border-b border-border">
                  {tasker.badge && (
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      {tasker.badge}
                    </div>
                  )}
                  <img
                    src={`/professional-portrait.png?height=80&width=80&query=professional portrait ${tasker.name}`}
                    alt={tasker.name}
                    className="w-20 h-20 rounded-full border-4 border-background"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{tasker.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {tasker.location}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(tasker.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <span className="font-semibold text-foreground">{tasker.rating}</span>
                    <span className="text-sm text-muted-foreground">({tasker.reviews})</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">{tasker.description}</p>

                  {/* Responsive Badge */}
                  {tasker.responsive && (
                    <div className="flex items-center gap-2 mb-4 text-xs text-primary font-medium">
                      <Zap className="h-4 w-4" />
                      Responds quickly
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-6 pb-4 border-t border-border pt-4">
                    <p className="text-2xl font-bold text-primary">{tasker.price}</p>
                  </div>

                  {/* CTA */}
                  <Button onClick={() => {
                    setSelectedTasker(tasker)
                    setShowHireForm(true)
                  }} className="w-full mt-auto">
                    Hire This Tasker
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hire Form Modal */}
          {showHireForm && selectedTasker && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <Card className="w-full max-w-2xl border-0 bg-background max-h-[90vh] overflow-y-auto">
                <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                  <CardTitle className="text-2xl">Hire {selectedTasker.name}</CardTitle>
                  <button
                    onClick={() => setShowHireForm(false)}
                    className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ×
                  </button>
                </CardHeader>

                <CardContent className="pt-6">
                  <form onSubmit={handleHireSubmit} className="space-y-6">
                    {/* Tasker Summary */}
                    <div className="flex items-center gap-4 pb-6 border-b border-border">
                      <img
                        src={`/placeholder.svg?height=60&width=60&query=professional portrait`}
                        alt={selectedTasker.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">{selectedTasker.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          {selectedTasker.rating} ({selectedTasker.reviews} reviews)
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-primary">{selectedTasker.price}</p>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={hireFormData.date}
                        onChange={handleHireFormChange}
                        required
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={hireFormData.time}
                        onChange={handleHireFormChange}
                        required
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Estimated Duration
                      </label>
                      <select
                        name="duration"
                        value={hireFormData.duration}
                        onChange={handleHireFormChange}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="0.5">30 minutes</option>
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="8">Full day (8 hours)</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={hireFormData.location}
                        onChange={handleHireFormChange}
                        required
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter the address where you need help"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Task Description
                      </label>
                      <textarea
                        name="description"
                        value={hireFormData.description}
                        onChange={handleHireFormChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Describe the work you need done..."
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex gap-4 pt-6 border-t border-border">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowHireForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1">
                        Confirm & Book
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Book Through TaskFlow?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Verified Taskers', description: 'All taskers are background-checked and verified for quality' },
              { icon: Zap, title: 'Best Price Guarantee', description: 'Competitive rates with transparent pricing' },
              { icon: Star, title: 'Money-Back Guarantee', description: 'If you\'re not satisfied, we\'ll refund you' }
            ].map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <Card key={idx} className="text-center border-0 bg-background">
                  <CardHeader>
                    <ItemIcon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

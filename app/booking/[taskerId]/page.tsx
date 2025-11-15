'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

interface PageProps {
  params: Promise<{ taskerId: string }>
}

export default async function BookingPage({ params }: PageProps) {
  const { taskerId } = await params
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '2',
    description: '',
    address: '',
    zipcode: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/services" className="text-primary hover:underline">
              ← Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h1 className="text-3xl font-bold text-foreground mb-8">Book Your Task</h1>

                {/* Progress */}
                <div className="flex gap-4 mb-8">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`flex-1 h-2 rounded-full transition-colors ${
                        s <= step ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                {/* Step 1: Date & Time */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">When do you need help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Duration (hours)</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="1">1 hour</option>
                        <option value="2">2 hours</option>
                        <option value="3">3 hours</option>
                        <option value="4">4 hours</option>
                        <option value="8">Full day (8 hours)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Tell us more about the task</h2>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Task Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Describe what you need help with..."
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Location */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Where is the task?</h2>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Postcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        placeholder="Enter postcode"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Pay */}
                {step === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Review Your Booking</h2>
                    <div className="bg-muted rounded-lg p-6 space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-foreground">Date & Time:</span>
                        <span className="font-bold text-foreground">{formData.date} at {formData.time}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-foreground">Duration:</span>
                        <span className="font-bold text-foreground">{formData.duration} hours</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-foreground">Location:</span>
                        <span className="font-bold text-foreground">{formData.address || 'Not specified'}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t-2 border-primary">
                        <span className="text-lg font-bold text-foreground">Estimated Total:</span>
                        <span className="text-2xl font-bold text-primary">£{parseInt(formData.duration) * 25}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-4 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (step < 4) setStep(step + 1)
                      else alert('Booking confirmed!')
                    }}
                    className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
                  >
                    {step === 4 ? 'Confirm & Pay' : 'Next'}
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-20">
                <h3 className="text-xl font-bold text-foreground mb-6">Booking Summary</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Tasker</p>
                    <p className="font-bold text-foreground">John Smith</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">Base Rate</p>
                    <p className="font-bold text-foreground">£25/hour</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">Service Fee</p>
                    <p className="font-bold text-foreground">£3.99</p>
                  </div>
                  <div className="border-t-2 border-primary pt-4">
                    <p className="text-sm text-muted-foreground">Estimated Total</p>
                    <p className="text-2xl font-bold text-primary">£{parseInt(formData.duration) * 25 + 3.99 || 53}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

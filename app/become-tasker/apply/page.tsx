'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

const serviceCategories = [
  'Assembly',
  'Cleaning',
  'Moving',
  'Handyman',
  'Painting',
  'Delivery',
  'Landscaping',
  'Organizing',
  'Other'
]

export default function TaskerApplicationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    postcode: '',
    services: [] as string[],
    experience: '',
    hourlyRate: '',
    bio: '',
    agreeTerms: false
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleNextStep = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.email)) {
      setError('Please fill in all required fields')
      return
    }
    if (step === 2 && formData.services.length === 0) {
      setError('Please select at least one service')
      return
    }
    setError('')
    setStep(step + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeTerms) {
      setError('Please agree to the terms')
      return
    }
    alert('Application submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/become-tasker" className="text-primary hover:underline">
              ← Back
            </Link>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Apply to Become a Tasker</h1>
            <p className="text-muted-foreground mb-8">Step {step} of 4</p>

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full transition-colors ${
                    s <= step ? 'bg-secondary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Postcode
                      </label>
                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Services */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">What services do you offer?</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {serviceCategories.map((service) => (
                      <label
                        key={service}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.services.includes(service)
                            ? 'border-secondary bg-secondary/5'
                            : 'border-border hover:border-secondary/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="mr-2"
                        />
                        <span className="font-medium text-foreground">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Experience */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Tell us about your experience</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Years of Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Hourly Rate (£)
                    </label>
                    <input
                      type="number"
                      name="hourlyRate"
                      value={formData.hourlyRate}
                      onChange={handleChange}
                      placeholder="e.g., 25"
                      min="15"
                      max="100"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      About You (Bio)
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell customers a bit about yourself and your services..."
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Terms */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Review & Confirm</h2>
                  
                  <div className="bg-muted rounded-lg p-6 space-y-3">
                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Services:</strong> {formData.services.join(', ')}</p>
                    <p><strong>Rate:</strong> £{formData.hourlyRate}/hour</p>
                  </div>

                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 rounded"
                    />
                    <span className="text-sm text-foreground">
                      I agree to the TaskFlow Terms of Service and understand that all taskers must pass a background check
                    </span>
                  </label>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-4 py-3 border-2 border-secondary text-secondary rounded-lg font-bold hover:bg-secondary/10 transition-colors"
                  >
                    Previous
                  </button>
                )}
                <button
                  type={step === 4 ? 'submit' : 'button'}
                  onClick={() => step < 4 && handleNextStep()}
                  className="flex-1 px-4 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-secondary-dark transition-colors"
                >
                  {step === 4 ? 'Submit Application' : 'Next'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

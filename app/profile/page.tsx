'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+44 123 456 789',
    bio: 'Experienced tasker with 5+ years in furniture assembly and home services.',
    hourlyRate: '£25',
    location: 'London, UK'
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/dashboard" className="text-primary hover:underline">
              ← Back to Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  JS
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">{profile.name}</h2>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <span className="text-accent">★ 4.9</span>
                  <span className="text-muted-foreground text-sm">(150 reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{profile.location}</p>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Personal Information</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Email', value: profile.email, key: 'email' },
                    { label: 'Phone', value: profile.phone, key: 'phone' },
                    { label: 'Hourly Rate', value: profile.hourlyRate, key: 'hourlyRate' },
                    { label: 'Location', value: profile.location, key: 'location' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <label className="text-foreground font-medium">{item.label}</label>
                      {isEditing ? (
                        <input
                          type="text"
                          defaultValue={item.value}
                          className="px-3 py-1 bg-input border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      ) : (
                        <span className="text-foreground">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">About</h3>
                {isEditing ? (
                  <textarea
                    defaultValue={profile.bio}
                    rows={4}
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                ) : (
                  <p className="text-foreground">{profile.bio}</p>
                )}
              </div>

              {/* Services */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {['Furniture Assembly', 'Home Services', 'Handyman'].map((service) => (
                    <span key={service} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {isEditing && (
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full px-4 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'

const mockTasks = [
  { id: 1, title: 'Furniture Assembly', customer: 'John Doe', date: '2025-01-20', status: 'completed', payment: '£75' },
  { id: 2, title: 'Home Cleaning', customer: 'Jane Smith', date: '2025-01-19', status: 'completed', payment: '£60' },
  { id: 3, title: 'Wall Mounting', customer: 'Mike Johnson', date: '2025-01-25', status: 'upcoming', payment: '£50' },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, John</h1>
              <p className="text-muted-foreground">Manage your tasks and profile</p>
            </div>
            <Link
              href="/profile"
              className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              View Profile
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            {['overview', 'tasks', 'earnings', 'messages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Active Tasks', value: '3', color: 'primary' },
                  { label: 'Completed', value: '47', color: 'secondary' },
                  { label: 'Rating', value: '4.9', color: 'accent' },
                  { label: 'This Month', value: '£1,250', color: 'primary' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                    <p className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Recent Tasks */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Recent Tasks</h3>
                <div className="space-y-3">
                  {mockTasks.slice(0, 2).map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{task.title}</p>
                        <p className="text-sm text-muted-foreground">{task.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{task.payment}</p>
                        <span className={`text-xs px-2 py-1 rounded ${task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tasks Tab */}
          {activeTab === 'tasks' && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">All Tasks</h3>
              <div className="space-y-4">
                {mockTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.customer} · {task.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary mb-2">{task.payment}</p>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === 'earnings' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Earnings Overview</h3>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                  Chart placeholder
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Earnings Summary</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border">
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold text-primary">£1,250</p>
                  </div>
                  <div className="pb-4 border-b border-border">
                    <p className="text-sm text-muted-foreground">This Year</p>
                    <p className="text-2xl font-bold text-primary">£8,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average per Task</p>
                    <p className="text-2xl font-bold text-primary">£65</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Messages</h3>
              <p className="text-muted-foreground">No new messages</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

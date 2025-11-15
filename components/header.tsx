'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-semibold text-lg text-foreground hidden sm:inline">TaskFlow</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth & Tasker Button */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">
            Log In
          </Link>
          <Link
            href="/become-tasker"
            className="px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors"
          >
            Become Tasker
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-muted rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="px-4 py-4 space-y-3">
              <Link href="/services" className="block text-sm text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-sm text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-sm text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/login" className="block text-sm text-foreground hover:text-primary transition-colors">
                Log In
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

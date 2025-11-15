import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-semibold text-base">TaskFlow</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">Connecting people with trusted, skilled taskers.</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/become-tasker" className="text-gray-300 hover:text-white transition-colors">Become Tasker</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Help</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Safety</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-300">&copy; 2025 TaskFlow. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Zap, ChevronRight } from 'lucide-react'

export function LandingPageComponent() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8" />
            <span className="text-2xl font-bold">Vibify</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-purple-200">Login</Button>
            <Button variant="outline" className="text-purple-600 border-white hover:bg-white">Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="container  mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Jam Together, <span className="text-yellow-300">Anywhere</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Create, collaborate, and groove with friends in real-time. Your music, your vibe, your way.
          </p>
          <form name='landing-form' onSubmit={handleSubmit} className="flex justify-center mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-md mr-2 bg-white/10 border-white/20 text-white placeholder-green-700 placeholder-opacity-80"
            />
            <Button type="submit" className="bg-yellow-400 text-purple-800 hover:bg-yellow-300">
              Get Started
            </Button>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Music, title: "Curate Together", description: "Build playlists collaboratively with friends in real-time." },
            { icon: Users, title: "Live Listening Parties", description: "Host jam sessions and listen along with your crew." },
            { icon: Zap, title: "Instant Sync", description: "Your music stays in perfect harmony across all devices, always." },
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <feature.icon className="h-12 w-12 mb-4 text-yellow-300" />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Jam?</h2>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-800">
            Start Your Free Trial
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Music className="h-6 w-6" />
            <span className="text-xl font-semibold">Vibify</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300">About</a>
            <a href="#" className="hover:text-yellow-300">Features</a>
            <a href="#" className="hover:text-yellow-300">Pricing</a>
            <a href="#" className="hover:text-yellow-300">Contact</a>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-white/60">
          © 2024 Vibify. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
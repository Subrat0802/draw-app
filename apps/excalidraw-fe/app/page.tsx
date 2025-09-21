import { 
  Palette, 
  Users, 
  Download, 
  Zap, 
  Lock, 
  Globe,
  ArrowRight,
  Pen,
  Share2,
  Github,
  Twitter
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Pen className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DrawFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <Link href={"/signin"}><button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                Get Started
              </button></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Draw, Create,
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Collaborate</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The simple yet powerful drawing tool that brings your ideas to life. 
              Sketch diagrams, wireframes, and illustrations with hand-drawn charm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href={"/signup"}><button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                Start Drawing Now
                <ArrowRight className="h-5 w-5" />
              </button></Link>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                View Examples
              </button>
            </div>
            
            {/* Hero Visual */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500">DrawFlow - Untitled Drawing</div>
                </div>
                <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex 
                    items-center justify-center border-4 border-dashed border-blue-300 transform rotate-3 hover:rotate-6 
                    transition-transform">
                      <Palette className="h-16 w-16 text-blue-600" />
                    </div>
                    <p className="text-gray-500 text-lg">Start creating amazing diagrams</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full blur-sm opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-pink-400 rounded-full blur-sm opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> create</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features wrapped in a simple, intuitive interface that gets out of your way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: Palette,
                title: "Infinite Canvas",
                description: "Draw without limits on an endless canvas that adapts to your creativity."
              },
              {
                icon: Users,
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time, see changes as they happen."
              },
              {
                icon: Download,
                title: "Export Anywhere",
                description: "Export your creations as PNG, SVG, or share with a simple link."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for speed with smooth performance on any device."
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "Your data stays private. No accounts required, work offline-ready."
              },
              {
                icon: Globe,
                title: "Works Everywhere",
                description: "Access from any browser, on any device. Progressive web app ready."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See it in action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From quick sketches to detailed diagrams, DrawFlow handles it all with elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Perfect for every use case</h3>
              <div className="space-y-6">
                {[
                  { icon: Share2, title: "Wireframing", desc: "Design user interfaces and user experiences" },
                  { icon: Users, title: "Team Brainstorming", desc: "Collaborate on ideas and concepts in real-time" },
                  { icon: Zap, title: "System Architecture", desc: "Diagram complex systems and workflows" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500">Live Demo</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4 transform hover:scale-105 transition-transform">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg"></div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Interactive drawing canvas</p>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start creating?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who use DrawFlow to bring their ideas to life.
            No signup required, start drawing immediately.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto">
            Launch DrawFlow
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Pen className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold">DrawFlow</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The simple, powerful drawing tool that brings your ideas to life with hand-drawn charm and collaborative features.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 DrawFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import Link from 'next/link';
import { Calculator } from '@/components/Calculator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Terminal, Zap, TrendingUp, BarChart3, Code2, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />
        <div className="scan-line" />

        <header className="relative z-10 border-b border-neon-cyan/20 bg-cyber-gray/10 backdrop-blur-cyber">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Terminal className="w-8 h-8 text-neon-cyan animate-pulse-neon" />
                <div className="absolute inset-0 w-8 h-8 border border-neon-cyan/50 rounded animate-cyber-pulse" />
              </div>
              <span className="font-tech font-bold text-2xl neon-text">
                ROI<span className="text-neon-pink">CALC</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <nav>
                <ul className="flex gap-6">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 font-mono text-sm">
                      [HOME]
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 font-mono text-sm">
                      [FEATURES]
                    </Link>
                  </li>
                  <li>
                    <Link href="#calculator" className="text-gray-300 hover:text-neon-cyan transition-all duration-300 font-mono text-sm">
                      [CALC]
                    </Link>
                  </li>
                </ul>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full">
                  <Cpu className="w-4 h-4 text-neon-cyan animate-pulse" />
                  <span className="text-neon-cyan font-mono text-sm">ADVANCED_ROI_CALCULATOR_v2.0</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-tech font-black mb-6 leading-tight">
                  <span className="neon-text">CALCULATE</span>
                  <br />
                  <span className="text-white">YOUR</span>
                  <br />
                  <span className="text-neon-pink animate-glow">ROI</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
                  <span className="text-neon-cyan">&gt;</span> Advanced financial analysis powered by cutting-edge algorithms
                  <br />
                  <span className="text-neon-cyan">&gt;</span> Real-time calculations with precision metrics
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="cyber-card p-8 animate-float">
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-2 text-neon-green font-mono text-xs">
                        <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                        SYSTEM_ONLINE
                      </div>
                    </div>

                    <h2 className="text-2xl font-tech font-bold mb-6 text-neon-cyan">
                      [ANALYSIS_MODULE]
                    </h2>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group">
                        <TrendingUp className="w-5 h-5 text-neon-green mt-1 group-hover:animate-pulse" />
                        <div>
                          <span className="text-white font-mono">Data-driven decision making</span>
                          <div className="text-gray-400 text-sm font-mono mt-1">
                            Execute strategic choices based on quantified metrics
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 group">
                        <BarChart3 className="w-5 h-5 text-neon-blue mt-1 group-hover:animate-pulse" />
                        <div>
                          <span className="text-white font-mono">Financial impact analysis</span>
                          <div className="text-gray-400 text-sm font-mono mt-1">
                            Comprehensive investment performance evaluation
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 group">
                        <Zap className="w-5 h-5 text-neon-orange mt-1 group-hover:animate-pulse" />
                        <div>
                          <span className="text-white font-mono">Resource optimization</span>
                          <div className="text-gray-400 text-sm font-mono mt-1">
                            Maximize returns through intelligent allocation
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <a
                        href="#calculator"
                        className="cyber-button w-full text-center block font-mono"
                      >
                        [INITIALIZE_CALCULATOR]
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="cyber-card p-6">
                    <div className="font-mono text-neon-green text-sm mb-4">
                      $ ./roi_preview.sh --mode=demo
                    </div>
                    <div className="bg-cyber-darker rounded p-4 font-mono text-sm">
                      <div className="text-neon-cyan mb-2">Initializing ROI Calculator...</div>
                      <div className="text-gray-400 mb-1">Loading financial modules... [OK]</div>
                      <div className="text-gray-400 mb-1">Connecting to data streams... [OK]</div>
                      <div className="text-gray-400 mb-1">Calibrating algorithms... [OK]</div>
                      <div className="text-neon-green mt-3">System ready for analysis.</div>
                      <div className="text-neon-pink mt-2 animate-pulse">
                        &gt; Awaiting user input...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 bg-cyber-dark/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-tech font-bold mb-4">
                  <span className="text-neon-cyan">[SYSTEM_</span>
                  <span className="text-white">CAPABILITIES</span>
                  <span className="text-neon-cyan">]</span>
                </h2>
                <p className="text-gray-400 font-mono">Advanced features for precision analysis</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="cyber-card p-8 group hover:shadow-neon-strong transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                      <Code2 className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-tech font-bold mb-3 text-neon-cyan">PRECISION_ENGINE</h3>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    Quantum-grade algorithms ensure maximum accuracy in financial projections and ROI calculations.
                  </p>
                  <div className="mt-4 text-xs font-mono text-neon-green">
                    [ACCURACY: 99.97%]
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:shadow-neon-strong transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-neon-blue/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                      <Zap className="w-8 h-8 text-neon-blue" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-tech font-bold mb-3 text-neon-blue">NEURAL_INTERFACE</h3>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    Intuitive user experience with real-time feedback and intelligent form validation systems.
                  </p>
                  <div className="mt-4 text-xs font-mono text-neon-green">
                    [RESPONSE_TIME: &lt;50ms]
                  </div>
                </div>

                <div className="cyber-card p-8 group hover:shadow-neon-strong transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-neon-pink/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                      <BarChart3 className="w-8 h-8 text-neon-pink" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-tech font-bold mb-3 text-neon-pink">DATA_VISUALIZATION</h3>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    Advanced 3D charts and interactive dashboards for comprehensive financial analysis.
                  </p>
                  <div className="mt-4 text-xs font-mono text-neon-green">
                    [CHARTS: ENABLED]
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="calculator" className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-tech font-bold mb-4">
                    <span className="text-neon-cyan">[ROI_</span>
                    <span className="text-white">CALCULATOR</span>
                    <span className="text-neon-cyan">]</span>
                  </h2>
                  <p className="text-gray-400 font-mono mb-2">
                    Initialize financial analysis protocol
                  </p>
                  <div className="inline-flex items-center gap-2 text-neon-green font-mono text-sm">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    SYSTEM_READY_FOR_INPUT
                  </div>
                </div>
                <Calculator />
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-cyber-dark to-cyber-darker border-t border-neon-cyan/20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-tech font-bold mb-6">
                  <span className="neon-text">READY_TO_</span>
                  <span className="text-neon-pink">OPTIMIZE</span>
                  <span className="text-white">?</span>
                </h2>
                <p className="text-xl mb-8 text-gray-300 font-mono leading-relaxed">
                  Connect with our quantum financial analysts to unlock advanced ROI optimization strategies.
                </p>
                <button
                  type="button"
                  className="cyber-button font-mono text-lg px-8 py-4"
                >
                  [INITIATE_CONTACT_PROTOCOL]
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-cyber-darker border-t border-neon-cyan/20 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-neon-cyan animate-pulse-neon" />
                  <span className="font-tech font-bold text-xl">
                    ROI<span className="text-neon-pink">CALC</span>
                  </span>
                </div>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  Advanced financial analysis systems for next-generation business intelligence.
                </p>
                <div className="mt-4 text-xs font-mono text-neon-green">
                  [STATUS: OPERATIONAL]
                </div>
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg mb-4 text-neon-cyan">[NAVIGATION]</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Home</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Features</a></li>
                  <li><a href="#calculator" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Calculator</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; About</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg mb-4 text-neon-cyan">[RESOURCES]</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; API Reference</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors font-mono text-sm">&gt; Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-tech font-bold text-lg mb-4 text-neon-cyan">[CONTACT]</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 font-mono text-sm">admin@roicalc.sys</li>
                  <li className="text-gray-400 font-mono text-sm">+1.555.ROI.CALC</li>
                </ul>
                <div className="mt-4 flex gap-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-mono text-xs">SECURE_CONNECTION</span>
                </div>
              </div>
            </div>
            <div className="border-t border-neon-cyan/20 mt-12 pt-8 text-center">
              <p className="text-gray-500 font-mono text-sm">
                &copy; {new Date().getFullYear()} ROI_CALC_SYSTEMS. All rights reserved. |
                <span className="text-neon-cyan"> QUANTUM_SECURED</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
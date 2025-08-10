import React from 'react';

export default function Home() {
  return (
    <div className="relative">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black-background via-dark-gray to-black-background">

    {/* Grid Overlay */}
    <div className="absolute inset-0 z-10 opacity-20"
    style={{
      backgroundImage: `
      linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
    }}>
    </div>

    {/* Hero Content */}
    <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
    <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text">
    <span className="text-neon-cyan">DRACONIS</span>
    <br />
    <span className="text-neon-magenta">SYSTEMS</span>
    </h1>

    <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
    Intelligence Everywhere
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <button className="neon-border-cyan text-lg">
    TextBridge
    </button>
    <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
    <button className="neon-border-magenta text-lg">
    Between the Lines
    </button>
    </div>
    </div>
    </section>

    {/* Services Preview Section */}
    <section className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
    Our <span className="text-neon-cyan">Projects</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Service Cards */}
    <div className="bg-dark-gray neon-border p-6 hover:neon-glow transition-all duration-300 group">
    <div className="text-neon-cyan text-3xl mb-4">📱</div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
    TextBridge
    </h3>
    <p className="text-gray-300">
    AI conversations via SMS - no smartphone required
    </p>
    </div>

    <div className="bg-dark-gray neon-border p-6 hover:neon-glow transition-all duration-300 group">
    <div className="text-neon-magenta text-3xl mb-4">📚</div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-magenta transition-colors">
    Between the Lines
    </h3>
    <p className="text-gray-300">
    Step inside your favorite books and live the story
    </p>
    </div>

    <div className="bg-dark-gray neon-border p-6 hover:neon-glow transition-all duration-300 group">
    <div className="text-neon-green text-3xl mb-4">⚡</div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
    Share Your Passion
    </h3>
    <p className="text-gray-300">
    Like what we do? Contact us and share your experience
    </p>
    </div>

    </div>
    </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-20 px-6 bg-gradient-to-r from-dark-gray to-black-background">
    <div className="container mx-auto max-w-4xl text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
    Let's power your <span className="text-neon-magenta">adventure</span>
    </h2>
    <p className="text-xl mb-10 text-gray-300">
    Contact us and help us make your story more real
    </p>
    <button className="neon-border px-12 py-6 text-xl">
    Let's build something extraordinary
    </button>
    </div>
    </section>
    </div>
  );
}

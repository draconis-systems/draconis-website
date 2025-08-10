export default function About() {
  return (
    <div className="relative">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br">
    <div className="container mx-auto px-6 max-w-4xl text-center">
    <h1 className="text-6xl md:text-8xl font-bold mb-8 glitch-text">
    <span className="text-neon-cyan">ABOUT</span>
    <br />
    <span className="text-neon-magenta">DRACONIS</span>
    </h1>

    <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
    Founded on the principle that technology should serve human creativity and innovation,
    DRACONIS SYSTEMS emerged as a passion project to empower people through access and
    storytelling.
    </p>
    </div>
    </section>

    {/* Mission Section */}
    <section className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
    Our <span className="text-neon-green">Mission</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
    <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Pioneering Digital Solutions</h3>
    <p className="text-gray-300 mb-6">
    We specialize in innovative solutions which open up new frontiers in storytelling, and
    bring the latest models to people without reliable internet access and power.
      </p>
      <p className="text-gray-300">
      From interactive storytelling to cutting-edge models access with bring the the new
      frontier to you without replacing your creative control.
      </p>
      </div>

      <div className="bg-dark-gray neon-border p-8">
      <h4 className="text-xl font-bold mb-4 text-neon-magenta">Core Values</h4>
      <ul className="space-y-3 text-gray-300">
      <li>• Innovation through collaboration</li>
      <li>• Technology that serves creativity</li>
      <li>• Open-source contribution mindset</li>
      </ul>
      </div>
      </div>
      </div>
      </section>

      {/* Team/Philosophy Section */}
      <section className="py-20 px-6 bg-gradient-to-r">
      <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
      <span className="text-neon-cyan">Passion</span> for Technology
      </h2>

      <div className="text-lg text-gray-300 space-y-6">
      <p>
      We want to collaborate with like-minded creatives and pioneers who are reinventing
      and revolutionizing the way we interact with and conceive information. Contact us.
      </p>
      </div>
      </div>
      </section>
      </div>
  );
}

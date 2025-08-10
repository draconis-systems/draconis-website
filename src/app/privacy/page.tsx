export default function Privacy() {
    return (
        <div className="relative">
        <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
        <span className="text-neon-cyan">Privacy</span>
        <span className="text-white"> Policy</span>
        </h1>

        <p className="text-center text-gray-300 mb-12 text-lg">
        Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-gray-300">
        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-neon-magenta">Information We Collect</h2>
        <p className="mb-4">
        DRACONIS SYSTEMS LLC is committed to protecting your privacy. We collect information
        you provide directly to us, such as when you contact us for services, subscribe to
        updates, or engage with our platforms.
        </p>
        <ul className="space-y-2 ml-6">
        <li>• Contact information (name, email, phone number)</li>
        <li>• Project requirements and technical specifications</li>
        <li>• Communication preferences</li>
        <li>• Usage data for service improvement</li>
        </ul>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-neon-green">How We Use Your Information</h2>
        <ul className="space-y-2">
        <li>• Provide and improve our services</li>
        <li>• Communicate about projects and updates</li>
        <li>• Respond to inquiries and support requests</li>
        <li>• Comply with legal obligations</li>
        <li>• Protect against fraud and security threats</li>
        </ul>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-electric-blue">Data Security</h2>
        <p>
        We implement appropriate technical and organizational security measures to protect
        your personal information against unauthorized access, alteration, disclosure, or
        destruction. All data transmission is encrypted using industry-standard protocols.
        </p>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-hot-pink">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="space-y-2 ml-6">
        <li>• Access your personal information</li>
        <li>• Correct inaccurate data</li>
        <li>• Request deletion of your data</li>
        <li>• Opt-out of marketing communications</li>
        <li>• Data portability where applicable</li>
        </ul>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-neon-cyan">Contact Information</h2>
        <p>
        For questions about this Privacy Policy or to exercise your rights, contact us at:
        </p>
        <div className="mt-4 space-y-2">
        <p><strong>Email:</strong> contact@draconisai.com</p>
        </div>
        </section>
        </div>
        </div>
        </section>
        </div>
    );
}

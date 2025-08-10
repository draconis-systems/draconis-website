export default function Terms() {
    return (
        <div className="relative">
        <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
        <span className="text-neon-magenta">Terms</span>
        <span className="text-white"> of Service</span>
        </h1>

        <p className="text-center text-gray-300 mb-12 text-lg">
        Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-gray-300">
        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-neon-cyan">Acceptance of Terms</h2>
        <p>
        By accessing and using DRACONIS SYSTEMS LLC services, you accept and agree to be
        bound by the terms and provision of this agreement. These terms apply to all
        visitors, users, and others who access or use our services.
        </p>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-neon-green">Services Description</h2>
        <p className="mb-4">DRACONIS SYSTEMS LLC provides:</p>
        <ul className="space-y-2 ml-6">
        <li>• AI-powered software solutions and consulting</li>
        <li>• Entertainment technology development</li>
        <li>• Communication systems and platforms</li>
        </ul>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-electric-blue">Client Responsibilities</h2>
        <ul className="space-y-2">
        <li>• Provide accurate project requirements and information</li>
        <li>• Respond to communications in a timely manner</li>
        <li>• Make payments according to agreed schedules</li>
        <li>• Comply with applicable laws and regulations</li>
        <li>• Respect intellectual property rights</li>
        </ul>
        </section>

        <section className="bg-dark-gray neon-border p-8">
        <h2 className="text-2xl font-bold mb-4 text-hot-pink">Intellectual Property</h2>
        <p className="mb-4">
        Unless otherwise specified in writing, all custom work developed by DRACONIS SYSTEMS LLC
        for clients becomes the property of the client upon full payment. However, we retain
            the right to:
            </p>
            <ul className="space-y-2 ml-6">
            <li>• Use general knowledge and experience gained</li>
            <li>• Reference projects in portfolios (with permission)</li>
            <li>• Retain ownership of pre-existing intellectual property</li>
            <li>• Use anonymized case studies for marketing</li>
            </ul>
            </section>

            <section className="bg-dark-gray neon-border p-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-magenta">Limitation of Liability</h2>
            <p>
            DRACONIS SYSTEMS LLC shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
            </section>

            <section className="bg-dark-gray neon-border p-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">Termination</h2>
            <p>
            Either party may terminate services with written notice. Upon termination, all
            completed work and payments due remain the responsibility of respective parties.
            Confidentiality and intellectual property clauses survive termination.
            </p>
            </section>

            <section className="bg-dark-gray neon-border p-8">
            <h2 className="text-2xl font-bold mb-4 text-neon-green">Contact Information</h2>
            <p>
            Questions about these Terms of Service should be sent to:
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

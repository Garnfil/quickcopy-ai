export default function PrivacyPolicy() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
                At QuickCopy AI, your privacy is important to us. This policy outlines how we
                collect, use, and protect your information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Email address (for authentication)</li>
                <li>Usage data (e.g. how often you generate copy)</li>
                <li>Context provided for generating AI copy (temporary)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">How We Use It</h2>
            <ul className="list-disc list-inside space-y-2 mb-4">
                <li>To provide and improve our service</li>
                <li>To monitor abuse or misuse</li>
                <li>To improve user experience</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
            <p className="mb-4">
                We use services like SupaBase for authentication and OpenAI to generate copy. Your
                prompts may be sent to OpenAI but are not stored permanently.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Your Data Rights</h2>
            <p className="mb-4">
                You can request data deletion by contacting us. We do not sell your data to third
                parties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy occasionally. Continued use of the app implies
                acceptance of the updated policy.
            </p>

            <p className="text-sm text-gray-500 mt-6">Last updated: April 2025</p>
        </main>
    );
}

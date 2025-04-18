export default function ContactPage() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-8">
                Got a question, feedback, or partnership idea? We&apos;d love to hear from you. Fill
                out the form or reach us directly via email.
            </p>

            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                        Your Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Type your message here..."
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-12 border-t pt-6 text-sm text-gray-500">
                <p>
                    Or email us directly at{" "}
                    <a href="mailto:support@quickcopyai.com" className="underline hover:text-black">
                        support@quickcopyai.com
                    </a>
                </p>
            </div>
        </main>
    );
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-heading-1 mb-4 text-dark-900">Contact Us</h1>
        <p className="text-body text-dark-700">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="text-body mb-2 block text-dark-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 transition-colors focus:border-dark-900 focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-body mb-2 block text-dark-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 transition-colors focus:border-dark-900 focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-body mb-2 block text-dark-900">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 transition-colors focus:border-dark-900 focus:outline-none"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-body mb-2 block text-dark-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full rounded-md border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 transition-colors focus:border-dark-900 focus:outline-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-dark-900 px-6 py-3 text-body font-medium text-light-100 transition-colors hover:bg-dark-700"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 border-t border-light-300 pt-8">
        <h2 className="text-heading-3 mb-4 text-dark-900">Other ways to reach us</h2>
        <div className="space-y-3 text-body text-dark-700">
          <p>Email: support@nike-store.com</p>
          <p>Phone: 1-800-NIKE-STORE</p>
          <p>Hours: Monday - Friday, 9am - 6pm EST</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A simple blog powered by Next.js and Tina CMS. Discover articles about web development, technology, and more.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View Blog Posts
          </Link>
        </header>

        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Fast & Modern
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with Next.js for optimal performance and user experience.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Easy to Manage
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Content managed with Tina CMS for a seamless editing experience.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Markdown Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Write your posts in markdown with full rich-text capabilities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

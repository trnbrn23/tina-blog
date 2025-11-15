import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Blog Posts
          </h1>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

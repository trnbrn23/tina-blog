import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              ← Back to Blog
            </Link>
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

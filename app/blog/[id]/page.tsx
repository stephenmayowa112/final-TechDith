import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
// For this example, we're using the same sample data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Applications",
    excerpt:
      "Explore how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
    content: `
      <p>Artificial Intelligence (AI) is rapidly transforming the business landscape, offering unprecedented opportunities for companies to enhance efficiency, drive innovation, and create new value. At TECHDITH LIMITED, we're at the forefront of integrating AI solutions into business operations.</p>
      
      <h2>How AI is Transforming Business Operations</h2>
      
      <p>The integration of AI into business processes is revolutionizing how companies operate. From automated customer service to predictive analytics, AI technologies are enabling businesses to work smarter, faster, and more efficiently.</p>
      
      <p>Key areas where AI is making a significant impact include:</p>
      
      <ul>
        <li><strong>Customer Experience:</strong> AI-powered chatbots and virtual assistants are providing 24/7 customer support, handling routine inquiries, and freeing up human agents to focus on more complex issues.</li>
        <li><strong>Data Analysis:</strong> Machine learning algorithms can process vast amounts of data to identify patterns, trends, and insights that would be impossible for humans to detect manually.</li>
        <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) combined with AI is streamlining workflows, reducing errors, and increasing productivity.</li>
        <li><strong>Decision Making:</strong> AI systems can analyze multiple factors and scenarios to provide data-driven recommendations, supporting more informed business decisions.</li>
      </ul>
      
      <h2>The Future of AI in Business</h2>
      
      <p>Looking ahead, we anticipate several key developments in how AI will continue to shape business operations:</p>
      
      <p><strong>1. Hyper-personalization:</strong> AI will enable businesses to deliver highly personalized experiences to customers, tailoring products, services, and communications to individual preferences and behaviors.</p>
      
      <p><strong>2. Augmented Intelligence:</strong> Rather than replacing human workers, AI will increasingly work alongside them, augmenting their capabilities and enabling them to focus on higher-value tasks.</p>
      
      <p><strong>3. Autonomous Systems:</strong> From self-driving vehicles to autonomous manufacturing processes, AI will power systems that can operate with minimal human intervention.</p>
      
      <p><strong>4. Ethical AI:</strong> As AI becomes more prevalent, there will be a growing focus on developing and implementing ethical frameworks to ensure that AI systems are fair, transparent, and accountable.</p>
      
      <h2>Implementing AI in Your Business</h2>
      
      <p>For businesses looking to leverage AI, it's important to approach implementation strategically. Here are some key considerations:</p>
      
      <ul>
        <li>Start with a clear business problem or opportunity that AI can address</li>
        <li>Ensure you have the necessary data infrastructure and quality</li>
        <li>Build or acquire the right AI expertise</li>
        <li>Develop a roadmap for AI implementation</li>
        <li>Monitor and measure results to continuously improve</li>
      </ul>
      
      <p>At TECHDITH LIMITED, we're committed to helping businesses navigate the AI landscape and implement solutions that drive real value. Contact us to learn more about how we can support your AI journey.</p>
    `,
    category: "Technology Trends",
    date: "April 2, 2025",
    author: "Segun Oladiti",
    authorRole: "CEO",
    authorBio:
      "Segun Oladiti is the CEO of TECHDITH LIMITED with extensive experience in technology innovation and business strategy.",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
  },
  {
    id: 2,
    title: "TECHDITH Partners with Local Farms for Sustainable Agriculture",
    excerpt:
      "Our recent agricultural investment project has yielded impressive results, demonstrating the potential of technology in farming.",
    content: `<p>Sample content for article 2</p>`,
    category: "Company News",
    date: "March 28, 2025",
    author: "Ife Thona Akoniyon",
    authorRole: "Executive Director",
    authorBio:
      "Ife Thona Akoniyon is the Executive Director at TECHDITH LIMITED, focusing on strategic partnerships and business development.",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === Number.parseInt(params.id))

  if (!post) {
    return {
      title: "Blog Post Not Found | TECHDITH LIMITED",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | TECHDITH LIMITED Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === postId)

  if (!post) {
    return (
      <main className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.id !== postId && p.category === post.category).slice(0, 2)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-bold">{post.author.charAt(0)}</span>
              </div>
              <div className="text-left">
                <p className="font-medium">{post.author}</p>
                <p className="text-sm opacity-80">{post.authorRole}</p>
              </div>
            </div>
            <span className="w-1 h-6 bg-white/30 rounded-full"></span>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-700 font-medium">Tags:</span>
              <Link
                href={`/blog?tag=ai`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                AI
              </Link>
              <Link
                href={`/blog?tag=business`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                Business
              </Link>
              <Link
                href={`/blog?tag=technology`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                Technology
              </Link>
              <Link
                href={`/blog?tag=innovation`}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                Innovation
              </Link>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-700 font-bold text-3xl">{post.author.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.author}</h3>
                <p className="text-emerald-600 font-medium mb-4">{post.authorRole}</p>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">
            <span className="text-gray-700 font-medium">Share this article:</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{relatedPost.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{relatedPost.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{relatedPost.excerpt}</p>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
                    >
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </section>
    </main>
  )
}


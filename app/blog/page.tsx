import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { AnimatedText } from "@/components/animations/animated-text";
import { SlideInSection } from "@/components/animations/slide-in-section";
import { AnimatedHeading } from "@/components/animations/animated-heading";

export const metadata: Metadata = {
  title: "Blog & News | TECHDITH LIMITED",
  description:
    "Stay updated with the latest tech insights, industry trends, and company news from TECHDITH LIMITED.",
};

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Applications",
    excerpt:
      "Explore how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
    category: "Technology Trends",
    date: "April 2, 2025",
    author: "Segun Oladiti",
    authorRole: "CEO",
    image: "images/aiib.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "TECHDITH Partners with Local Farms for Sustainable Agriculture",
    excerpt:
      "Our recent agricultural investment project has yielded impressive results, demonstrating the potential of technology in farming.",
    category: "Company News",
    date: "March 28, 2025",
    author: "Ife Thona Akoniyon",
    authorRole: "Executive Director",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt:
      "Protect your business from cyber threats with these essential security measures that every small business should implement.",
    category: "Security",
    date: "March 20, 2025",
    author: "Segun Oladiti",
    authorRole: "CEO",
    image: "images/secu.jpg",
  },
  {
    id: 4,
    title: "LARDSHARE: Development Update and Feature Preview",
    excerpt:
      "Get an exclusive look at our upcoming SAAS platform that will revolutionize how service providers connect with clients.",
    category: "Product Development",
    date: "March 15, 2025",
    author: "Ife Thona Akoniyon",
    authorRole: "Executive Director",
    image: "images/lardshare.jpg",
  },
  {
    id: 5,
    title: "The Impact of Black Soldier Fly Farming on Sustainable Agriculture",
    excerpt:
      "Our research into BSF farming is showing promising results for sustainable waste management and protein production.",
    category: "Research",
    date: "March 10, 2025",
    author: "Segun Oladiti",
    authorRole: "CEO",
    image: "images/farm.jpg",
  },
  {
    id: 6,
    title:
      "Cloud Infrastructure: Choosing the Right Solution for Your Business",
    excerpt:
      "Navigate the complex world of cloud services and find the perfect infrastructure solution for your specific business needs.",
    category: "IT Infrastructure",
    date: "March 5, 2025",
    author: "Ife Thona Akoniyon",
    authorRole: "Executive Director",
    image: "images/cloud.jpg",
  },
];

// Get featured post
const featuredPost = blogPosts.find((post) => post.featured);
// Get regular posts (excluding featured)
const regularPosts = blogPosts.filter((post) => !post.featured);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="images/blog1.jpg"
            alt="TECHDITH Blog & News"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="Blog & News"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Tech insights, industry trends, and company updates from TECHDITH
              LIMITED
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
              Featured Article
            </AnimatedHeading>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 relative">
                    <div className="h-64 lg:h-full relative">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
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
                      <span>{featuredPost.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {featuredPost.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {featuredPost.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {featuredPost.authorRole}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                      Read Full Article
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>
        </section>
      )}

      {/* Blog Categories */}
      <section className="py-8 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                All
              </Link>
              <Link
                href="/blog?category=technology-trends"
                className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Technology Trends
              </Link>
              <Link
                href="/blog?category=company-news"
                className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Company News
              </Link>
              <Link
                href="/blog?category=security"
                className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Security
              </Link>
              <Link
                href="/blog?category=product-development"
                className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Product Development
              </Link>
              <Link
                href="/blog?category=research"
                className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Research
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Latest Articles
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <SlideInSection
                key={post.id}
                direction={
                  index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"
                }
                delay={0.1 * (index + 1)}
              >
                <div
                  key={post.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-2 text-primary mb-3 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
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
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-xs">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary hover:text-primary/90 font-medium text-sm flex items-center gap-1"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideInSection>
            ))}
          </div>

          {/* Pagination */}
          <AnimatedSection variant="fadeInUp" delay={0.2} className="mt-12">
            <nav className="flex justify-center">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                ...
              </span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SlideInSection direction="up" delay={0.1}>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    Stay Updated with Our Newsletter
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Subscribe to our newsletter to receive the latest tech
                    insights, industry trends, and company updates directly in
                    your inbox.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="images/techdithlogo.jpg"
                    alt="Newsletter Subscription"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </SlideInSection>
        </div>
      </section>
    </main>
  );
}

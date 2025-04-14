import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { AnimatedText } from "@/components/animations/animated-text";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SlideInSection } from "@/components/animations/slide-in-section";
import { FadeInView } from "@/components/animations/fade-in-view";
import { AnimatedHeading } from "@/components/animations/animated-heading";

export const metadata: Metadata = {
  title: "TECHDITH LIMITED | Technology Solutions",
  description:
    "TECHDITH LIMITED is a dynamic and innovative technology company based in Lagos, Nigeria, specializing in computer programming, consultancy, and technology solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1200&width=1920"
            alt="TECHDITH Technology Solutions"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="Transforming Business Through Technology"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
              TECHDITH LIMITED is a dynamic and innovative technology company at
              the forefront of the digital revolution in Nigeria
            </p>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
                  <span className="inline-block pb-2 border-b-4 border-primary">
                    About Us
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Established in July 2024, TECHDITH LIMITED is a dynamic and
                  innovative technology company based in Lagos, Nigeria. We are
                  at the forefront of the digital revolution, specializing in a
                  wide range of cutting-edge solutions, including computer
                  programming, consultancy, and other technology-related
                  activities.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.4}>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our core mission is to empower businesses and industries
                  across Nigeria to harness the transformative power of
                  technology, driving efficiency, growth, and innovation.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.6}>
                <AnimatedButton
                  href="/about-us"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Learn more about us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
                </AnimatedButton>
              </AnimatedSection>
            </div>
            <AnimatedSection
              variant="fadeInRight"
              delay={0.2}
              className="md:w-1/2"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="TECHDITH Office"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            <span className="inline-block pb-2 border-b-4 border-secondary">Our Services</span>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1} className="h-full">
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Computer Programming
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team of highly skilled programmers is proficient in a
                  diverse array of programming languages and platforms. We
                  develop custom software solutions, web applications, mobile
                  apps, and enterprise systems.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2} className="h-full">
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Consultancy</h3>
                <p className="text-gray-600 mb-6">
                  We offer expert guidance and strategic advice to businesses on
                  how to leverage technology to achieve their goals. Our
                  consultants work closely with clients to develop technology
                  roadmaps aligned with business strategies.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3} className="h-full">
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Technology Solutions
                </h3>
                <p className="text-gray-600 mb-6">
                  From cloud computing and artificial intelligence to
                  cybersecurity and data analytics, we provide a comprehensive
                  suite of technology solutions that enable businesses to stay
                  ahead of the curve.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
            </SlideInSection>
          </div>

          <AnimatedSection
            variant="fadeInUp"
            delay={0.6}
            className="text-center mt-12"
          >
            <AnimatedButton
              href="/services"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              View All Services
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            <span className="inline-block pb-2 border-b-4 border-secondary">Our Projects</span>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Agricultural Investment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Completed
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">
                    Agricultural Investment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Partnered with a farm subsidiary to plant 500 tubers of yam
                    for a one-year planting season, achieving a notable
                    turnover.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    View project details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="LARDSHARE Product Development"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    In Development
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">
                    LARDSHARE Platform
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A hard-skill sharing platform-based software that connects
                    service providers and users, featuring geospatial
                    capabilities and AI.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    View project details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
            </SlideInSection>
          </div>

          <FadeInView
            delay={0.3}
            className="text-center mt-12"
            variant="fadeIn"
          >
            <Link
              href="/projects"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              View All Projects
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* LARDSHARE Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="md:w-1/2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="LARDSHARE Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Featured Product
                </div>
              </div>
            </SlideInSection>
            <SlideInSection direction="right" delay={0.2} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
                <span className="inline-block pb-2 border-b-4 border-primary">
                  LARDSHARE
                </span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LARDSHARE is our innovative hard-skill sharing platform-based
                software that connects service providers with users. Currently
                in its pre-iteration phase, this cutting-edge platform features
                geospatial capabilities, robust back-end machine learning, and
                forefront artificial intelligence.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We're actively seeking investment partners to help bring this
                revolutionary platform to market and transform how services are
                discovered and delivered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/lardshare"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Explore LARDSHARE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
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
                <Link
                  href="/lardshare#funding"
                  className="inline-flex items-center bg-white border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Investment Opportunity
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            <span className="inline-block pb-2 border-b-4 border-secondary">Latest Articles</span>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="AI in Business"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Technology Trends
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    The Future of AI in Business Applications
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Explore how artificial intelligence is transforming business
                    operations and creating new opportunities for growth and
                    innovation.
                  </p>
                  <Link
                    href="/blog/1"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sustainable Agriculture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Company News
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    TECHDITH Partners with Local Farms for Sustainable
                    Agriculture
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Our recent agricultural investment project has yielded
                    impressive results, demonstrating the potential of
                    technology in farming.
                  </p>
                  <Link
                    href="/blog/2"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
            </SlideInSection>

            <SlideInSection direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cybersecurity"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Security
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Cybersecurity Best Practices for Small Businesses
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Protect your business from cyber threats with these
                    essential security measures that every small business should
                    implement.
                  </p>
                  <Link
                    href="/blog/3"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
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
            </SlideInSection>
          </div>

          <AnimatedSection
            variant="fadeInUp"
            delay={0.4}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              View All Articles
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading
            className="text-3xl font-bold mb-12 text-center"
            underline={false}
          >
            <span className="inline-block pb-2 border-b-4 border-secondary">
              What Our Clients Say
            </span>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <p className="text-white mb-6 italic">
                  "TECHDITH LIMITED transformed our business operations with
                  their custom software solution. Their team's expertise and
                  dedication to understanding our unique needs resulted in a
                  system that has significantly improved our efficiency."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">JA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Adebayo</h4>
                    <p className="text-white/80 text-sm">
                      CEO, Adebayo Enterprises
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <p className="text-white mb-6 italic">
                  "The consultancy services provided by TECHDITH LIMITED were
                  invaluable to our digital transformation journey. Their
                  strategic guidance helped us navigate complex technological
                  decisions with confidence."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">SO</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Okonkwo</h4>
                    <p className="text-white/80 text-sm">
                      Director of IT, Lagos Medical Center
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
                <div className="flex justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-primary/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <p className="text-white mb-6 italic">
                  "Working with TECHDITH LIMITED on our agricultural technology
                  project was a game-changer. Their innovative approach and
                  technical expertise helped us implement solutions that have
                  significantly increased our productivity."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">MI</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Ibrahim</h4>
                    <p className="text-white/80 text-sm">
                      Operations Manager, GreenField Farms
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
                <span className="inline-block pb-2 border-b-4 border-secondary">
                  Get In Touch
                </span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Have a question or want to learn more about our services? We'd
                love to hear from you. Contact us today to discuss how we can
                help your business thrive in the digital age.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Our Address
                    </h3>
                    <p className="text-gray-600">
                      68, Adebayo Ajayi Avenue, Egan, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600">07061622366</p>
                    <p className="text-gray-600">08182681345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Email Address
                    </h3>
                    <p className="text-gray-600">techlard4@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2} className="lg:w-1/2">
              <div className="bg-gray-50 rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <AnimatedText
            text="Ready to Transform Your Business?"
            className="text-3xl font-bold mb-6"
          />
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Partner with TECHDITH LIMITED and harness the power of technology
              to drive growth, efficiency, and innovation.
            </p>
          </AnimatedSection>
          <AnimatedSection variant="fadeInUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

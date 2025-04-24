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
  title: "LARDSHARE | Hard-Skill Sharing Platform | TechDith Limited",
  description:
    "LARDSHARE is an innovative hard-skill sharing platform connecting service providers with users through advanced AI, machine learning, and geospatial capabilities.",
};

export default function LardSharePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="images/green.jpg"
            alt="LARDSHARE Platform"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedSection variant="fadeInUp" delay={0.1}>
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Pre-iteration Phase
            </div>
          </AnimatedSection>
          <AnimatedText
            text="LARDSHARE"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Connecting skilled service providers with users through innovative
              technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#features"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Explore Features
              </Link>
              <Link
                href="#funding"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Investment Opportunity
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection variant="fadeInRight" className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
                <span className="inline-block pb-2 border-b-4 border-primary">
                  About LARDSHARE
                </span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LARDSHARE is a revolutionary hard-skill sharing platform-based
                software that connects service providers with users. Currently
                in its pre-iteration phase, this innovative platform is designed
                to transform how people access and provide specialized services.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our platform leverages cutting-edge technology, including
                geospatial capabilities, robust back-end machine learning, and
                forefront artificial intelligence to create seamless connections
                between skilled professionals and those seeking their services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                LARDSHARE aims to democratize access to skilled services while
                providing service providers with a powerful platform to showcase
                their expertise and expand their client base.
              </p>
            </AnimatedSection>
            <SlideInSection
              direction="left"
              delay={0.2}
              className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="images/lardshare.jpg"
                alt="LARDSHARE Platform Overview"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              LARDSHARE combines innovative technology with user-centered design
              to deliver a comprehensive service platform
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map over feature cards with staggered animations */}
            {Array.from({ length: 6 }).map((_, index) => (
              <SlideInSection
                key={index}
                direction={
                  index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"
                }
                delay={0.1 * (index + 1)}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
                  <h3 className="text-xl font-semibold mb-4">
                    Geospatial Capabilities
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our platform utilizes advanced geospatial technology to
                    connect users with nearby service providers, optimizing for
                    proximity and convenience. The system intelligently maps
                    service coverage areas and user locations to facilitate
                    efficient matching.
                  </p>
                </div>
              </SlideInSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI & ML Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              AI & Machine Learning Capabilities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              LARDSHARE leverages cutting-edge artificial intelligence and
              machine learning technologies to deliver a superior user
              experience
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Array.from({ length: 4 }).map((_, index) => (
              <SlideInSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.2 * (index + 1)}
              >
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        Intelligent Matching Algorithm
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our proprietary matching algorithm uses machine learning
                        to connect users with the most suitable service
                        providers based on multiple factors including skill
                        requirements, location, availability, pricing, and past
                        performance. The system continuously learns from user
                        interactions to improve match quality over time.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideInSection>
            ))}
          </div>

          <SlideInSection direction="up" delay={0.4} className="mt-16">
            <div className="bg-primary/10 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="images/cloud.jpg"
                    alt="AI Technology"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Technical Infrastructure
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    LARDSHARE is built on a robust technical infrastructure that
                    combines cloud computing, microservices architecture, and
                    containerization to ensure scalability, reliability, and
                    performance. Our AI and machine learning models are deployed
                    using state-of-the-art MLOps practices, allowing for
                    continuous improvement and adaptation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The platform utilizes a combination of supervised and
                    unsupervised learning techniques, with models trained on
                    diverse datasets to ensure fairness and effectiveness across
                    different user demographics and service categories. Our
                    development team follows responsible AI principles, with
                    regular audits to prevent bias and ensure ethical
                    implementation.
                  </p>
                </div>
              </div>
            </div>
          </SlideInSection>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section id="funding" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection variant="fadeInRight" className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                <span className="inline-block pb-2 border-b-4 border-white">
                  Investment Opportunity
                </span>
              </h2>
              <p className="mb-6 leading-relaxed">
                LARDSHARE is currently in its pre-iteration phase and actively
                seeking funding to bring this innovative platform to market. We
                invite forward-thinking investors to join us in revolutionizing
                the service industry through technology.
              </p>
              <p className="mb-8 leading-relaxed">
                Your investment will support the development and launch of a
                platform with significant market potential, addressing the
                growing demand for specialized services in an increasingly
                digital economy.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Investment Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary/40 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Innovative platform addressing a significant market gap
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary/40 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Proprietary AI and ML technology with competitive
                      advantages
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary/40 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Scalable business model with multiple revenue streams
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary/40 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Experienced leadership team with technical and business
                      expertise
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary/40 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Clear path to market with defined growth strategy
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              >
                Request Investment Information
              </Link>
            </AnimatedSection>

            <SlideInSection direction="left" delay={0.3} className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-8 bg-primary">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Funding Requirements
                  </h3>
                  <p className="text-white/90">
                    Join us in bringing LARDSHARE to market
                  </p>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Seed Round Target
                      </h4>
                      <p className="text-gray-600">
                        We are seeking to raise ₦50,000,000 in seed funding to
                        complete development and launch the platform.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Use of Funds
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                          <span className="ml-4 text-gray-700 font-medium">
                            Product Development: 40%
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                          <span className="ml-4 text-gray-700 font-medium">
                            Marketing & User Acquisition: 25%
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                          <span className="ml-4 text-gray-700 font-medium">
                            Operations & Infrastructure: 20%
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: "15%" }}
                            ></div>
                          </div>
                          <span className="ml-4 text-gray-700 font-medium">
                            Legal & Compliance: 15%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Investment Terms
                      </h4>
                      <p className="text-gray-600 mb-2">
                        We offer competitive equity terms with a clear path to
                        liquidity. Minimum investment of ₦5,000,000.
                      </p>
                      <p className="text-gray-600">
                        Detailed investment memorandum available upon request
                        for qualified investors.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Timeline
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">
                              1
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              Q3 2025: Complete funding round
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">
                              2
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              Q4 2025: Beta launch
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary font-bold text-xs">
                              3
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">
                              Q1 2026: Full market launch
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Market Opportunity
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              LARDSHARE addresses a significant and growing market need in the
              service industry
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SlideInSection direction="left" delay={0.2}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Target Market
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Service Providers
                    </h4>
                    <p className="text-gray-600">
                      Skilled professionals across various sectors including
                      home services, technical repairs, creative services,
                      professional consulting, and specialized trades. LARDSHARE
                      offers these providers a platform to showcase their
                      skills, expand their client base, and manage their
                      business more efficiently.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Service Users
                    </h4>
                    <p className="text-gray-600">
                      Individuals and businesses seeking specialized services
                      with an emphasis on quality, convenience, and reliability.
                      Our platform caters to users who value verified expertise
                      and are looking for a seamless process to find and engage
                      service providers.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-white">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Market Size & Growth
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Nigerian Service Economy
                    </h4>
                    <p className="text-gray-600">
                      The service sector in Nigeria represents a significant
                      portion of the economy, with substantial growth potential
                      as digital adoption increases. The addressable market for
                      LARDSHARE is estimated at over ₦500 billion annually, with
                      projected growth of 15-20% year-over-year.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      Digital Platform Adoption
                    </h4>
                    <p className="text-gray-600">
                      With increasing smartphone penetration and internet access
                      across Nigeria, there is a growing trend toward digital
                      platforms for service discovery and engagement. LARDSHARE
                      is positioned to capitalize on this shift in consumer
                      behavior.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>

          <SlideInSection direction="up" delay={0.4} className="mt-12">
            <div className="bg-primary/10 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Competitive Advantage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    Advanced Technology
                  </h4>
                  <p className="text-gray-600">
                    Our proprietary AI and ML algorithms provide superior
                    matching capabilities compared to existing platforms,
                    resulting in higher satisfaction for both service providers
                    and users.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    Local Market Focus
                  </h4>
                  <p className="text-gray-600">
                    LARDSHARE is designed specifically for the Nigerian market,
                    with features and functionality that address local needs and
                    preferences, unlike global platforms with generic
                    approaches.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    Comprehensive Solution
                  </h4>
                  <p className="text-gray-600">
                    Our platform offers end-to-end functionality from discovery
                    to payment, providing a seamless experience compared to
                    fragmented alternatives in the market.
                  </p>
                </div>
              </div>
            </div>
          </SlideInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get Involved
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Interested in learning more about LARDSHARE? Contact us to discuss
              investment opportunities or partnership possibilities
            </p>
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12">
            <SlideInSection direction="left" delay={0.2} className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  For Investors
                </h3>
                <p className="text-gray-600 mb-6">
                  If you're interested in investing in LARDSHARE or would like
                  to receive our detailed investment memorandum, please contact
                  our investment relations team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Email
                      </h4>
                      <p className="text-gray-600">investors@techdith.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Phone
                      </h4>
                      <p className="text-gray-600">+234 706 162 2366</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
                  >
                    Request Investment Information
                  </Link>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2} className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  For Partners
                </h3>
                <p className="text-gray-600 mb-6">
                  We're looking to partner with organizations that can help us
                  bring LARDSHARE to market and expand our reach. If you're
                  interested in exploring partnership opportunities, please get
                  in touch.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Email
                      </h4>
                      <p className="text-gray-600">partnerships@techdith.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Phone
                      </h4>
                      <p className="text-gray-600">+234 818 268 1345</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
                  >
                    Discuss Partnership Opportunities
                  </Link>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <AnimatedHeading>
            <h2 className="text-3xl font-bold mb-4">
              Join Us in Revolutionizing Service Delivery
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              LARDSHARE represents a significant opportunity to transform how
              services are discovered, delivered, and managed in Nigeria and
              beyond. We invite you to be part of this journey.
            </p>
          </AnimatedHeading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#funding"
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Investment Opportunities
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

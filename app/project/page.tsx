import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { AnimatedText } from "@/components/animations/animated-text";
import { SlideInSection } from "@/components/animations/slide-in-section";
import { AnimatedHeading } from "@/components/animations/animated-heading";

export const metadata: Metadata = {
  title: "Our Projects | TECHDITH LIMITED",
  description:
    "Explore the innovative projects and future initiatives of TECHDITH LIMITED, including agricultural investments, research, and technology solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blueback.jpg"
            alt="TECHDITH Projects"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="Our Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Innovative solutions and initiatives driving technological
              advancement
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Innovation in Action
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At TechDith Limited, we are committed to driving innovation
                  through diverse projects that span various sectors. Our
                  projects demonstrate our ability to apply technology and
                  expertise to solve real-world challenges and create value.
                </p>
              </AnimatedSection>
              
            </div>
            <AnimatedSection
              variant="fadeInLeft"
              delay={0.2}
              className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/inno.jpg"
                alt="TECHDITH Innovation"
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Completed Projects
          </AnimatedHeading>

          {/* BSF Farming Research Project */}
          <SlideInSection direction="right" delay={0.2}>
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 order-1 lg:order-2 relative">
                    <div className="h-64 lg:h-full relative">
                      <Image
                        src="/images/agric.jpg"
                        alt="Black Soldier Fly Farming Research"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Research
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      Black Soldier Fly (BSF) Farming Research
                    </h3>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
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
                        <span>Completed: 2023</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Collaborated with a BSF farmer to undertake a farming
                      project, observing culturing and mating patterns for
                      sustainable agricultural practices. This research project
                      explored innovative approaches to sustainable protein
                      production and waste management.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Research Outcomes:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                          <span className="text-gray-700">
                            Documented BSF culturing and mating patterns
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                          <span className="text-gray-700">
                            Identified optimal conditions for BSF farming
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                          <span className="text-gray-700">
                            Developed sustainable waste management techniques
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                          <span className="text-gray-700">
                            Created framework for future agricultural
                            applications
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideInSection>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Future Initiatives
          </AnimatedHeading>

          {/* Grid of initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-56 relative">
                  <Image
                    src="/images/inni4.jpg"
                    alt="Government Partnerships"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium inline-block">
                      Upcoming
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Government Partnerships
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We aim to collaborate with government parastatals to provide
                    IT gadgets and products, fostering innovation and
                    technological advancement in public sectors.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">
                        Supply of modern IT equipment to government agencies
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">
                        Development of custom software solutions for public
                        services
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">
                        Technical training for government personnel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <div className="h-56 relative">
                  <Image
                    src="/images/lardshare.jpg"
                    alt="LARDSHARE Product Development"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium inline-block">
                      In Development
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    SAAS Product Development – LARDSHARE
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Currently in its pre-iteration phase, LARDSHARE is a
                    hard-skill sharing platform-based software that connects
                    service providers and users. It features geospatial
                    capabilities, robust back-end machine learning, and
                    forefront artificial intelligence.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">
                        Geospatial mapping for service provider location
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">
                        AI-powered matching of service providers to user needs
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">
                        Secure payment and review system
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInSection>
          </div>

          {/* LARDSHARE Call to Action */}
          <div className="text-center">
            <Link
              href="/lardshare"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
            >
              Learn More About LARDSHARE
            </Link>
          </div>
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Project Approach
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We approach each project with a focus on innovation, seeking
                  creative solutions to complex challenges. Our team explores
                  emerging technologies and methodologies to deliver
                  cutting-edge results.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Methodology
                </h3>
                <p className="text-gray-600 text-center">
                  We follow a structured methodology for all projects, from
                  initial planning and requirements gathering to execution,
                  monitoring, and evaluation. This ensures consistent quality
                  and successful outcomes.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Impact
                </h3>
                <p className="text-gray-600 text-center">
                  We measure the success of our projects not just by their
                  technical achievements, but by their real-world impact. We
                  focus on creating solutions that drive efficiency, growth, and
                  positive change.
                </p>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <AnimatedHeading className="text-3xl font-bold mb-6">
            Have a Project in Mind?
          </AnimatedHeading>
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              We're always looking for new challenges and opportunities to apply
              our expertise. Contact us today to discuss how we can help bring
              your project to life.
            </p>
            <div className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Start a Conversation
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/animations/animated-section";
import { AnimatedText } from "@/components/animations/animated-text";
import { SlideInSection } from "@/components/animations/slide-in-section";
import { AnimatedHeading } from "@/components/animations/animated-heading";

export const metadata: Metadata = {
  title: "Our Services | TECHDITH LIMITED",
  description:
    "Explore the comprehensive technology services offered by TECHDITH LIMITED, including computer programming, IT infrastructure, R&D, and training.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="images/back1.jpg"
            alt="TechDith Technology Services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="Our Services"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to meet your business
              needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Technology Solutions
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At TechDith Limited, we provide a comprehensive suite of
                  technology services designed to empower businesses and
                  industries across Nigeria. Our core mission is to help
                  organizations harness the transformative power of technology,
                  driving efficiency, growth, and innovation.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.4}>
                <p className="text-gray-700 leading-relaxed">
                  Our team of highly skilled professionals is committed to
                  delivering exceptional solutions that address your unique
                  challenges and help you achieve your business objectives.
                  Whether you need custom software development, IT
                  infrastructure support, or specialized training, we have the
                  expertise to meet your needs.
                </p>
              </AnimatedSection>
            </div>
            <AnimatedSection
              variant="fadeInLeft"
              delay={0.2}
              className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="images/smiles.jpg"
                alt="TECHDITH Technology Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Services We Offer
          </AnimatedHeading>

          {/* Computer Programming and Consultancy */}
          <SlideInSection direction="left" delay={0.1}>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <AnimatedSection
                  variant="fadeInRight"
                  className="lg:w-1/2 order-2 lg:order-1"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Computer Programming and Consultancy
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We provide tailored software development and IT consulting
                    services to meet the unique needs of our clients. Our team
                    of highly skilled programmers is proficient in a diverse
                    array of programming languages and platforms.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">
                      Our Programming & Consultancy Services Include:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Custom software development tailored to your business
                          requirements
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Web application development with responsive design
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Mobile app development for iOS and Android platforms
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Enterprise system integration and development
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          Strategic IT consulting and technology roadmap
                          development
                        </span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection
                  variant="fadeInLeft"
                  className="lg:w-1/2 order-1 lg:order-2"
                >
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="images/software.jpg"
                      alt="Computer Programming Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </SlideInSection>

          {/* IT Infrastructure Development */}
          <SlideInSection direction="right" delay={0.2}>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <AnimatedSection variant="fadeInLeft" className="lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="images/infrastructure.jpg"
                      alt="IT Infrastructure Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection variant="fadeInRight" className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    IT Infrastructure Development
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                  We create and manage robust IT environments to keep your business running smoothly.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">
                      Our Infrastructure Services Include:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        IT Design & Implementation: Tailored solutions for your needs.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Network Management:*Setup and ongoing support.

                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Cloud Services: Migration and management.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Hardware Support: Procurement and maintenance.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Data Centers: Efficient design and management.
                        </span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </SlideInSection>

          {/* Research and Development */}
          <SlideInSection direction="left" delay={0.3}>
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <AnimatedSection
                  variant="fadeInRight"
                  className="lg:w-1/2 order-2 lg:order-1"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Innovative Research & Development:
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                  We stay ahead of the curve by exploring new technologies to solve your toughest challenges.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">
                    Focus Areas:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        property tech
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        FinTech
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        AI & Machine Learning
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        IoT Innovations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Cybersecurity
                        </span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                <AnimatedSection
                  variant="fadeInLeft"
                  className="lg:w-1/2 order-1 lg:order-2"
                >
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="images/Research&Development.jpg"
                      alt="Research and Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </SlideInSection>

          {/* Training and Development */}
          <SlideInSection direction="right" delay={0.4}>
            <div>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <AnimatedSection variant="fadeInLeft" className="lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="images/training.jpg"
                      alt="Training and Development"
                      fill
                      className="object-cover"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection variant="fadeInRight" className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Training and Development
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                  Empower your team with our hands-on training programs.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">
                      Our Training Includes:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Tech Skills: Learn programming languages and frameworks.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Leadership: Develop IT management skills
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Cybersecurity: Best practices and awareness.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Certifications: Software and hardware programs.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                        Corporate Training: Customized for your team.
                        </span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </SlideInSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Why Choose TECHDITH
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Expertise
                </h3>
                <p className="text-gray-600 text-center">
                  Our team consists of highly skilled professionals with
                  extensive experience in various technology domains.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
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
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We are passionate about pushing the boundaries of what is
                  possible with technology and finding innovative solutions.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.3}>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Customer Focus
                </h3>
                <p className="text-gray-600 text-center">
                  We are committed to understanding your unique needs and
                  delivering solutions that exceed your expectations.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.4}>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105">
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
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Quality
                </h3>
                <p className="text-gray-600 text-center">
                  We strive for excellence in everything we do, ensuring that
                  our solutions are robust, reliable, and of the highest
                  quality.
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
            Ready to Transform Your Business?
          </AnimatedHeading>
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Contact us today to discuss how our technology services can help
              your business achieve its goals and stay ahead in the digital age.
            </p>
            <div className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

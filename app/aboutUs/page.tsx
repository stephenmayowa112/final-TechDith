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
  title: "About Us | TechDith Limited",
  description:
    "Learn about TechDith Limited, a dynamic and innovative technology company based in Lagos, Nigeria.",
};

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="images/backgroundImg1.jpg"
            alt="TECHDITH Technology Solutions"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="About TechDith Limited"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          />
          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              A dynamic and innovative technology company at the forefront of
              the digital revolution in Nigeria
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Learn more about us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
                  <span className="inline-block pb-2 border-b-4 border-secondary">
                    Learn more about us
                  </span>
                </h2>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We envision a future where technology is seamlessly integrated
                  into every aspect of our lives and business in Nigeria and
                  Africa by extension. We are committed to delivering
                  exceptional service that bridges the gap between cutting-edge
                  technology and real-world business needs.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection
              variant="fadeInLeft"
              delay={0.2}
              className="md:w-1/2 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="images/hand.jpg"
                alt="TECHDITH Office"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Goals
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="images/office2.jpg"
                  alt="TECHDITH Vision"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  To deliver scalable, reliable, and innovative IT solutions
                  that:
                </p>
              </AnimatedSection>

              <ul className="list-disc list-inside text-gray-700 space-y-4 mb-6">
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.1}>
                    Streamline operations for SMEs and government agencies
                  </AnimatedSection>
                </li>
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.2}>
                    Enhance consumer experiences through tech
                  </AnimatedSection>
                </li>
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.3}>
                    Create a bridge between emerging technologies and the local
                    market
                  </AnimatedSection>
                </li>
                <li>
                  <AnimatedSection variant="fadeInRight" delay={0.4}>
                    Foster economic growth and sustainability through digital
                    empowerment
                  </AnimatedSection>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Vision
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="images/office.jpg"
                  fill
                  className="object-cover" alt={""}                />
              </div>
            </div>
            <div className="md:w-1/2">
              <AnimatedSection variant="fadeInRight">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We envision a future where technology is seamlessly integrated
                  into every aspect of life and business in Nigeria. We are
                  committed to playing a leading role in shaping this future by
                  delivering innovative, reliable, and impactful technology
                  solutions that make a real difference.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  TechDith Limited is more than just a technology company; we
                  are a catalyst for change. We are committed to driving digital
                  transformation in Nigeria and helping businesses and
                  industries thrive in the digital age.
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fadeInRight" delay={0.4}>
                <p className="text-gray-700 leading-relaxed">
                  Our vision extends beyond providing services – we aim to be a
                  strategic partner in our clients' success, contributing to the
                  technological advancement and economic growth of Nigeria
                  through innovation and excellence.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values: CITIE */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center">
            Our Values
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">C</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Customer Focus
                </h3>
                <p className="text-white/80 text-center">
                  We are committed to providing our clients with the highest
                  level of service, understanding their unique needs, and
                  exceeding their expectations.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Integrity
                </h3>
                <p className="text-white/80 text-center">
                  We conduct our business with honesty, transparency, and
                  ethical standards that build trust with our clients, partners,
                  and team members.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">T</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Teamwork
                </h3>
                <p className="text-white/80 text-center">
                  We believe that collaboration is key to success. We foster a
                  culture of cooperation, respect, and shared responsibility.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Innovation
                </h3>
                <p className="text-white/80 text-center">
                  We are passionate about pushing the boundaries of what is
                  possible with technology, constantly seeking new ideas and
                  creative solutions.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">E</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Excellence
                </h3>
                <p className="text-white/80 text-center">
                  We strive for excellence in everything we do, maintaining high
                  standards of quality and continuously improving our processes
                  and services.
                </p>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Objectives
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
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
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                  Enhancing Efficiency
                </h3>
                <p className="text-gray-600 text-center">
                  We develop technological solutions to streamline processes,
                  automate tasks, and optimize resource utilization.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="up" delay={0.2}>
              <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                  Improving User Experience
                </h3>
                <p className="text-gray-600 text-center">
                  Our team designs intuitive interfaces and user-friendly
                  applications that provide seamless integration and
                  accessibility across different platforms.
                </p>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.3}>
              <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
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
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-6 text-center">
                  Driving Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We invest in research and development to explore emerging
                  technologies, stay ahead of market trends, and foster a
                  culture of creativity and experimentation.
                </p>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Services
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideInSection direction="left" delay={0.1}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?uid=R75576832&ga=GA1.1.106458567.1743797612&semt=ais_hybrid&w=740"
                    alt="Computer Programming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Software Solutions and Automation
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                  We build smart software that streamlines processes, removes repetitive tasks, and boosts productivity—so you can focus on growth.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="https://img.freepik.com/free-photo/cloud-storage-banner-background_53876-108506.jpg?t=st=1743858640~exp=1743862240~hmac=9e6d9e3a8c50e88a5e2060ed0a11d698251f444ceea4f1c10aae2992978fbb03&w=996"
                    alt="IT Infrastructure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    IT Infrastructure Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    Our expertise includes establishing and managing computer
                    centers, manufacturing or processing software packages, and
                    handling hardware materials.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="left" delay={0.3}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="images/research.jpg"
                    alt="Research and Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Research and Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    We undertake R&D initiatives for technological updates in
                    various areas, ensuring our solutions remain cutting-edge.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.4}>
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:bg-primary/5 transition-colors">
                <div className="w-1/3 relative">
                  <Image
                    src="images/development.jpg"
                    alt="Training and Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Training and Development
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    We offer training courses, tests, and examinations in
                    management and computer technology, encompassing both
                    hardware and software aspects.
                  </p>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Projects Undertaken */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Projects Undertaken
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SlideInSection direction="left" delay={0.1}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="images/farm.jpg"
                    alt="Agricultural Investment"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">
                    Agricultural Investment
                  </h3>
                  <p className="text-gray-600">
                    Partnered with a farm subsidiary to plant 500 tubers of yam
                    for a one-year planting season, achieving a notable
                    turnover.
                  </p>
                </div>
              </div>
            </SlideInSection>

            <SlideInSection direction="right" delay={0.2}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="images/agric.jpg"
                    alt="Black Soldier Fly Farming"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3">
                    Black Soldier Fly (BSF) Farming Research
                  </h3>
                  <p className="text-gray-600">
                  Collaborated with a BSF farmer on a farming project, observing culturing and mating patterns for sustainable agriculture.
                  </p>
                </div>
              </div>
            </SlideInSection>
          </div>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Future Initiatives
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="md:w-1/2">
              <Image
                src="images/aboutus 1.jpg"
                alt="Future Initiatives"
                width={800}
                height={800}
                className="rounded-lg shadow-xl"
              />
            </SlideInSection>

            <div className="md:w-1/2 space-y-8">
              <SlideInSection direction="right" delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">
                      Government Partnerships
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    We aim to collaborate with government parastatals to provide
                    IT gadgets and products, fostering innovation and
                    technological advancement in public sectors.
                  </p>
                </div>
              </SlideInSection>

              <SlideInSection direction="right" delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">
                      SAAS Product Development – LARDSHARE
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Currently in its pre-iteration phase, LARDSHARE is a
                    hard-skill sharing platform-based software that connects
                    service providers and users. It features geospatial
                    capabilities, robust back-end machine learning, and
                    forefront artificial intelligence. We are actively seeking
                    funding to bring this innovative product to market.
                  </p>
                </div>
              </SlideInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <AnimatedHeading className="text-3xl font-bold mb-8">
            Conclusion
          </AnimatedHeading>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            TechDith Limited is committed to delivering exceptional
            technological solutions that enhance efficiency, improve user
            experiences, and drive innovation across various sectors. Our
            diverse range of services and forward-looking projects position us
            as a dynamic player in the technology industry.
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            We welcome the opportunity to collaborate with stakeholders who
            share our vision for a technologically advanced future.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedHeading className="text-3xl font-bold mb-12 text-center text-gray-800">
            Contact Us
          </AnimatedHeading>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="md:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="images/techdithlogo.jpg"
                  alt="TECHDITH Office Location"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInSection>

            <div className="md:w-1/2">
              <SlideInSection direction="right" delay={0.2}>
                <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">info@techdith.com
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
                            d="M3 10h18M3 6h18M3 14h18M3 18h18"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">+234 706 162 2366</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

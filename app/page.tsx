"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { AnimatedText } from "@/components/animations/animated-text";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SlideInSection } from "@/components/animations/slide-in-section";
import { FadeInView } from "@/components/animations/fade-in-view";
import { AnimatedHeading } from "@/components/animations/animated-heading";
import { useState, useEffect } from "react"; // Added useEffect for text animation
import { Plus } from "lucide-react";
import heroBg from '@/public/images/5192479.jpg';
import techdithLogo from '@/public/images/techdithlogo.jpg';
import lardshareImg from '@/public/images/lardshare.jpg';
import aiImg from '@/public/images/ai.jpg';
import cybersecurityImg from '@/public/images/cybersecurity.jpg';

export default function Home() {
  // Added state for the sliding text animation
  const heroTexts = [
    "Transforming Businesses Through Technology",
    "Powering Innovation & IT Solutions",
    "Connecting Technology with Business Growth",
    "Building Digital Success Stories"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);

  // Animation for cycling through texts with reduced delay
  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsTextFading(true);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        setIsTextFading(false);
      }, 300); // Reduced fade out time from 600ms to 400ms
      
    }, 2500); // Reduced interval from 4000ms to 3000ms
    
    return () => clearInterval(textInterval);
  }, []);

  const expertise = [
    {
      title: 'Software Solutions',
      description: `- Custom Software: Built to fit your business needs.
- Web Apps: Responsive designs that work on any device.
- Mobile Apps: For both iOS and Android.
- Integration: Seamlessly connect your systems.
- IT Consulting: Strategic tech planning for your future.`
    },
    {
      title: 'IT Infrastructure',
      description: `We create and manage robust IT environments to keep your business running smoothly
- IT Design & Implementation: Tailored solutions for your needs.
- Network Management:*Setup and ongoing support.
- Cloud Services: Migration and management.
- Hardware Support: Procurement and maintenance.
- Data Centers: Efficient design and management.

`
    },
    {
      title: 'Innovative Research & DevelopmentSoftware Solutions',
      description: `Focus Areas:
property tech
FinTech
- *AI & Machine Learning*
- *IoT Innovations*
- *Data Analytics*
- *Cybersecurity*
`
    },
     {
      title: 'Training & Development',
      description: `- *Tech Skills:* Learn programming languages and frameworks.
- *Leadership:* Develop IT management skills.
- *Cybersecurity:* Best practices and awareness.
- *Certifications:* Software and hardware programs.
- *Corporate Training:* Customized for your team.`
    },
    
    
  ];
  const [openItems, setOpenItems] = useState<boolean[]>(Array(expertise.length).fill(false));

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            placeholder="blur"
            sizes="100vw"
            alt="Techdith Technology Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container text-2xl mx-auto px-4 relative z-10 text-center text-white">
          <AnimatedText
            text="TechDith"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold mb-6 leading-tight"
          />
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <div className="slider max-w-4xl mx-auto mb-10">
              <span className={`text-lg md:text-2xl leading-loose transition-opacity duration-700 ${isTextFading ? 'opacity-0' : 'opacity-100'}`}>{heroTexts[currentTextIndex]}</span>
            </div>
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
    <div className="flex flex-col md:flex-row gap-12 items-stretch">
      
      {/* Text Column */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <AnimatedSection variant="fadeInRight">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
            <span className="inline-block pb-2 border-b-4 border-primary">
              About Us
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection variant="fadeInRight" delay={0.2}>
          <p className="text-gray-700 mb-6 leading-relaxed">
            TechDith Limited is a dynamic technology company that specializes in transforming Micro, Small and Medium-scale Enterprises (MSMEs) via simplified tech solutions.
            These tailored tech solutions enhance efficiency, improve consumer experience, and foster innovation in the larger digital economy.
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeInRight" delay={0.6}>
          <AnimatedButton
            href="/aboutUs"
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

      {/* Image Column */}
      <AnimatedSection
        variant="fadeInRight"
        delay={0.2}
        className="md:w-1/2"
      >
        <div className="rounded-lg overflow-hidden shadow-xl h-full">
          <div
            className="w-full h-full relative cursor-pointer transition duration-300 active:scale-95 focus:scale-95 outline-none"
            tabIndex={0}
          >
            <Image
              src={techdithLogo}
              alt="TECHDITH Office"
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 100vw"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>
        {/* End of About Us Section */}

      {/* Services Section */}
      {/* Services Section */}
<section id="expertise" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
      <span className="inline-block pb-2 border-b-4 border-secondary">What we offer</span>
    </h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
      {expertise.map((item, idx) => (
        <SlideInSection
          key={idx}
          direction="left"
          delay={0.1 * idx}
          className="md:w-full"
        >
          <li className="border border-gray-400 rounded-lg p-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                const newOpen = [...openItems];
                newOpen[idx] = !newOpen[idx];
                setOpenItems(newOpen);
              }}
            >
              <Plus className={`h-6 w-6 text-orange-500 transform transition-transform ${openItems[idx] ? 'rotate-45' : 'rotate-0'}`} />
              <h3 className="text-xl font-semibold ml-2">{item.title}</h3>
            </div>
            {openItems[idx] && <p className="text-gray-600 mt-2">{item.description}</p>}
          </li>
        </SlideInSection>
      ))}
    </ul>
  </div>
</section>


      {/* Projects Section */}
      {false && (
        <section className="py-20 bg-white">
          {/* Our Projects section temporarily disabled */}
        </section>
      )}

      {/* LARDSHARE Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <SlideInSection direction="left" delay={0.1} className="md:w-1/2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={lardshareImg}
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            <SlideInSection direction="up" delay={0.1}>
              <div className="w-full bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={aiImg}
                    placeholder="blur"
                    sizes="100vw"
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

            

            <SlideInSection direction="up" delay={0.3}>
              <div className="w-full bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={cybersecurityImg}
                    placeholder="blur"
                    sizes="100vw"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600">08083737756</p>
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
                    <p className="text-gray-600">info@techdith.com
                    </p>
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

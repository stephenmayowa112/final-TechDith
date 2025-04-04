import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, ChevronLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/placeholder.svg?height=500&width=1000"
          alt="Business meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">We Are Hamilton Stone</h1>
          <p className="text-white text-lg mb-8">
            Get expert consultation, innovation solutions, and effective project oversight.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded">
            Book a Consultation
          </Button>
        </div>
        <div className="absolute bottom-0 right-0 z-20">
          <div className="flex">
            <button className="bg-purple-700 p-4 text-white">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="bg-orange-500 p-4 text-white">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-purple-700 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Hamilton Stone empowers organizations to achieve their goals and maximize their potential through informed
            strategic decisions and cost-effective project management.
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-purple-800">
            Learn More <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* More Than Consultants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">But we are more than just consultants</h2>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                We're your strategic partners in realizing the short and long-term goals of your business. With a wide
                range of expertise in Management Consulting, Financial & Accounting, Information Systems & Information
                Technology, our team delivers tailored solutions that create sustainable outcomes for your business and
                future needs.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Management Consulting"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">Management Consulting</h3>
                <p className="text-sm mb-4">Strategic planning and implementation for organizational effectiveness.</p>
                <Link href="#" className="text-sm flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Financial & Accounting"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">Financial & Accounting</h3>
                <p className="text-sm mb-4">Maximize the success of projects through strategic financial planning.</p>
                <Link href="#" className="text-sm flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Information Systems"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">Information Systems</h3>
                <p className="text-sm mb-4">
                  Leverage technology to streamline operations and enhance decision-making.
                </p>
                <Link href="#" className="text-sm flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Project & Risk Management"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">Project & Risk Management</h3>
                <p className="text-sm mb-4">
                  Comprehensive frameworks to ensure projects stay on track and mitigate potential issues.
                </p>
                <Link href="#" className="text-sm flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Services Button */}
      <section className="pb-16">
        <div className="container mx-auto px-4 flex justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded flex items-center">
            View Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Difference</h2>
              <p className="text-gray-700 mb-4">
                We believe in building strong partnerships with our clients, working closely with teams to understand
                goals and challenges. Our collaborative approach and strategic perspective help us exceed expectations
                to deliver meaningful impact. See below why businesses trust Hamilton Stone for their consulting needs.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Consultants working"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Difference Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="Experience icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-gray-600">
                We bring years of experience and expertise to deliver exceptional results.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="Tailored Solutions icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">
                We take the time to understand your unique challenges and create customized solutions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Collaborative Approach icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Approach</h3>
              <p className="text-gray-600">
                We foster open communication and involve key partners in every step of the way.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="Results-driven icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Results-driven</h3>
              <p className="text-gray-600">We deliver measurable results that are sustainable and impactful.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="Ethical practices icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ethical practices</h3>
              <p className="text-gray-600">
                We are committed to integrity and transparency in all our interactions. No regulatory infractions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="System Thinking icon" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">System Thinking</h3>
              <p className="text-gray-600">We act to parts but keep the whole in view.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded">
              Our Difference <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-500 uppercase tracking-wider mb-2">Testimonials</h3>
          <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-6">
              "Our experience with Hamilton Stone has been exceptional. They quickly understood our goals/financial
              reorganization which would have challenged the entire project. We highly recommend their services to
              anyone seeking reliable and effective consulting solutions."
            </p>
            <div className="flex items-center justify-center">
              <div className="mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Client"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Adam Wilson</p>
                <p className="text-sm text-gray-600">CFO, Acme Group</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            <button className="w-2 h-2 rounded-full bg-purple-700"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="bg-purple-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Quote icon"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl italic mb-4">
              "Only three things happen naturally in organizations: friction, confusion, and underperformance.
              Everything else requires leadership."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Wondering Where to Start?</h2>
          <div className="max-w-lg mx-auto">
            <p className="mb-6">Book a complimentary consultation below:</p>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First Name" className="w-full px-4 py-2 border rounded" />
                </div>
                <div>
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded" />
                </div>
              </div>
              <div>
                <input type="text" placeholder="Company Name" className="w-full px-4 py-2 border rounded" />
              </div>
              <div>
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 border rounded"></textarea>
              </div>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white w-full py-3">Send</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}


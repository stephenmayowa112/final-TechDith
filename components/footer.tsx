import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/techdithlogo.png" 
                alt="Techdith Logo"
                width={250}
                height={60}
                className="h-16 pl-10 w-auto filter brightness-0 invert" // render logo in white
              />
            </Link>
            <p className="text-gray-400 pl-10 text-sm mb-4">Powering innovation & IT Solutions</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-gray-400 hover:text-white text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/lardshare" className="text-gray-400 hover:text-white text-sm">
                  Lardshare
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm"> 08083737756</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">info@techdith.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l w-full"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-l-none">Subscribe</Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>© 2025 Techdith Limited. Powered by Chidera Frankie.</p>
        </div>
      </div>
    </footer>
  )
}

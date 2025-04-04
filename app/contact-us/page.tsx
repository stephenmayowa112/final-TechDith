import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | TECHDITH LIMITED",
  description:
    "Get in touch with TECHDITH LIMITED. We're here to answer your questions and provide the technology solutions you need.",
}

export default function ContactPage() {
  return <ContactPageClient />
}


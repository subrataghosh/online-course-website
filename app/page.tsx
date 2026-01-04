import { Hero } from "@/components/hero"
import { CourseList } from "@/components/course-list"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { InstructorsSection } from "@/components/instructors-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <InstructorsSection />
      <CourseList />
      <ContactForm />
      <Footer />
    </main>
  )
}

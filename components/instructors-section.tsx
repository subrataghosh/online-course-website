import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Award, BookOpen, Users } from "lucide-react"

const instructors = [
  {
    name: "Chirantan Kundu",
    specialty: "Computer Science & Programming",
    experience: "25+ years",
    students: "10K+",
    courses: 12,
    initials: "SJ",
  },
  {
    name: "Partha Pratim Saha",
    specialty: "Cloud Computing & Networking",
    experience: "22+ years",
    students: "8K+",
    courses: 9,
    initials: "MC",
  },
  {
    name: "Partha Pratim Saha",
    specialty: "Photography & Visual Arts",
    experience: "10+ years",
    students: "6K+",
    courses: 7,
    initials: "ER",
  },
  {
    name: "Chirantan Kundu",
    specialty: "Mathematics & Science",
    experience: "10+ years",
    students: "12K+",
    courses: 15,
    initials: "DK",
  },
]

export function InstructorsSection() {
  return (
    <section id="instructors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet Our Expert Instructors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Learn from industry professionals and experienced educators
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <Card key={instructor.name} className="text-center">
              <CardContent className="pt-6">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                    {instructor.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-foreground mb-1">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{instructor.specialty}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>{instructor.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{instructor.students} Students</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{instructor.courses} Courses</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

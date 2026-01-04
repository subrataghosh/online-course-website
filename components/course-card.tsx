import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import Image from "next/image"

interface Course {
  id: number
  title: string
  description: string
  image: string
  duration: string
  students: number
  rating: number
  level: string
  price: string
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{course.level}</Badge>
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold text-foreground line-clamp-2">{course.title}</h3>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{course.description}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span>{course.rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">{course.price}</span>
        <Button>Enroll Now</Button>
      </CardFooter>
    </Card>
  )
}

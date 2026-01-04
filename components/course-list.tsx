import { CourseCard } from "@/components/course-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const coursesByCategory = {
  school: [
    {
      id: 1,
      title: "Mathematics - Class 8",
      description: "Complete mathematics curriculum for Class 8 including algebra, geometry, and problem-solving.",
      image: "/math-class-8.jpg",
      duration: "Full Year",
      students: 3240,
      rating: 4.8,
      level: "Class 8",
      price: "$199",
      category: "School",
    },
    {
      id: 2,
      title: "Science - Class 10",
      description: "Physics, Chemistry, and Biology for Class 10 board exam preparation with practical experiments.",
      image: "/science-class-10.jpg",
      duration: "Full Year",
      students: 4150,
      rating: 4.9,
      level: "Class 10",
      price: "$249",
      category: "School",
    },
    {
      id: 3,
      title: "English Literature - Class 12",
      description: "Advanced English literature course covering poetry, prose, and drama for Class 12 students.",
      image: "/english-class-12.jpg",
      duration: "Full Year",
      students: 2890,
      rating: 4.7,
      level: "Class 12",
      price: "$229",
      category: "School",
    },
  ],
  college: [
    {
      id: 4,
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts including OOP, data structures, and algorithms.",
      image: "/python-programming.jpg",
      duration: "12 weeks",
      students: 5340,
      rating: 4.9,
      level: "Beginner to Advanced",
      price: "$149",
      category: "College",
    },
    {
      id: 5,
      title: "Java Complete Course",
      description: "Master Java programming with hands-on projects covering core Java, collections, and frameworks.",
      image: "/java-programming.jpg",
      duration: "14 weeks",
      students: 4680,
      rating: 4.8,
      level: "Beginner to Advanced",
      price: "$159",
      category: "College",
    },
    {
      id: 6,
      title: "JavaScript & Web Development",
      description: "Complete JavaScript course from fundamentals to modern ES6+ and building interactive web apps.",
      image: "/javascript-web.jpg",
      duration: "10 weeks",
      students: 6120,
      rating: 4.9,
      level: "Beginner to Advanced",
      price: "$139",
      category: "College",
    },
    {
      id: 7,
      title: "C++ Programming",
      description: "Comprehensive C++ course covering syntax, STL, data structures, and competitive programming.",
      image: "/cpp-programming.jpg",
      duration: "12 weeks",
      students: 3890,
      rating: 4.7,
      level: "Beginner to Advanced",
      price: "$149",
      category: "College",
    },
  ],
  professional: [
    {
      id: 8,
      title: "Advanced Data Structures & Algorithms",
      description: "Master complex algorithms, dynamic programming, graph theory, and system design for interviews.",
      image: "/algorithms-dsa.jpg",
      duration: "16 weeks",
      students: 4520,
      rating: 4.9,
      level: "Advanced",
      price: "$199",
      category: "Professional",
    },
    {
      id: 9,
      title: "Cloud Computing with AWS",
      description: "Learn AWS services, cloud architecture, serverless computing, and prepare for AWS certification.",
      image: "/aws-cloud.jpg",
      duration: "12 weeks",
      students: 3780,
      rating: 4.8,
      level: "Intermediate to Advanced",
      price: "$179",
      category: "Professional",
    },
    {
      id: 10,
      title: "Computer Networks & Security",
      description: "Deep dive into networking protocols, architecture, security practices, and network administration.",
      image: "/networking-security.jpg",
      duration: "10 weeks",
      students: 2940,
      rating: 4.7,
      level: "Intermediate to Advanced",
      price: "$169",
      category: "Professional",
    },
    {
      id: 11,
      title: "System Design & Architecture",
      description: "Learn to design scalable systems, microservices, load balancing, and distributed systems.",
      image: "/system-design.jpg",
      duration: "14 weeks",
      students: 3650,
      rating: 4.9,
      level: "Advanced",
      price: "$189",
      category: "Professional",
    },
  ],
  other: [
    {
      id: 12,
      title: "Professional Photography",
      description: "Master photography fundamentals, composition, lighting, and editing for all skill levels.",
      image: "/photography-course.jpg",
      duration: "8 weeks",
      students: 2340,
      rating: 4.8,
      level: "All Ages",
      price: "$129",
      category: "Other",
    },
    {
      id: 13,
      title: "Singing & Voice Training",
      description: "Develop your vocal skills with professional techniques for all music genres and age groups.",
      image: "/singing-vocal.jpg",
      duration: "12 weeks",
      students: 1890,
      rating: 4.7,
      level: "All Ages",
      price: "$139",
      category: "Other",
    },
    {
      id: 14,
      title: "Digital Art & Illustration",
      description: "Learn digital drawing, painting, and illustration techniques using professional tools.",
      image: "/digital-art.jpg",
      duration: "10 weeks",
      students: 2120,
      rating: 4.8,
      level: "All Ages",
      price: "$119",
      category: "Other",
    },
  ],
}

export function CourseList() {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Explore Our Courses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose from our wide range of expert-led courses designed to help you achieve your goals
          </p>
        </div>

        <Tabs defaultValue="school" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="school">School Level</TabsTrigger>
            <TabsTrigger value="college">College Level</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="school">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">School Level Courses</h3>
              <p className="text-muted-foreground">Comprehensive courses for Class 8 through Class 12</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coursesByCategory.school.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="college">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">College Level Courses</h3>
              <p className="text-muted-foreground">Programming languages and computer science fundamentals</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coursesByCategory.college.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="professional">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Professional Level Courses</h3>
              <p className="text-muted-foreground">Advanced topics in programming, networking, and cloud computing</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coursesByCategory.professional.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Creative & Hobby Courses</h3>
              <p className="text-muted-foreground">Photography, singing, and arts for all ages</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coursesByCategory.other.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

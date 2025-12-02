// data/programs.ts
export interface Course {
    name: string
  }
  
  export interface Credential {
    title: string
    description: string
    skills: string
    rating: number
    reviews: number
    level: string
    duration: string
    image?: string
    courses: Course[]
  }
  
  export interface Program {
    slug: string
    title: string
    duration: string
    price: string
    level: string
    image: string
    credentialImage?: string
    fullDescription: string
    credentials: Credential[]
  }
  
  export const programs: Program[] = [
    {
      slug: "school-coding-club",
      title: "School Coding Club",
      duration: "12 Weeks",
      price: "250,000",
      level: "Beginner",
      image: "/school.png",
      credentialImage: "/web.jpg",
      fullDescription:
        "Perfect for high school students who want to learn programming fundamentals and build projects with a supportive community.",
      credentials: [
        {
          title: "Web Development Essentials",
          description: "This is a beginner-friendly program designed to introduce students to the core skills of building modern websites. Through hands-on practice, you’ll learn how to structure pages with HTML, style them with CSS, and add interactivity using JavaScript. By the end of the course, you’ll be able to create responsive, functional web pages and confidently begin your journey into full-stack development.",
          skills: "HTML5, CSS3, JavaScript Basics, Responsive Design, Git, Debugging",
          rating: 4.9,
          reviews: 298,
          level: "Beginner",
          duration: "12 weeks",
          image: "/web.jpg",
          courses: [
            { name: "HTML & CSS Fundamentals – Structure and style web pages." },
            { name: "Basic JavaScript – Learn programming basics and interactivity." },
            { name: "Responsive Design – Make websites mobile-friendly." },
            { name: "Introduction to Git & GitHub – Track code changes and collaborate." },
            { name: "Website Project – Build a simple personal website." },
          ],
        },
      ],
    },
    {
      slug: "web-development-bootcamp",
      title: "Bootcamp Web Development",
      duration: "10 Weeks",
      price: "450,000",
      level: "Beginner",
      image: "/web-dev.png",
      credentialImage: "/web.jpg",
      fullDescription:
        "Learn the latest web development technologies and frameworks to build professional websites and applications.",
      credentials: [
        {
          title: "Full Stack Web Development",
          description: "Become a web developer with practical projects",
          skills: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
          rating: 4.8,
          reviews: 512,
          level: "Beginner",
          duration: "10 weeks",
          image: "/web.jpg",
          courses: [
            { name: "HTML, CSS & JS Basics" },
            { name: "React Fundamentals" },
            { name: "Node.js & Express" },
            { name: "MongoDB & Data Storage" },
          ],
        },
      ],
    },
    {
      slug: "summer-bootcamp",
      title: "Summer Bootcamp",
      duration: "8 Weeks",
      price: "350,000",
      level: "Beginner",
      image: "/mobile-dev.png",
      credentialImage: "/web.jpg",
      fullDescription:
        "Learn to build native and cross-platform mobile apps using the latest tools and frameworks.",
      credentials: [
        {
          title: "Mobile App Development",
          description: "Build real-world mobile applications",
          skills: "Flutter, Dart, React Native, UI/UX, APIs",
          rating: 4.7,
          reviews: 420,
          level: "Beginner",
          duration: "8 weeks",
          image: "/web.jpg",
          courses: [
            { name: "Flutter Basics" },
            { name: "React Native Fundamentals" },
            { name: "UI/UX for Mobile Apps" },
            { name: "Connecting APIs" },
          ],
        },
      ],
    },
    {
      slug: "python-programming",
      title: "Python Programming",
      duration: "6 Weeks",
      price: "200,000",
      level: "Beginner",
      image: "/python.png",
      credentialImage: "/web.jpg",
      fullDescription:
        "Master Python programming from scratch and learn how to build scripts, automation, and small applications.",
      credentials: [
        {
          title: "Python Basics",
          description: "Learn Python programming fundamentals",
          skills: "Python, Data Types, Functions, Loops, OOP",
          rating: 4.9,
          reviews: 380,
          level: "Beginner",
          duration: "6 weeks",
          image: "/web.jpg",
          courses: [
            { name: "Python Syntax & Basics" },
            { name: "Functions & Loops" },
            { name: "Object-Oriented Programming" },
            { name: "Python Projects" },
          ],
        },
      ],
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      duration: "8 Weeks",
      price: "300,000",
      level: "Beginner",
      image: "/ui-ux.png",
      credentialImage: "/web.jpg",
      fullDescription:
        "Learn user interface and user experience design principles to create beautiful and functional apps and websites.",
      credentials: [
        {
          title: "UI/UX Fundamentals",
          description: "Design user-friendly and visually appealing interfaces",
          skills: "Figma, Adobe XD, Wireframing, Prototyping, User Research",
          rating: 4.8,
          reviews: 250,
          level: "Beginner",
          duration: "8 weeks",
          image: "/web.jpg",
          courses: [
            { name: "Figma Basics" },
            { name: "Wireframing & Prototyping" },
            { name: "User Research & Testing" },
            { name: "UI Design Principles" },
          ],
        },
      ],
    },
  ]
  
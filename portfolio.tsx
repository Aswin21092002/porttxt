import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, MessageSquare } from 'lucide-react'

export default function Portfolio() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Aswin N</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-blue-600 hover:text-blue-800">About</a></li>
              <li><a href="#experience" className="text-blue-600 hover:text-blue-800">Experience</a></li>
              <li><a href="#projects" className="text-blue-600 hover:text-blue-800">Projects</a></li>
              <li><a href="#skills" className="text-blue-600 hover:text-blue-800">Skills</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center p-6">
              <Avatar className="w-32 h-32 mb-4 md:mb-0 md:mr-6">
                <AvatarImage src="/placeholder.svg" alt="Aswin N" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold mb-2">Aswin N</h2>
                <p className="text-gray-600 mb-4">Software Engineer</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:aswin21092002@gmail.com" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Mail className="w-4 h-4 mr-2" />
                    aswin21092002@gmail.com
                  </a>
                  <a href="tel:+916381517031" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 6381517031
                  </a>
                  <span className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    Bengaluru, India
                  </span>
                  <a href="https://linkedin.com/in/aswin-n" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a href="https://www.aswin-n-portfolio.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Portfolio
                  </a>
                  <a href="https://github.com/in/aswin-n" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Software Developer with 9 months of practical experience in Python and Django through internships. Bachelor's degree in Electronics and Communication Engineering, with a solid foundation in hardware technologies. Continuously practiced and refined programming skills since the third year of college. Demonstrated expertise in optimizing performance, enhancing functionality, and improving system efficiency across diverse projects. Highly motivated to drive innovation, embrace new technologies, and tackle new challenges in a dynamic team environment. Eagerly awaiting the opportunity to shine in my next role.</p>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Embedded Software Engineer</CardTitle>
              <p className="text-gray-600">Fracktal Works Private Limited | September 2024 – present | Bengaluru, India</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Developing and enhancing Graphical User Interfaces (GUIs) using PyQt5 for intuitive interaction with 3D printing systems.</li>
                <li>Working on 3D printing slicing software, contributing to the design, optimization, and troubleshooting of advanced 3D printing operations.</li>
                <li>Designing and implementing backend functionalities for applications using Django and Jinja2 templates, focusing on performance optimization and scalability.</li>
                <li>Collaborating with cross-functional teams to integrate 3D printing software features, ensuring seamless functionality from front-end to back-end.</li>
                <li>Ensuring code quality, scalability, and security in backend development by writing clean, maintainable, and efficient Python code.</li>
                <li>Actively participating in the development cycle, including debugging, testing, and deploying new features for embedded and 3D printing systems.</li>
                <li>Utilizing Python for both software development and integration of embedded systems with the company's 3D printing technologies.</li>
                <li>Contributing to the continuous improvement of internal processes by developing automation tools and improving software performance.</li>
              </ul>
            </CardContent>
          </Card>
          <h3 className="text-xl font-bold mb-4">Internship Experience</h3>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Python Full Stack Developer Intern</CardTitle>
              <p className="text-gray-600">Shiash Info Solutions Private Limited | July 2024 – September 2024 | Chennai, India</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Contributed to software application development and maintenance using Python.</li>
                <li>Supported all phases of the software development lifecycle, including planning, design, implementation, and deployment.</li>
                <li>Enhanced programming skills through active learning and practical experience in Python development.</li>
                <li>Participated in unit-testing and debugging to ensure application robustness.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Software Developer Intern</CardTitle>
              <p className="text-gray-600">Cyber Heals Infotech Private Limited | February 2024 – June 2024 | Chennai, India</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Contributed to software application development and maintenance using Python.</li>
                <li>Supported all phases of the software development lifecycle, including planning, design, implementation, and deployment.</li>
                <li>Enhanced programming skills through active learning and practical experience in Python development.</li>
                <li>Participated in unit-testing and debugging to ensure application robustness.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Python Developer & Data Science Intern</CardTitle>
              <p className="text-gray-600">Techno hack Edutech Pvt Limited | December 2023 – January 2024 | Remote</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Implemented Python code for applications, contributing to the full project lifecycle from planning to deployment.</li>
                <li>Developed a uniform detection system for employees in Python, managing data preprocessing, feature engineering, and model evaluation.</li>
                <li>Demonstrated strong technical abilities, effective time management, and adaptability to diverse project requirements.</li>
                <li>Adopted industry best practices for code quality and documentation.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Guidotronic Bot Integrate with LiDAR and AI Voice Assistance",
                description: "Developed a robotic system with LiDAR technology and AI voice assistance for autonomous navigation and voice control.",
                tech: "Python, LiDAR, AI Voice Assistance, Embedded Systems",
                github: "Guidotronic Bot"
              },
              {
                title: "Find Me Application",
                description: "Developed a versatile GUI application using Tkinter for automated order management, integrating Openpyxl to replace manual Excel data entry with real-time data handling and instant product information retrieval.",
                tech: "Python, Tkinter, Openpyxl, Excel Automation, GUI Development",
                github: "Find_Me_App"
              },
              {
                title: "Portfolio Website with Secure Login System",
                description: "Developed a personal portfolio website with a secure login system to showcase projects, skills, and experience.",
                tech: "Django, Python, HTML, CSS, JavaScript, MySQL",
                github: "Portfolio Website"
              },
              {
                title: "Job Search Web Application",
                description: "Created a job search web application for employers to post job openings and for job seekers to search and apply for jobs.",
                tech: "Django, Python, HTML, CSS, JavaScript",
                github: "Job-Board"
              },
              {
                title: "Feedback Form with Voice Recording",
                description: "Developed a feedback form with form validation and voice recording, enabling audio feedback to be saved directly to a MySQL database and displayed on the dashboard, utilizing HTML, CSS, JavaScript for the frontend, and Python with Django for the backend.",
                tech: "HTML, CSS, JavaScript, Python, Django, MySQL",
                github: "Feedback_form"
              },
              {
                title: "Uniform Detection System",
                description: "Developed a uniform detection system using OpenCV that automatically identifies non-compliant employees by detecting the company logo on their attire, recording absence and applying fines to enforce dress code policies.",
                tech: "OpenCV, Python, Image Processing, Computer Vision",
                github: "Uniform_detection"
              }
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{project.description}</p>
                  <p className="mb-2"><strong>Technologies Used:</strong> {project.tech}</p>
                  <a href={`https://github.com/in/aswin-n/${project.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    GitHub Repository
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Professional Skills</h2>
          <Tabs defaultValue="industry">
            <TabsList>
              <TabsTrigger value="industry">Industry Skills</TabsTrigger>
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="additional">Additional Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="industry">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6">
                    <li>Software Development: Programming, System Design, Implementation</li>
                    <li>Web Application Development: Front-End & Back-End Development, Responsive Design</li>
                    <li>Python Django Developer: Python Programming, Django Framework, API Development</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="technical">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6">
                    <li>Programming Languages: Python, C, C++</li>
                    <li>Frameworks & Libraries: Django, Flask, Qt, Standard Template Library (STL), NumPy, Pandas, Matplotlib, Seaborn, Requests, BeautifulSoup, Tkinter</li>
                    <li>OOP Concepts: Encapsulation, Inheritance, Polymorphism, Abstraction</li>
                    <li>DSA: Array Sorting, Searching, Two Pointers, Sliding Window</li>
                    <li>Front-End Technologies: HTML, CSS, JavaScript</li>
                    <li>Databases: MySQL</li>
                    <li>Cloud: Heroku, Vercel, Getify, Kubernetes</li>
                    <li>CI/CD Tools: Docker, GitLab CI/CD</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>Development Tools: PyCharm, VS Code, PyQt5 Designer, Cura, Fusion 360, Visual Studio, Embedded IDEs, Code Blocks</li>
                    <li>Software Development Life Cycle (SDLC): Agile</li>
                    <li>Operating Systems: Windows, Kali Linux, Linux</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="additional">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6">
                    <li>Advanced Excel</li>
                    <li>REST API Development</li>
                    <li>Web Scraping</li>
                    <li>GUI Development</li>
                    <li>MS Office</li>
                    <li>Unit Testing</li>
                    
                    <li>Microcontrollers: Arduino Uno, ESP32</li>
                    <li>Hardware Design: Circuit Design, PCB Layout, Embedded System Design</li>
                    <li>3D Printing</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="soft">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6">
                    <li>Strong Problem-Solving & Analytical Skills</li>
                    <li>Excellent Verbal & Written Communication</li>
                    <li>Team Collaboration & Leadership</li>
                    <li>Detail-Oriented & Quality-Focused</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Bachelor of Engineering (B.E.) in Electronics and Communication Engineering</CardTitle>
              <p className="text-gray-600">Stella Mary's College of Engineering | 2020 – 2024 | Nagercoil, India</p>
            </CardHeader>
            <CardContent>
              <p>CGPA: 8.32</p>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>HSC in Maths & Biology</CardTitle>
              <p className="text-gray-600">Devi Higher Secondary School | 2019 – 2020 | Nagercoil, India</p>
            </CardHeader>
            <CardContent>
              <p>Percentage: 80%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secondary School Leaving Certificate (SSLC)</CardTitle>
              <p className="text-gray-600">St.Francis Xavier's High School | 2017 – 2018 | Nagercoil, India</p>
            </CardHeader>
            <CardContent>
              <p>Percentage: 94%</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Courses:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Python Programming (GUVI)</li>
                <li>Python and Django for Beginners (Udemy)</li>
                <li>Python Libraries for Data Science (Simplilearn)</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Certificates:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Back-End Engineering Virtual Experience Program (LYFT- 27-07-2023)</li>
                <li>Software Engineering Virtual Experience Program (WELLS FARGO - July 5, 2023)</li>
                <li>Software Development Virtual Experience Program (DATACOM - 11-062023)</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Publications:</h3>
              <p className="mb-4">
                Title: An Innovative Guidotronic Bot with Integrated LiDAR and AI Voice Assistance<br />
                Published in: IIJSR | Date: May 15, 2024<br />
                <a href="#" className="text-blue-600 hover:text-blue-800">View Certificate</a>
              </p>
              <h3 className="text-lg font-semibold mb-2">Languages:</h3>
              <p>English | Tamil | Malayalam</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Aswin N. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916381517031"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      {/* Chatbot Button */}
      <Button
        className="fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 left-4 w-80 bg-white rounded-lg shadow-xl p-4">
          <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
          <p className="mb-2">Hello! I'm an AI assistant that can tell you about Aswin N. What would you like to know?</p>
          <div className="flex">
            <input type="text" placeholder="Ask me anything..." className="flex-grow border rounded-l px-2 py-1" />
            <Button className="rounded-l-none">Send</Button>
          </div>
        </div>
      )}
    </div>
  )
}
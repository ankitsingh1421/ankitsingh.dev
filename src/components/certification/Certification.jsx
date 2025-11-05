import { Award, BookOpen } from "lucide-react";

const Certifications = () => {
  const certifications = [
   {
  title: "Certificate of Internship – Full Stack Web Development",
  issuer: "pinnacle labs",
  date: "June 2024 – July 2024",
},
{
  title: "Certificate of Appreciation – Professional Conduct & Work Ethics",
  issuer: "Engineer's cradle ",
  date: "July 2025",
},
{
  title: "Certificate of Internship – Backend Development",
  issuer: "Engineer's cradle ",
  date: "dec 2024 – june 2025",
},

  ];

  const courses = [
    {
      title: "Full Stack Web Development",
      platform: "Udemy",
      status: "Completed - Feb 2024 - Feb 2024",
    },
    {
      title: "DevOps Fundamentals",
      platform: "LinkedIn Learning",
      status: "Completed - June 2024",
    },
    {
      title: "Python Fundamentals",
      platform: "infosys Springboard",
      status: "Completed - February 2023 - March 2023",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent font-display md:text-5xl bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text">
            Certifications & Courses
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Continuous learning to stay ahead with evolving technologies
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 backdrop-blur-md">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold font-display">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative p-6 transition-all duration-300 border border-transparent group rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md hover:from-primary/10 hover:to-transparent hover:border-primary/20"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/50 via-accent/40 to-transparent rounded-2xl"></div>
                <h4 className="mb-1 text-lg font-semibold">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 text-sm font-medium text-primary/90">{cert.date}</p>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-accent/10 backdrop-blur-md">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold font-display">Courses</h3>
            </div>

            {courses.map((course, index) => (
              <div
                key={index}
                className="relative p-6 transition-all duration-300 border border-transparent group rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md hover:from-accent/10 hover:to-transparent hover:border-accent/20"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/50 via-primary/40 to-transparent rounded-2xl"></div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="mb-1 text-lg font-semibold">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.platform}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {course.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

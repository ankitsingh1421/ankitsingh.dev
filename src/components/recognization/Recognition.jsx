import { Trophy, Medal, Sparkles, Star, Award } from "lucide-react";

const Recognition = () => {
  const competitions = [
   {
  title: "HackWithIndia  Hackathon",
  year: "2025",
  desc: "Selected among the top 40 teams from over 1,500+ participants in the Microsoft-sponsored national-level HackWithIndia Hackathon for developing an innovative full-stack solution.",
  color: "from-blue-500 to-cyan-400",
  icon: <Award className="w-6 h-6 text-blue-400" />,
},
{
  title: " Duality Hackathon",
  year: "2025",
  desc: "Secured a Top 5 position among 1,000+ teams at the GL Bajaj Institute Hackathon by building a scalable AI-integrated web platform.",
  color: "from-emerald-400 to-teal-500",
  icon: <Trophy className="w-6 h-6 text-emerald-400" />,
},
{
  title: "Mentorship Recognition – Sanskriti University",
  year: "2025",
  desc: "Recognized for mentoring students and guiding them in adopting emerging technologies and modern development practices at Sanskriti University.",
  color: "from-violet-500 to-fuchsia-500",
  icon: <Star className="w-6 h-6 text-violet-400" />,
},
  ];

//   const achievements = [
//     {
//       title: "Academic Excellence",
//       desc: "Maintained consistently high grades throughout education from 10th grade to bachelor's degree.",
//     },
//     {
//       title: "Well-Rounded Development",
//       desc: "Cultivated strong ethical foundation and personal growth through active participation in extracurricular activities.",
//     },
//     {
//       title: "Multilingual Proficiency",
//       desc: "Fluent in Tamil (First Language), Advanced English (C1), and Intermediate Hindi (B1).",
//     },
//     {
//       title: "Creative Pursuits",
//       desc: "Passionate about painting, poster designing, music, dancing, reading, and gardening.",
//     },
//   ];

  return (
    <section id="recognition" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Background glow effect */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_60%)] blur-3xl"></div> */}

      <div className="container relative px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-transparent md:text-5xl font-display bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text">
            Recognition & Milestones in My Journey
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Celebrating the achievements that shaped my personal and academic growth
          </p>
        </div>

        {/* Competitions Section */}
        <div className="mb-20">
          <h3 className="flex items-center justify-center gap-3 mb-8 text-2xl font-semibold">
            <Trophy className="w-6 h-6 text-accent" />
            Competitions
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {competitions.map((item, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br ${item.color} bg-opacity-10 border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-500`}
              >
                {/* Glow layer */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl"></div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>

                <p className="mb-2 text-sm text-muted-foreground">{item.year}</p>
                <p className="text-base text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Achievements Section */}
        {/* <div>
          <h3 className="flex items-center justify-center gap-3 mb-8 text-2xl font-semibold">
            <Sparkles className="w-6 h-6 text-primary" />
            Other Achievements
          </h3>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md hover:from-primary/10 hover:to-transparent transition-all duration-500 border border-white/10 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,200,255,0.2)]"
              >
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  {item.title}
                </h4>
                <p className="text-base leading-relaxed text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Recognition;

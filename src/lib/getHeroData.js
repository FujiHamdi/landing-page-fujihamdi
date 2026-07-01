export const getHeroData = async () => {
  return {
    name: "Fuji Hamdi",
    role: "Full Stack Developer, Front End Developer",
    location: "Jakarta, Indonesia",
    summary:
      "Enthusiastic and self-motivated developer with 5+ years of experience. Extremely motivated to constantly develop my skill and knowledge. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Able to effectively self-manage during independent projects, as well as collaborate as part of productive team.",
    contact: {
      email: "fujihamdi@gmail.com",
      phone: "+62-823-8668-2416",
      portfolio: "https://github.com/fujihamdi",
      linkedin: "https://www.linkedin.com/in/fuji-hamdi-08866b190/"
    },
    skills: ["JavaScript(ES6+)", "TypeScript", "React", "Next.js", "React Native", "Vue.js", "Angular", "Node.js", "Python", "Flask", "FastAPI", "PostgreSQL", "MySQL", "Tailwind CSS"],
    education: [
      {
        degree: "B.Sc. in Computer Science",
        institution: "Gunadarma University",
        year: "2020"
      }
    ], 
    experience: [
      {
        company: "Evermos",
        role: "Full Stack Developer",
        period: "2020 - 2021",
        summary: "Building fast, scalable e-commerce interfaces with Next.js, Node.Js, Python. Worked on optimizing performance."
      },
      {
        company: "PT United Tractors Tbk",
        role: "Frontend Developer",
        period: "2021 - 2024",
        summary: "Worked on responsive web apps, component libraries, and performance optimizations."
      },
      {
        company: "OBS Solution",
        role: "Frontend Developer",
        period: "2024 - 2025",
        summary: "Developed modern, maintainable front-end applications using TypeScript and React.js. Led code reviews, enforced clean code standards."
      }
    ],
    avatar: null
  };
};

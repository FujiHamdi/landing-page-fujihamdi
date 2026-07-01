import Employee from '../assets/images/employee.svg';

export const getEmployeesData = async () => {
  return [
    {
      id: 1,
      name: "Fuji Hamdi",
      role: "Software Engineer · 5y+",
      avatar: Employee,        
      skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "React Native",
      "Angular",
      "PostgreSQL",
      "Node.js",
      "Python"]
    },
  ];
};

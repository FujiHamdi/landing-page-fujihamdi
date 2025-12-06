import Employee from '../assets/images/employee.svg';

export const getEmployeesData = async () => {
  return [
    {
      id: 1,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      avatar: Employee,        
      price: "월 100만원",
      skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성"]
    },
    {
      id: 2,
      name: "Alice Kim",
      role: "콘텐츠 제작 · 1y+",
      avatar: Employee,       
      price: "월 80만원",
      skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성"]
    },
    {
      id: 3,
      name: "Ren Hyun",
      role: "콘텐츠 제작 · 3y+",
      avatar: Employee,       
      price: "월 120만원",
      skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성"]
    }
  ];
};

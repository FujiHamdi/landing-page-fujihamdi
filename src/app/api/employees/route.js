export function GET() {
  const data = [
    {
      name: "Abhishek Gupta",
      experience: "마케팅 · 2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];

  return Response.json(data);
}

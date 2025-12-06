export function GET() {
  const data = {
    subtitle: "플랫폼 · 파트타임",
    title: "최고의 실력을 가진 외국인 인재를 찾고 계신가요?",
    description: "법률 및 인사관리에 대한 부담 없이 1주일 이내에 원격으로 채용해보세요.",
  };

  return Response.json(data);
}

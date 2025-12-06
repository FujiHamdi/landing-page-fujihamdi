import Title from "../assets/images/title.svg";

export const getHeroData = async () => {
  return {
    title: Title,
    subtitle: "최고의 실력을 가진외국인 인재를 찾고 계신가요? ",
    ctaText: "법률 및 인사관리 부담없이\n1주일 이내에 원격으로 채용해보세요.",
    ctaLink: "개발자가 필요하신가요?",
    checkItems: [
      "한국어능력",
      "업무 수행 능력",
      "검업 여부",
      "평판 조회"
    ],
  };
};

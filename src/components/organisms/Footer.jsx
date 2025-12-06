import { FaCode, FaCogs, FaGlobeAsia, FaUserTie } from "react-icons/fa";
import ArrowBox from "../../assets/icons/arrow-box.svg";
import Logo from "../../assets/logos/colored-hyperhire.svg";

export default function Footer() {
  const services = [
    { icon: <FaCode />, title: "해외 개발자 원격 채용" },
    { icon: <FaUserTie />, title: "외국인 원격 채용 (비개발)" },
    { icon: <FaGlobeAsia />, title: "한국어 가능 외국인 채용" },
    { icon: <FaCogs />, title: "해외 개발자 활용 서비스" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-10 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Logo + Text */}
          <div>
             <div className="flex items-centerspace-x-2">
              <img src={Logo} alt="Hyperhire" className="h-10 mb-4" />
              <span className="text-2xl font-bold text-gray ml-2">hyperhire</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80 mb-4">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <div className="text-sm font-medium space-y-1">
              <p>010-0000-0000</p>
              <p>aaaaa@naver.com</p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl mb-3 text-lg">
                  {s.icon}
                </div>
                <p className="font-semibold text-sm leading-tight mb-2">
                  {s.title}
                </p>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  바로가기 
                <img src={ArrowBox} alt="Arrow Box" className="h-8 w-8" />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10" />

        {/* Company Info */}
        <div className="text-sm">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      
      <div className="space-y-2">
        <div className="space-y-1.5">
          <p className="font-semibold mr-2">상호명</p>
          <p>하이퍼하이어</p>
        </div>
        <p className="text-gray-600 font-bold mr-2">
          Hyperhire India Private Limited
        </p>
      </div>

      <div className="space-y-2">
        <div className="space-y-1">
          <p className="font-semibold">대표 CEO</p>
          <p>김주현</p>
          <p className="text-gray-600 font-bold mr-2">Juhyun Kim</p>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1 space-y-2">
        <div className="space-y-1">
          <p className="font-semibold">사업자등록번호 CIN</p>
          <p className="text-gray-600 font-bold">427-86-01187</p>
          <p className="text-gray-600 font-bold">
            U74100DL2016PTC290812
          </p>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1 space-y-2">
        <p className="font-semibold mr-2 mb-1">주소 ADDRESS</p>
        <p className="mb-1">
          서울특별시 강남대로 479, 지하 1층 238호
        </p>
        <p className="text-gray-600 font-bold">
          D-138, Street number 11, Jagjeet Nagar, North East Delhi,
          New Delhi, 110053 India
        </p>
      </div>

      </div>
    </div>

        <div className="pt-10 text-[15px] text-gray-600 font-bold">
          © 2023 Hyperhire
        </div>
      </div>
    </footer>
  );
}

import Text from "../atoms/Text";

const CategoryItem = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow transition hover:bg-white/30">
      <div className="w-8 h-8 flex items-center justify-center bg-white/25 rounded-md">
        {icon}
      </div>
      <Text className="text-white text-sm font-semibold whitespace-nowrap">
        {title}
      </Text>
    </div>
  );
};

export default CategoryItem;

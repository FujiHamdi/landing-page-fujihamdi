import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const FeatureStat = ({ number, label }) => {
  return (
    <div className="text-center p-4">
      <Heading className="text-3xl text-blue-600">{number}</Heading>
      <Text className="text-gray-500">{label}</Text>
    </div>
  );
};

export default FeatureStat;

import React from "react";

const Heading = ({ children, level = 1, className }) => {
  const Tag = `h${level}`;
  return <Tag className={`font-bold text-gray-900 ${className}`}>{children}</Tag>;
};

export default Heading;

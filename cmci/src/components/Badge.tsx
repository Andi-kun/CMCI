import React from "react";

const backgroundColors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

// Function to get random item from a list
const getRandomItem = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)];

interface IProps {
  value: string;
}
const Badge: React.FC<IProps> = ({ value }) => {
  // Generate random background and text colors
  const bgColor = getRandomItem(backgroundColors);

  return (
    <span
      className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium text-white ${bgColor} `}
    >
      {value}
    </span>
  );
};

export default Badge;

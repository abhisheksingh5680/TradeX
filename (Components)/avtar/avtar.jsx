import React from 'react';
const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#F533A1', '#A1F533'];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

const Avtar = ({ children }) => {
  const color = getRandomColor();
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center`} style={{ backgroundColor: color }}>
      <span className="text-xs">{children}</span>
    </div>
  );
};

export default Avtar;

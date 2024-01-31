import React, { ReactNode } from "react";

interface ButtonIconProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  text?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onClick,
  className,
  text
}) => {
  return (
    <button
      className={`flex items-center justify-center rounded bg-button-primary px-4 py-1.5 text-white
       transition duration-300 ease-in-out
       hover:bg-button-primary-hover ${className ?? ""}`}
      onClick={onClick}
    >
      {icon}
      {text && <span className="ml-1">{text}</span>}
    </button>
  );
};

export default ButtonIcon;

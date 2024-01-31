import React, { ReactNode } from "react";

interface ButtonIconProps {
  icon: ReactNode;
  onClick: () => void;
  className?: string;
  text?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onClick,
  className,
  text,
}) => {
  return (
    <button
      className={`flex items-center justify-center py-1.5 px-4 rounded bg-button-primary hover:bg-button-primary-hover
       transition duration-300 ease-in-out
       text-white ${className ?? ""}`}
      onClick={onClick}
    >
      {icon}
      {text && <span className="ml-1">{text}</span>}
    </button>
  );
};

export default ButtonIcon;

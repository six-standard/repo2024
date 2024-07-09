import { ButtonHTMLAttributes } from "react";

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement | React.ReactElement[];
  disabled?: boolean;
  onClick: () => void;
  color?: "light" | "dark";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge" | "full";
}

const colorList = {
  light: "bg-[#454545]",
  dark: "bg-[#222222]",
};

const sizeList = {
  extraSmall: "min-w-[5rem] p-2",
  small: "min-w-[8rem] p-2",
  medium: "min-w-[11rem] p-2",
  large: "min-w-[14rem] p-3",
  extraLarge: "min-w-[28rem] p-3",
  full: "w-full p-3",
};

export const Button = ({
  children,
  disabled,
  onClick,
  color = "dark",
  size = "small",
  ...props
}: IProp) => {
  const point = !!disabled ? "disable" : "pointable";

  return (
    <button
      className={`text-white rounded-[5px] h-full transition-all duration-300 ${point} ${colorList[color]} ${sizeList[size]}`}
      disabled={!!disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
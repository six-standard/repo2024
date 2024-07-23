import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";

type TDirection = "left" | "right";

interface IProp extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  children: string;
  onClick: () => void;
  direction?: TDirection;
  disabled?: boolean;
}

export const Content = ({
  icon,
  children,
  onClick,
  direction = "left",
  disabled,
  ...props
}: IProp) => {
  const iconLoc = direction === "left" ? "" : "flex-row-reverse";
  const disable = !disabled ? "text-white" : "text-[#999999]";

  return (
    <button
      {...props}
      onClick={!disabled ? onClick : () => {}}
      className={`flex gap-1 items-center ${iconLoc}`}
    >
      <Icon icon={icon} width={22} color={disabled ? "#999999" : "white"} />
      <span className={`text-body8 leading-none ${disable}`}>{children}</span>
    </button>
  );
};
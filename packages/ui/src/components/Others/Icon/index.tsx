import { HTMLAttributes } from "react";
import * as _ from "./icons";

export type iconType =
  | _.CommunicationType
  | _.EditType
  | _.FileType
  | _.InterfaceType
  | _.MenuType
  | _.NavigationType
  | _.SystemsType
  | _.UserType
  | _.WarningType;

interface IProp extends HTMLAttributes<SVGSVGElement> {
  name: iconType;
  rotate?: "up" | "down" | "left" | "right";
  color?: string;
  size?: number;
}

const rotateTable = {
  up: "0",
  left: "-90deg",
  right: "90deg",
  down: "180deg"
};

export const Icon = ({
  name,
  rotate = "up",
  color = "white",
  size = 24,
  ...props
}: IProp) => {
  const SelectedIcon = _[name];
  return (
    <SelectedIcon
      {...props}
      style={{ transform: `rotate(${rotateTable[rotate]})` }}
      className={`flex-shrink-0 transition-all duration-150 ${props.className}`}
      fill={color}
      width={size}
      height={size}
    />
  );
};
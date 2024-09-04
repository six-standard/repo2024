import { Icon } from "ui";
import { Box } from "ui";

interface IProp {
  current: number;
  length: number;
  onPageMove: (type: "left" | "right") => void;
}

export const Header = ({ current, onPageMove, length }: IProp) => {
  return (
    <Box
      width="100%"
      height="fit-content"
      padding="0"
      className="flex-row border-[none_!important] justify-between items-center overflow-hidden border-none"
    >
      <div className="flex gap-3 items-center px-[6px]">
        <span className="font-semibold text-[16px]">미리보기</span>
        <span className="text-[14px] font-normal self-center w-fit h-fit py-1 px-2 rounded-md leading-none bg-green-900 text-green-400">
          Live
        </span>
      </div>
      <div className="flex gap-3 py-1 items-center">
        <div className="flex gap-1 items-center px-3 border-[1px] h-fit rounded-[33px] border-gray-700">
          <span className="text-[14px] font-light">{current}</span>
          <span className="text-[14px] font-light text-gray-300">/</span>
          <span className="text-[14px] font-light text-gray-300">{length}</span>
        </div>
        <div className="flex items-center h-fit gap-1">
          <div
            className="border-[1px] border-[#333333] rounded-full p-[2px] cursor-pointer"
            onClick={() => onPageMove("left")}
          >
            <Icon
              name="Arrow"
              rotate="left"
              size={20}
              color={current > 1 ? "#ffffff" : "#777777"}
            />
          </div>
          <div
            className="border-[1px] border-[#333333] rounded-full p-[2px] cursor-pointer"
            onClick={() => onPageMove("right")}
          >
            <Icon
              name="Arrow"
              rotate="right"
              size={20}
              color={current < length ? "#ffffff" : "#777777"}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

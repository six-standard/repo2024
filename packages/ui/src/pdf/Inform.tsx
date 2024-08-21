import { IResume } from "@configs/default";
import QRCode from "react-qr-code";
import { Box } from "ui";
import { Ternary } from "./Ternary";
import { Fragment, useEffect, useRef, useState } from "react";
import { checkOverflow } from "../util";
import { setType } from ".";

interface IProp {
  data: IResume;
  setMax: setType;
}

export const Inform = ({ data, setMax }: IProp) => {
  const [pages, setPages] = useState<HTMLElement[][]>([]);

  const pdf = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pdf?.current) {
      const over = checkOverflow(pdf?.current);
      setPages(over);
      setMax((prev) => ({ ...prev, inform: over.length + 1 }));
    }
    if (!!!data.project_list.length) {
      setMax((prev) => ({ ...prev, projects: 0 }));
    }
  }, [data]);

  return (
    <>
      <div className="overflow-auto flex-shrink-0 w-fit h-full">
        <Box
          width="595px"
          height="841px"
          padding="30px"
          round={{ all: 0 }}
          className="bg-white checkAble gap-[0_!important] flex-shrink-0 overflow-hidden"
          ref={pdf}
        >
          <div className="flex w-full justify-between items-center">
            {/* 프로필 */}
            <div className="col-flex gap-1">
              <div className="flex gap-3 items-center">
                <span className="text-title1 text-black">
                  {data.writer.name}
                </span>
                <span className="text-title4 text-gray-700">
                  {data.writer.major_name}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-body8 text-black font-light">
                  {data.writer.department}{" "}
                  <span className="text-[#A5A4A4]">
                    {data.writer.class_info.school_number}
                  </span>
                </span>
                <span className="text-body8 text-black font-light">
                  {data.writer.email}
                </span>
              </div>
            </div>
            {!!data.writer.url && (
              <QRCode value={data.writer.url} className="w-[60px] h-[60px]" />
            )}
          </div>
          {/* 자기 소개 */}
          <Ternary
            data={!!data.introduce.heading || !!data.introduce.introduce}
          >
            <div className="col-flex gap-5 mt-6">
              <span className="text-body3 text-black">
                {data.introduce.heading}
              </span>
              <span className="text-body8 text-[#818181] font-light">
                {data.introduce.introduce}
              </span>
            </div>
          </Ternary>
          {/* 기술 스택 */}
          <Ternary data={data.writer.skill_set?.length !== 0}>
            <div className="col-flex gap-[10px] ">
              <span className="text-body5 text-black mt-6">기술 스택</span>
              <div className="border-l-[3px] border-black flex gap-1 px-[5px] flex-wrap w-full">
                {data.writer.skill_set.map((i, j) => (
                  <span className="text-body7 px-2 py-[2px] text-black" key={j}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Ternary>
          {/* 자격증 & 수상 */}
          <Ternary data={data.achievement_list.length}>
            <div className="col-flex checkAble">
              <span className="text-body5 text-black mt-6 block">
                자격증 & 수상
              </span>
              {data.achievement_list.map((i) => (
                <div
                  className="pl-5 pr-[5px] py-3 border-l-[3px] mt-[10px] border-black flex justify-between items-center"
                  key={i.element_id}
                >
                  <span
                    className={`text-body5 ${!!i.name ? "text-black" : "text-gray-200"}`}
                  >
                    {i.name || "내용을 입력하세요"}
                  </span>
                  <Ternary data={i.institution || i.date}>
                    <div className="flex gap-[10px] items-center">
                      <span className="text-body8 font-light text-[#818181]">
                        {i.institution}
                      </span>
                      <div className="h-[16px] bg-[#818181] w-[1px] rounded-full" />
                      <span className="text-body8 font-light text-[#818181]">
                        {i.date}
                      </span>
                    </div>
                  </Ternary>
                </div>
              ))}
            </div>
          </Ternary>
          {/* 활동 */}
          <Ternary data={data.activity_list.length !== 0}>
            <div className="col-flex checkAble">
              <span className="text-body5 text-black mt-6 block">활동</span>
              {data.activity_list.map((i) => (
                <div
                  className="pl-5 pr-[5px] py-1 border-l-[3px] min-h-[57.5px] mt-[10px] border-black col-flex"
                  key={i.element_id}
                >
                  <div className="flex w-full justify-between items-center">
                    <span className="text-body5 text-black">{i.name}</span>
                    <span className="text-body8 font-light text-[#818181]">
                      {!i.is_period
                        ? i.start_date
                        : `${i.start_date} ~ ${i.end_date || "진행중"}`}
                    </span>
                  </div>
                  <span className="text-gray-300 whitespace-pre-line">
                    {i.description}
                  </span>
                </div>
              ))}
            </div>
          </Ternary>
        </Box>
      </div>
      {pages?.map((item, index) => (
        <Fragment key={index}>
          <div className="split" />
          <div className="overflow-auto flex-shrink-0 w-fit h-full">
            <Box
              width="595px"
              height="841px"
              padding="30px"
              round={{ all: 0 }}
              className="bg-white gap-[0_!important] overflow-x-hidden flex-shrink-0"
            >
              <>
                {item?.map((i, j) => {
                  return (
                    <div
                      key={j}
                      ref={(items) =>
                        items?.childNodes.forEach(
                          (i) =>
                            ((i as HTMLElement).style.visibility = "visible")
                        )
                      }
                      dangerouslySetInnerHTML={{ __html: i.outerHTML }}
                    />
                  );
                })}
              </>
            </Box>
          </div>
        </Fragment>
      ))}
    </>
  );
};
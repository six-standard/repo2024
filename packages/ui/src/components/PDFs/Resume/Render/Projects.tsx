import { Ternary, checkOverflow, projectType } from "@configs/util";
import { useEffect, useRef, useState } from "react";
import { PageLayout, ItemLayout } from "../Layout";
import { Overflow } from "./Overflow";
import QRCode from "react-qr-code";
import { setType } from ".";

interface IProp {
  data: projectType;
  setMax?: setType;
  keep?: any;
  showPadding?: boolean;
}

export const typeAgainChange = {
  PERSONAL: "개인",
  TEAM: "팀"
};

export const Projects = ({ data, setMax, keep, showPadding }: IProp) => {
  const pdf = useRef<HTMLElement>(null);
  const [pages, setPages] = useState<HTMLElement[][]>([]);
  const isFirst = useRef(true);

  useEffect(() => {
    if (!!pdf?.current) {
      const over = checkOverflow(pdf?.current);
      setPages(over);
      if (keep && setMax) {
        const check = over.length + 1 - (keep.current[data.element_id] || 0);
        if (isFirst.current) {
          setMax((prev) => ({ ...prev, projects: ++prev.projects }));
          isFirst.current = false;
        }
        setMax((prev) => ({
          ...prev,
          projects:
            check === 0
              ? prev.projects
              : check < 0
                ? prev.projects + check
                : prev.projects + over.length
        }));
        keep.current[data.element_id] = over.length + 1;
      }
    }
  }, [data]);

  useEffect(() => {
    // 지워지기 전에 실행햐야 함. 로직은 따로 없음
    return () => {
      if (keep && setMax) {
        setMax((prev) => ({
          ...prev,
          projects: prev.projects - keep.current[data.element_id]
        }));
      }
    };
  }, []);

  return (
    <>
      <PageLayout ref={pdf}>
        <div className="flex w-full justify-between items-center">
          <div
            className={`flex gap-[15px] ${!!data?.logo || !!data.url ? "h-[64px]" : "h-fit"} items-center`}
          >
            <Ternary data={data?.logo}>
              <img
                src={data?.logo?.image_path + `?timestamp=${Date.now()}`}
                className="w-[64px] h-[64px]"
                crossOrigin="anonymous"
              />
            </Ternary>
            <div className="col-flex">
              <div className="flex gap-[8px] items-end">
                <span className="text-black text-title3">
                  {data?.name || "무명"}
                </span>
                <span className="text-gray-600 text-body5">
                  {typeAgainChange[data?.type]} 프로젝트
                </span>
              </div>
              <Ternary data={data?.date?.start_date || data?.date?.end_date}>
                <span className="text-gray-400 text-body7">
                  {data?.date?.start_date} ~ {data?.date?.end_date || "진행중"}
                </span>
              </Ternary>
            </div>
          </div>
          <Ternary data={data?.url}>
            <QRCode value={data?.url} className="w-[60px] h-[60px]" />
          </Ternary>
        </div>
        <ItemLayout title="사용 기술" type="rowList" data={data?.skill_set} />
        <>
          {data?.sections.map((i) => (
            <ItemLayout
              title={i.title}
              type="static"
              data={i.description}
              isCheckAble
            />
          ))}
        </>
      </PageLayout>

      <Overflow items={pages} showPadding={showPadding} />
    </>
  );
};
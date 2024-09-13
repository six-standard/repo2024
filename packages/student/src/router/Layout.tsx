import { resumeCompletion, resumeDetail, studentInfo } from "@/apis";
import { Outlet } from "react-router-dom";
import { useResumeData } from "@/hooks";
import { useEffect } from "react";
import { Sidebar } from "ui";

export const Layout = () => {
  const { data: resumeLocalData, set } = useResumeData();
  const { data: completionData } = resumeCompletion();
  const { data: studentData } = studentInfo();
  const { data: resumeData } = resumeDetail();

  useEffect(() => {
    if (resumeData) set((prev) => ({ ...prev, data: resumeData }));
  }, [resumeData]);

  return (
    <div className="w-full h-screen bg-black flex">
      <Sidebar
        profile={{
          major: studentData?.major,
          name: studentData?.name,
          percent: completionData?.percent_complete,
          status: resumeLocalData?.status
        }}
        items={[
          {
            name: "메인",
            sections: [
              { icon: "House", name: "홈", urls: ["/"] },
              { icon: "Book", name: "도서관", urls: ["/library", "/book"] },
              { icon: "File", name: "내 레주메", urls: ["/preview"] }
            ]
          },
          {
            name: "포트폴리오",
            sections: [
              {
                icon: "User",
                name: "내 정보",
                urls: ["/write/1"],
                checked: completionData?.writer_info
              },
              {
                icon: "Document",
                name: "자기소개",
                urls: ["/write/2"],
                checked: completionData?.introduce
              },
              {
                icon: "ChartCircle",
                name: "프로젝트",
                urls: ["/write/3"],
                checked: completionData?.project
              },
              {
                icon: "Chart",
                name: "자격증 & 수상",
                urls: ["/write/4"],
                checked: completionData?.certificate_and_award
              },
              {
                icon: "Users",
                name: "활동",
                urls: ["/write/5"],
                checked: completionData?.activity
              }
            ]
          }
        ]}
      />
      <Outlet />
    </div>
  );
};

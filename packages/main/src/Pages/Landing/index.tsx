import { useEffect, useState } from "react";
import { Sections } from "./Sections";
import { SlideSection } from "./SlideSection";
import { Modal } from "./Modal";
import { LogoFull } from "@/assets";
import { Button } from "./Button";

export const Landing = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll("button");
    items.forEach((i) =>
      i.addEventListener("click", () => setOpen((prev) => !prev))
    );
    return () => {
      const items = document.querySelectorAll("button");
      items.forEach((i) =>
        i.removeEventListener("click", () => setOpen((prev) => !prev))
      );
    };
  }, [setOpen]);

  return (
    <div className="relative col-flex items-center">
      <div className="absolute w-full h-[421px] -z-10 bg-gradient-to-b from-[#000000] to-[#00000000] " />
      <header className="fixed flex justify-between items-center w-full h-20 px-[100px] z-10">
        <LogoFull />
        <Button>Login →</Button>
      </header>
      <Modal open={open} />
      <Sections />
      <SlideSection />
      <footer className="flex items-center w-full h-[280px] px-[100px]">
        <div className="col-flex gap-5">
          <div className="col-flex gap-3">
            <span className="text-[24px] font-extrabold">Repo</span>
            <span className="text-[14px] font-light">© 2024 Repo</span>
          </div>
          <span className="text-[14px] font-light text-gray-100">
            주소 : 대전광역시 유성구 가정북로 76 (장동 23-9)
            <br />
            교무실 : 042-866-8822 Fax : 042-867-9900 행정실 : 042-866-8885 | Fax
            : 042-863-4308
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-light text-gray-50 pointable">
              이용약관
            </span>
            <div className="w-1 h-4 rounded-sm bg-gray-300" />
            <span className="text-[14px] font-light text-gray-50 pointable">
              개인정보처리방침
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
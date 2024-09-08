import { Title } from "./Title";

export const Fourth = () => {
  return (
    <div className="flex items-center gap-9 w-full py-20">
      <img src="/Library.png" className="w-[400px]" />
      <div className="col-flex gap-6">
        <Title direction="left">이력서 도서관</Title>
        <span className="text-[20px] font-light leading-none text-gray-50">
          이전 기수 선배분들의 이력서를 도서관에서 참고해 볼 수 있어요.
        </span>
      </div>
    </div>
  );
};
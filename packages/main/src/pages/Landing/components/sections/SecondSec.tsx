import { Layout } from "../Layout";

export const SecondSec = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <span className="text-white font-semibold text-[45px] line-fit">
          간편한
        </span>
        <span className="text-[#C5C5C5] font-semibold text-[30px] line-fit">
          정보 입력
        </span>
        <span className="w-[240px] text-white text-[20px] font-thin line-fit-br">
          간편하게 정보들을 입력하고, 멋진 이력서를 생성해 보세요
        </span>
      </div>
      <div className="w-[650px] h-[450px] bg-white z-20 relative" />
    </Layout>
  );
};

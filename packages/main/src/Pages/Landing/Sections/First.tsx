import { Button } from "../Button";

export const First = () => {
  return (
    <section className="col-flex items-center gap-16">
      <div className="col-flex items-center gap-6">
        <span className="px-4 py-1 font-semibold text-green-400 border-[1px] rounded-[100px] border-green-700 bg-green-900">
          Repo
        </span>
        <span className="text-center font-black text-[48px] leading-[57px]">
          이력서, 온라인으로
          <br /> 쉽고 간편하게.
        </span>
        <Button>Repo 사용하기</Button>
      </div>
      <div className="relative">
        <img src="/Screen.png" className="border-8 rounded-2xl border-black" />
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-gray-800" />
      </div>
    </section>
  );
};

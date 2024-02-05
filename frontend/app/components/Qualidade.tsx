import React from "react";
import data from "../../utils/restApi.json";

const Qualidade = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url('/quality.jpg')" }}
        className="min-w-[500px] flex h-fit flex-col items-center justify-center py-[75px] px-[20px] bg-cover bg-no-repeat bg-center"
        id="qualities"
      >
        <h2 className="text-3xl text-white pb-12">Nossas Qualidades</h2>
        <div className="w-[50%] min-w-[400px] max-w-[1500px] flex flex-col gap-y-6 xl:flex-row xl:gap-x-6 xl:w-full">
          {data.data[0].ourQualities.map((element) => {
            return (
              <div
                className="flex flex-col items-center justify-center p-4 text-align  rounded-xl"
                key={element.id}
              >
                <img
                  className="mb-[25px]"
                  src={element.image}
                  alt={element.title}
                />
                <p className="text-[1.8rem] font-[700] text-white mb-[12px] tex-center">
                  {element.title}
                </p>
                <p className="text-[18px] text-white text-center font-[300]">
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Qualidade;

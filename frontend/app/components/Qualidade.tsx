import React from "react";
import data from "../../utils/restApi.json";

const Qualidade = () => {
  return (
    <>
      <section
        className="flex h-fit flex-col items-center justify-center py-[75px] px-[20px] bg-orange-900"
        id="qualities"
      >
        <h2 className="text-2xl text-white pb-12">Nossas Qualidades</h2>
        <div className="min-w-[1500px] max-w-[1500px] flex flex-wrap">
          {data.data[0].ourQualities.map((element) => {
            return (
              <div
                className="flex-1 flex flex-col items-center justify-center text-align px-[100px]"
                key={element.id}
              >
                <img
                  className="mb-[25px]"
                  src={element.image}
                  alt={element.title}
                />
                <p className="text-[1.8rem] font-[700] text-white mb-[12px]">
                  {element.title}
                </p>
                <p className="texxt-[18px] text-white font-[300]">
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

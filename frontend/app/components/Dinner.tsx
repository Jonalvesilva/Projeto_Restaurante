import data from "../../utils/restApi.json";

export function Dinner() {
  return (
    <section
      className="min-w-[500px] flex max-w-screen-lg mx-auto flex-col py-12 items-center"
      id="servicos"
    >
      <div>
        <h2 className="text-3xl pb-8">Nossos Pratos</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {data.data[0].dishes.map((data) => {
          return (
            <div
              className="shadow shadow-black w-[250px] h-[250px] flex flex-col items-center justify-center gap-4 
                scale-100 hover:scale-105 ease-in duration-300 relative rounded-lg"
              key={`${data.title}`}
            >
              <img src={`${data.image}`} className="w-full h-full"></img>
              <p className="uppercase text-md font-bold absolute  bottom-0 right-0 p-1 bg-orange-500">
                {data.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

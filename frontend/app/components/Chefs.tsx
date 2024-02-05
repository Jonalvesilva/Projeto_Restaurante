import Slider from "../components/Slider";

export function Chefs() {
  return (
    <section
      className="min-w-[500px] flex mx-auto items-center justify-center"
      id="unidades"
    >
      <div
        style={{ backgroundImage: "url('/chefs.png')" }}
        className="h-[600px] w-full flex bg-cover bg-center"
      >
        <div className="flex flex-col max-w-screen-lg mx-auto items-center w-[90%] py-14">
          <div className="py-8 w-full">
            <h2 className="text-white text-3xl text-start">Nossos Chefs</h2>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}

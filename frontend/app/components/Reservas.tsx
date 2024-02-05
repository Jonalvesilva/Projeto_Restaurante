"use client";

import React, { FormEvent, useState } from "react";
import { api } from "../api/api";
import toast from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Reserva = {
  nome: string;
  sobrenome: string;
  email: string;
  phone: string;
  time: string;
  date: string;
};

export function Reservas() {
  const initial = {} as Reserva;
  const [form, setForm] = useState<Reserva>(initial);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await api.post("/api/v1/reservas/send", form);
    if (response.data.success) {
      toast.success(response.data.message);
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
    }
  };

  return (
    <section
      className="min-w-[500px] flex flex-col bg-black h-fit items-center justify-center py-12"
      id="reservation"
    >
      <h2 className="text-white text-3xl mb-12">Reservas</h2>
      <div className="flex flex-col bg-white h-full w-[70%] xl:px-6 max-w-[1200px] rounded-xl xl:flex-row xl:gap-x-10 ">
        <div
          style={{ backgroundImage: "url('/reservation.png')" }}
          className="h-[300px] w-[300px] xl:h-[500px] xl:w-full xl:max-w-[500px] bg-contain bg-center bg-no-repeat mx-auto"
        ></div>
        <div className="w-full flex flex-col xl:items-start xl:p-4">
          <div>
            <h2 className="text-black text-2xl text-center xl:text-start mb-6 mt-10">
              Faça a sua reserva
            </h2>
          </div>
          <div className="w-full h-full">
            <form className="w-[80%] h-full mx-auto xl:w-full xl:mx-0">
              <div className="flex flex-col xl:flex-row xl:gap-x-6">
                <input
                  type="text"
                  value={form.nome}
                  placeholder="Nome"
                  className="w-full border border-black/30 text-lg p-2 my-2 outline-none"
                />
                <input
                  type="text"
                  value={form.sobrenome}
                  placeholder="Sobrenome"
                  className="w-full border border-black/30  text-lg p-2 my-2 outline-none"
                />
              </div>
              <input
                type="email"
                value={form.email}
                placeholder="Email"
                className="w-full border border-black/30  text-lg p-2 my-2 outline-none"
              ></input>
              <input
                type="text"
                value={form.phone}
                placeholder="Telefone"
                className="w-full border border-black/30  text-lg p-2 my-2 outline-none"
              ></input>
              <div className="flex flex-col xl:flex-row xl:gap-x-6">
                <input
                  type="date"
                  value={form.date}
                  placeholder="Data"
                  className="w-full border border-black/30  text-lg p-2 my-2 outline-none"
                ></input>
                <input
                  type="time"
                  value={form.time}
                  placeholder="Hora"
                  className="w-full border border-black/30  text-lg p-2 my-2 outline-none"
                ></input>
              </div>
              <button
                type="submit"
                className="p-3 bg-green-600 text-xl w-full mt-4 mb-8 xl:mb-0 text-white rounded-xl"
              >
                Reservar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

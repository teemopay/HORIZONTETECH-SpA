"use client";
import { useState } from "react";
import CustomSelect from "@/components/Select";

export default function About() {
  const [value, setValue] = useState({
    fullName: "",
    phone: "",
    work: "",
    type: "",
    numbers: "",
  });
  const inputStyle =
    "w-full px-[30px] py-2 rounded-[10px]  focus:outline-none border border-gray-300  text-[#000B33] text-[16px]   transition focus:border-[#2B59FF]";
  const lableStyle =
    "text-[16px] md:text-[20px] text-[#000B33] mb-[6px] md:mb-2";
  const counts = ["0-100", "100-200", "200-500", "500-1000", "Más de 1000"];
  const work = [
    "Finanzas",
    "Educación",
    "Dispositivos Inteligentes",
    "Publicidad",
    "Retail",
    "Big Data",
    "AI",
    "Salud",
    "Otros",
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: val } = e.target;
    setValue((prev) => ({ ...prev, [name]: val }));
  };
  const submit = async () => {
    const hasEmptyValue = Object.values(value).some((v) => !v);
    if (hasEmptyValue) {
      return alert("Check required fields!");
    }
    if (window.confirm("Please confirm?")) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: value }),
      });
    }
  };
  return (
    <div className="overflow-hidden pt-20 min-h-screen px-5 md:px-[60px] pb-[100px]  bg-[url('/about.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="slide-from-top max-w-[856px] mt-[126px]   w-full  bg-white backdrop-blur-xs px-[18px] md:px-[110px] py-10 rounded-[10px] ">
        <div className="text-center text-[30px] md:text-[58px] font-bold mb-2.5">
          Contáctenos
        </div>
        <div className="text-center text-[16px] mb-9">
          Deje su información para que nuestro gerente de clientes pueda ponerse
          en contacto con usted lo antes posible.
        </div>
        <div className="mb-3 md:mb-[18px]">
          <div className={lableStyle}>Su Nombre*</div>
          <input
            name="fullName"
            value={value.fullName}
            type="text"
            placeholder="Por favor ingrese"
            className={inputStyle}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3 md:mb-[18px]">
          <div className={lableStyle}>Número de Teléfono*</div>
          <input
            name="phone"
            value={value.phone}
            type="text"
            placeholder="Por favor ingrese"
            className={inputStyle}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3 md:mb-[18px]">
          <div className={lableStyle}>Su Cargo*</div>
          <input
            name="work"
            value={value.work}
            type="text"
            placeholder="Por favor ingrese"
            className={inputStyle}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="mb-3 md:mb-[18px]">
          <div className={lableStyle}>Industria*</div>
          <CustomSelect
            placeholder="Por favor seleccione"
            options={work}
            onChange={(val) => {
              setValue((prev) => ({ ...prev, type: val }));
            }}
          />
        </div>
        <div className="mb-3 md:mb-[47px]">
          <div className={lableStyle}>Número de Empleados*</div>
          <CustomSelect
            placeholder="Por favor seleccione"
            options={counts}
            onChange={(val) => {
              setValue((prev) => ({ ...prev, numbers: val }));
            }}
          />
        </div>
        <div
          onClick={submit}
          className="h-[50px] text-[16px] bg-[#FF922B] text-white w-[227px] rounded-full flex items-center justify-center cursor-pointer mx-auto"
        >
          Enviar
        </div>
      </div>
    </div>
  );
}

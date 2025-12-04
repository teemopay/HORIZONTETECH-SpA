"use client";
import { useEffect } from "react";
import Link from "next/link";
import { MainPage } from "@/components/Page";
import SkeletonImage from "@/components/SkeletonImage";
const list = [
  {
    title: "Productos y Servicios",
    children: [
      {
        href: "/Solution?type=0",
        name: "Planificación de Asignación de Activos",
      },
    ],
  },
  {
    title: "Introducción de la Empresa",
    children: [
      {
        href: "/About",
        name: "Contáctanos",
      },
    ],
  },
];
export default function Footer() {
  useEffect(() => {}, []);
  return (
    <div className=" bg-[#050F19] text-[#FFFFFF]">
      <MainPage>
        <div className="pt-[45px] pb-[70px] grid grid-cols-1 lg:grid-cols-4 gap-x-20">
          <div className="mb-3 lg:mb-0 cursor-pointer md:col-span-2">
            <Link href="/">
              <SkeletonImage
                src="/logo-2.png"
                alt="logo"
                width={316}
                height={46}
              />
            </Link>
            <div className="text-[14px] mt-[30px] text-white mb-[15px] hover:text-[#FF922B]">
              Dirección de la compañía: HUÉRFANOS 1178, OF. 224 / 226 / 228 /
              230, Santiago, Chile
            </div>
            <div className="text-[14px] text-white mb-[15px] hover:text-[#FF922B]">
              Correo electrónico de la compañía: operador@horizoninvest.cl
            </div>
            <div className="text-[14px]  text-white hover:text-[#FF922B]">
              Horario de trabajo: 9:30am – 18:30pm
            </div>
          </div>
          {list.map((i, index) => {
            return (
              <div key={index} className="mt-5 lg:mt-0">
                <div className="mb-6">{i.title}</div>
                {i.children.map((s, sIndex) => {
                  return (
                    <Link
                      className="block mb-3 text-[12px] hover:text-[#FF922B] cursor-pointer"
                      href={s.href}
                      key={sIndex}
                    >
                      {s.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="pt-[38px] pb-11  border-t-[#FFF5EE]  border-t-[0.5px] text-center text-[14px] text-[rgba(255,255,255,0.48)]">
          Copyright © 2025 HORIZONTETECH SpA
        </div>
      </MainPage>
    </div>
  );
}

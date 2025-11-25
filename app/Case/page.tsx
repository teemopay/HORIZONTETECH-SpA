"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainPage } from "@/components/Page";
import Contact from "@/components/Concat";
import SkeletonImage from "@/components/SkeletonImage";
import { cn } from "@/lib/utils";
interface ChildItem {
  title: string;
  cnt: any;
}

interface ItemData {
  id: number;
  title: string;
  children: ChildItem[];
}

const list = [
  {
    id: 1,
    title: "Planificación de Asignación de Activos",
    children: [
      {
        title: "Necesidades del cliente: ",
        cnt: "Un cliente de alto patrimonio buscaba construir un portafolio de inversión sólido en un entorno de mercado cambiante, con el objetivo de lograr un crecimiento a largo plazo y evitar riesgos derivados de la volatilidad de un solo tipo de activo. Requería una solución sistemática, científica y ajustable de asignación de activos.",
      },
      {
        title: "Solución: ",
        cnt: "Nuestro equipo de consultores evaluó la situación financiera del cliente, su tolerancia al riesgo, sus necesidades de liquidez y sus planes futuros. Con base en ello, desarrollamos un portafolio diversificado que incluye acciones, bonos, activos internacionales e inversiones alternativas. Además, implementamos un mecanismo de reajuste periódico y un análisis de ciclos de mercado para mantener la asignación en niveles óptimos y mejorar la estabilidad a largo plazo.",
      },
      {
        title: "Resultados: ",
        cnt: "El portafolio del cliente mantuvo un crecimiento estable incluso durante periodos de alta volatilidad. El riesgo global disminuyó considerablemente y los resultados superaron sus estrategias anteriores. La solución permitió al cliente alcanzar su meta de crecimiento sostenido y optimizar la eficiencia de su gestión patrimonial.",
      },
    ],
  },
  {
    id: 2,
    title: "Gestión de Riesgos y Planificación de Seguros",
    children: [
      {
        title: "Necesidades del cliente: ",
        cnt: "Una empresa mediana enfrentaba riesgos operativos, cobertura insuficiente para sus empleados y baja capacidad de respuesta ante eventos inesperados. La empresa necesitaba un sistema integral de evaluación de riesgos y una reestructuración de su esquema de seguros para garantizar la continuidad operativa.",
      },
      {
        title: "Solución: ",
        cnt: "Realizamos una revisión integral de los riesgos, identificando y cuantificando riesgos operativos, humanos y financieros. Posteriormente, diseñamos un plan de protección que incluye seguros patrimoniales, seguros de responsabilidad civil y coberturas complementarias de salud y accidentes para los empleados. También establecimos un sistema de alerta temprana y revisiones periódicas para asegurar que la protección evolucione junto con las necesidades de la empresa.",
      },
      {
        title: "Resultados: ",
        cnt: "La exposición global al riesgo de la empresa se redujo significativamente y la asignación de recursos de seguros se volvió más eficiente. Las pérdidas debido a incidentes inesperados disminuyeron notablemente. El plan optimizado fortaleció la estabilidad operativa y aumentó la satisfacción y fidelidad de los empleados.",
      },
    ],
  },
  {
    id: 3,
    title: "Caso de Campaña de Promoción de Marca",
    children: [
      {
        title: "Necesidades del cliente: ",
        cnt: "NopalTech es una nueva marca de moda que busca aumentar su reconocimiento de marca y atraer a su público objetivo a través de la publicidad.",
      },
      {
        title: "Solución: ",
        cnt: "Nuestro equipo de publicidad desarrolló una estrategia integral para NopalTech. Se lanzaron anuncios de palabras clave y anuncios gráficos en la red de búsqueda y display de Google, y se crearon y publicaron una serie de anuncios creativos en las plataformas de Facebook e Instagram de Meta.",
      },
      {
        title: "Resultados: ",
        cnt: "La campaña publicitaria elevó rápidamente el reconocimiento de la marca NopalTech, incrementó significativamente el tráfico del sitio web y las ventas de productos, y mejoró eficazmente la percepción y reputación de la marca entre el público objetivo.",
      },
    ],
  },
  {
    id: 4,
    title: "Caso de Consultoría en Planificación Estratégica",
    children: [
      {
        title: "Necesidades del cliente: ",
        cnt: "MayaSoft es una empresa de manufactura tradicional que enfrenta una intensificación de la competencia en el mercado y cuellos de botella en el crecimiento de su negocio, y necesita desarrollar una nueva estrategia de crecimiento.",
      },
      {
        title: "Solución: ",
        cnt: "Nuestro equipo de consultoría realizó un análisis exhaustivo del entorno de mercado, los recursos internos y las capacidades de MayaSoft, y elaboró una estrategia centrada en la transformación digital y la innovación de productos. Además, proporcionamos un plan de implementación detallado y recomendaciones para ayudar al cliente a avanzar con éxito en la transformación estratégica.",
      },
      {
        title: "Resultados: ",
        cnt: "Siguiendo nuestras recomendaciones, MayaSoft implementó con éxito la transformación estratégica, lanzó una serie de productos innovadores, expandió nuevos canales de mercado y mejoró significativamente su competitividad y rentabilidad.",
      },
    ],
  },
];
export default function Case() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    gsap.set(".SplitAnimation", { opacity: 1 });
    let tl = gsap.timeline();
    let tween;
    SplitText.create(".SplitAnimation", {
      type: "lines",
      mask: "lines",
      onSplit: (self) => {
        tween = gsap.from(self.lines, {
          rotationX: -100,
          transformOrigin: "50% 50% -160px",
          opacity: 0,
          duration: 0.8,
          ease: "power3",
          stagger: 0.25,
        });
        return tween;
      },
    });
    tl.fromTo(
      ".titleAnimate",
      {
        opacity: 0,
      },
      {
        y: -20,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        opacity: 1,
      },
      1
    );
    const modules = document.querySelectorAll(".module");

    modules.forEach((mod) => {
      const texts = mod.querySelectorAll(".textAnimation");
      const img = mod.querySelector(".module-img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mod,
          start: "top 80%",
          toggleActions: "play pause resume reset",
          markers: false,
        },
      });
      tl.fromTo(
        texts,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.4,
        },
        0
      );
      tl.fromTo(img, { scale: 0.6 }, { scale: 1, duration: 1 }, 0);
    });
  }, []);
  return (
    <div>
      <Servicios />
      {list.map((i, index) => {
        return <Items sort={index} item={i} key={index} />;
      })}

      <Contact
        src="/case-about.png"
        title="Le ofrecemos soluciones personalizadas de la más alta calidad"
        sub="Ahora, dé el primer paso para colaborar con nosotros. Unamos fuerzas para convertir su visión empresarial en realidad."
      />
    </div>
  );
}

export const Servicios = () => {
  return (
    <div className="relative">
      <SkeletonImage
        src="/case-bg.png"
        alt="logo"
        width={2880}
        height={1120}
        className="rounded-none min-h-[560px]"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center flex-col">
        <MainPage className="mt-20">
          <div className="SplitAnimation text-[30px] md:text-[40px] lg:text-[58px] font-bold text-white max-w-[971px] text-center mx-auto mb-7">
            Casos de Éxito de Clientes
          </div>
          <div className="titleAnimate text-[14px] md:text-[16px] text-white text-center mb-16">
            Explora nuestros casos de éxito. Desde startups hasta marcas
            consolidadas, nuestras obras muestran cómo hemos ayudado a nuestros
            clientes a lograr la transformación digital y el crecimiento
            empresarial.
          </div>
        </MainPage>
      </div>
    </div>
  );
};

export const Items = ({ sort, item }: { sort: number; item: ItemData }) => {
  return (
    <div
      key={sort}
      className={cn(
        "module",
        "pt-28 pb-[130px]",
        sort % 2 === 0 ? "bg-[#F5F7FA]" : "bg-white"
      )}
    >
      <MainPage>
        <div
          className={cn(
            "lg:flex",
            sort % 2 === 0 ? "flex-row" : "flex-row-reverse",
            `Animation-${sort}`
          )}
        >
          <div
            className={cn(
              "flex-1 ",
              sort % 2 === 0
                ? "lg:mr-[30px] xl:mr-[68px]"
                : "lg:ml-[30px] xl:ml-[68px]"
            )}
          >
            <div className="textAnimation text-[30px] lg:text-[36px] xl:text-[48px]  text-[#222222] mb-[30px] lg:mb-2 md:mb-[65px] font-bold">
              {item.title}
            </div>
            {item.children.map((s, sIndex) => {
              return (
                <div
                  key={sIndex}
                  className="textAnimation mb-10 lg:mb-5 xl:mb-10 last:mb-0  text-[16px] lg:text-[14px] xl:text-[16px] text-[#8A879F] "
                >
                  <span className="text-[#2A2A2A]">{s.title}</span>
                  {s.cnt}
                </div>
              );
            })}
          </div>
          <SkeletonImage
            src={`/case/${item.id}.png`}
            alt="logo"
            width={518}
            height={657}
            className={cn(
              "w-full mt-5 lg:max-w-[400px] xl:max-w-[518px]",
              "module-img"
            )}
          />
        </div>
      </MainPage>
    </div>
  );
};

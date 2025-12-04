"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainPage } from "@/components/Page";
import Contact from "@/components/Concat";
import SkeletonImage from "@/components/SkeletonImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Case() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    gsap.set(".SplitAnimation", { opacity: 1 });
    let tl = gsap.timeline();
    let tween;
    SplitText.create(".SplitAnimation", {
      type: "words",
      mask: "words",
      onSplit: (self) => {
        tween = gsap.from(self.words, {
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          duration: 0.7,
          ease: "back",
          stagger: 0.15,
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
    gsap.utils.toArray(".scrollText").forEach((el: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "restart pause restart pause",
        },
      });
      tl.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        }
      );
    });
  }, []);
  return (
    <div>
      <Servicios />
      <SpA />
      <Aplicables />
      <Contact
        src="/h-about.png"
        title="Somos Su Socio Digital Integral"
        sub="Desde el desarrollo de sitios web y aplicaciones hasta estrategias publicitarias precisas y consultoría empresarial profesional, ayudamos a que su empresa prospere en la era digital."
      />
    </div>
  );
}
export const Servicios = () => {
  return (
    <div className="relative">
      <SkeletonImage
        src="/home-bg.png"
        alt="logo"
        width={2880}
        height={1500}
        className="rounded-none min-h-[600px]"
      />
      <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center flex-col">
        <MainPage className="mt-5">
          <div className="SplitAnimation text-[20px] md:text-[30px] lg:text-[58px] font-bold text-[#222] max-w-[971px] text-center mx-auto mb-7">
            Servicios empresariales seguros y confiables
          </div>
          <div className="titleAnimate text-[14px] md:text-[16px] text-[#333333] text-center mb-16">
            HORIZONTETECH SpA es una firma de consultoría de inversiones
            especializada en ofrecer planificación financiera, asignación global
            de activos y análisis de mercado para empresas y clientes
            individuales. Con un equipo internacional y un enfoque analítico
            riguroso, ayudamos a nuestros clientes a desarrollar estrategias
            claras y lograr un crecimiento sostenible.
          </div>
          <Link
            href="/About"
            className="titleAnimate  relative h-[50px] mx-auto bg-[#FF922B] hover:bg-white hover:text-[#FF922B]  font-bold w-[180px] flex items-center justify-center rounded-full text-white"
          >
            Saber Más
          </Link>
        </MainPage>
      </div>
    </div>
  );
};

export const SpA = () => {
  const swiperWebRef: any = useRef(null);
  const paginationRef = useRef(null);
  const handlePrev = () => {
    if (swiperWebRef.current) {
      swiperWebRef.current.swiper.slidePrev(); // 向前切换
    }
  };

  const handleNext = () => {
    if (swiperWebRef.current) {
      swiperWebRef.current.swiper.slideNext(); // 向后切换
    }
  };
  const list = [
    {
      id: 1,
      name: "Planificación de Asignación de Activos",
      cnt: "Construya carteras de inversión diversificadas para mitigar científicamente los riesgos y capturar oportunidades de crecimiento en varios mercados. Basándonos en sus objetivos financieros y tolerancia al riesgo, elaboramos planes de asignación de activos estratégicos a medida para una apreciación patrimonial constante a largo plazo.",
    },
  ];

  return (
    <div className="pt-40 pb-[136px]">
      <MainPage>
        <div
          className={cn(
            "scrollText text-[32px] md:text-[48px] font-bold leading-[58px] text-center  mb-[26px]"
          )}
        >
          <span className="text-[#FF922B]">HORIZONTETECH SpA</span> traza un
          camino sólido para sus inversiones
        </div>
        <div className="scrollText text-[16px] text-[#8A879F] text-center mb-[84px]">
          La consultora líder en planificación de inversiones, asignación de
          activos y análisis de mercados internacionales
        </div>
        <div className="border border-[#E5E5E5] rounded-2xl">
          <Swiper
            ref={swiperWebRef}
            className="flex-1"
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination]}
            loop={false}
          >
            {list.map((i, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="w-full p-[26px] md:flex justify-between items-start  rounded-2xl"
                    key={i.id}
                  >
                    <div className="flex-1 md:mr-5  xl:mr-[94px] md:ml-4 flex flex-col justify-between">
                      <div className="xl:min-h-[114px] text-[20px] xl:text-[38px] text-[#242424]   md:pt-6 md:mb-5 font-medium">
                        {i.name}
                      </div>
                      <div className="text-[12px] lg:text-[16px] xl:text-[18px] text-[#8A879F]">
                        {i.cnt}
                      </div>
                    </div>
                    <SkeletonImage
                      src={`/swiper/${i.id}.png`}
                      alt="user"
                      width={513}
                      height={372}
                      className="w-full md:max-w-[300px] lg:max-w-[400px] xl:max-w-[513px]  mt-5 md:pt-0"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          ref={paginationRef}
          className=" custom-pagination hidden items-center justify-center mt-10 cursor-pointer"
        >
          <svg
            className="max-w-[30px] md:max-w-[50px] mr-5"
            onClick={handlePrev}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame" clipPath="url(#clip0_1_946)">
              <path
                id="Vector"
                d="M16.1458 25C16.145 25.2425 16.1945 25.4826 16.2914 25.7049C16.3882 25.9273 16.5302 26.1271 16.7083 26.2917L28.2083 37.0625C28.3766 37.2198 28.5742 37.3424 28.7898 37.4234C29.0055 37.5043 29.235 37.542 29.4652 37.5343C29.6954 37.5265 29.9218 37.4735 30.1316 37.3783C30.3413 37.283 30.5302 37.1474 30.6875 36.9792C30.8448 36.8109 30.9675 36.6133 31.0484 36.3977C31.1294 36.182 31.167 35.9525 31.1593 35.7223C31.1516 35.4921 31.0986 35.2657 31.0033 35.056C30.9081 34.8462 30.7724 34.6573 30.6042 34.5L20.4792 25L30.6042 15.5C30.7724 15.3427 30.9081 15.1538 31.0033 14.944C31.0986 14.7343 31.1516 14.5079 31.1593 14.2777C31.167 14.0475 31.1294 13.818 31.0484 13.6023C30.9675 13.3867 30.8448 13.1891 30.6875 13.0208C30.5302 12.8526 30.3413 12.717 30.1316 12.6217C29.9218 12.5265 29.6954 12.4735 29.4652 12.4657C29.235 12.458 29.0055 12.4957 28.7898 12.5766C28.5742 12.6576 28.3766 12.7802 28.2083 12.9375L16.6667 23.6458C16.4881 23.8212 16.3492 24.0328 16.2593 24.2664C16.1695 24.5 16.1308 24.7502 16.1458 25ZM25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.96029 3.79521 10.8648 1.90302 15.4329C0.010832 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4843 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7868 38.8893C48.5338 34.778 50 29.9445 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0ZM25 3.52083C29.9518 3.52263 34.7506 5.23696 38.5827 8.37313C42.4147 11.5093 45.0442 15.8743 46.0252 20.7279C47.0063 25.5816 46.2785 30.6251 43.9652 35.0034C41.652 39.3817 37.8957 42.8252 33.3333 44.75C28.7441 46.7059 23.6167 47.0017 18.8329 45.5866C14.0492 44.1714 9.90796 41.1337 7.12141 36.9958C4.33486 32.8579 3.07711 27.8784 3.56444 22.9135C4.05178 17.9487 6.25374 13.3088 9.79168 9.79167C11.7875 7.80186 14.1563 6.22552 16.7625 5.15302C19.3687 4.08052 22.161 3.53293 24.9792 3.54167L25 3.52083Z"
                fill="#FF922B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_946">
                <rect width={50} height={50} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="max-w-[30px] md:max-w-[50px]"
            onClick={handleNext}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame" clipPath="url(#clip0_1_953)">
              <path
                id="Vector"
                d="M33.8542 25C33.855 25.2425 33.8055 25.4826 33.7086 25.7049C33.6118 25.9273 33.4698 26.1271 33.2917 26.2917L21.7917 37.0625C21.6234 37.2198 21.4258 37.3424 21.2102 37.4234C20.9945 37.5043 20.765 37.542 20.5348 37.5343C20.3046 37.5265 20.0782 37.4735 19.8684 37.3783C19.6587 37.283 19.4698 37.1474 19.3125 36.9792C19.1552 36.8109 19.0325 36.6133 18.9516 36.3977C18.8706 36.182 18.833 35.9525 18.8407 35.7223C18.8484 35.4921 18.9014 35.2657 18.9967 35.056C19.0919 34.8462 19.2276 34.6573 19.3958 34.5L29.5208 25L19.3958 15.5C19.2276 15.3427 19.0919 15.1538 18.9967 14.944C18.9014 14.7343 18.8484 14.5079 18.8407 14.2777C18.833 14.0475 18.8706 13.818 18.9516 13.6023C19.0325 13.3867 19.1552 13.1891 19.3125 13.0208C19.4698 12.8526 19.6587 12.717 19.8684 12.6217C20.0782 12.5265 20.3046 12.4735 20.5348 12.4657C20.765 12.458 20.9945 12.4957 21.2102 12.5766C21.4258 12.6576 21.6234 12.7802 21.7917 12.9375L33.3333 23.6458C33.5119 23.8212 33.6508 24.0328 33.7407 24.2664C33.8305 24.5 33.8692 24.7502 33.8542 25ZM25 0C29.9445 0 34.778 1.46622 38.8892 4.21326C43.0005 6.96029 46.2048 10.8648 48.097 15.4329C49.9892 20.0011 50.4843 25.0277 49.5196 29.8773C48.555 34.7268 46.174 39.1814 42.6777 42.6777C39.1813 46.174 34.7268 48.555 29.8772 49.5196C25.0277 50.4843 20.0011 49.9892 15.4329 48.097C10.8648 46.2048 6.96028 43.0005 4.21325 38.8893C1.46621 34.778 -1.19209e-05 29.9445 -1.19209e-05 25C-1.19209e-05 18.3696 2.63391 12.0107 7.32232 7.32233C12.0107 2.63392 18.3696 0 25 0ZM25 3.52083C20.0482 3.52263 15.2494 5.23696 11.4173 8.37313C7.58528 11.5093 4.9558 15.8743 3.97477 20.7279C2.99374 25.5816 3.72154 30.6251 6.03477 35.0034C8.348 39.3817 12.1043 42.8252 16.6667 44.75C21.2559 46.7059 26.3833 47.0017 31.1671 45.5866C35.9508 44.1714 40.092 41.1337 42.8786 36.9958C45.6651 32.8579 46.9229 27.8784 46.4356 22.9135C45.9482 17.9487 43.7463 13.3088 40.2083 9.79167C38.2125 7.80186 35.8437 6.22552 33.2375 5.15302C30.6313 4.08052 27.839 3.53293 25.0208 3.54167L25 3.52083Z"
                fill="#FF922B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_953">
                <rect
                  width={50}
                  height={50}
                  fill="white"
                  transform="matrix(-1 0 0 1 50 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </MainPage>
    </div>
  );
};

export const Aplicables = () => {
  const list = [
    {
      id: 1,
      name: "Finanzas",
    },
    {
      id: 2,
      name: "Educación",
    },
    {
      id: 3,
      name: "Dispositivos Inteligentes",
    },
    {
      id: 4,
      name: "Publicidad",
    },
    {
      id: 5,
      name: "Retail",
    },
    {
      id: 6,
      name: "Big Data",
    },
    {
      id: 8,
      name: "Salud",
    },
  ];
  return (
    <div className="bg-[#FFF5EE] pt-28 pb-[188px]">
      <MainPage>
        <Title title="Sectores Aplicables" className="mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[17px] gap-y-[84px]">
          {list.map((i, index) => {
            return (
              <div
                className="relative bg-white rounded-xl cursor-pointer home-card"
                key={index}
              >
                <SkeletonImage
                  src={`/card/${i.id}.png`}
                  alt="logo"
                  width={287}
                  height={216}
                  className="w-full home-card-img rounded-xl"
                />
                <div className="absolute bottom-0 w-full h-[50px] leading-[50px] z-10 home-card-title text-[18px] text-[#FFFFFF] px-8  bg-[rgba(255,146,43,0.78)] text-center backdrop-blur-[3px] rounded-b-xl">
                  {i.name}
                </div>
                <div className="absolute bottom-0 w-full h-[50px] leading-[50px] home-card-text flex items-center justify-center text-[18px] text-[#FF922B] font-bold">
                  {i.name}
                </div>
              </div>
            );
          })}
        </div>
      </MainPage>
    </div>
  );
};

export const Clients = () => {
  const list = [
    {
      id: 1,
      name: "SerpienteDigital CTO",
      title:
        "“¡Los servicios de planificación de inversiones de HORIZONTETECH SpA han sido realmente valiosos para nosotros! Analizaron profundamente nuestra situación financiera y nuestros objetivos a largo plazo, y diseñaron una estrategia de inversión sólida y bien estructurada. Los resultados han sido estables y nos han dado una enorme tranquilidad.”",
    },
    {
      id: 2,
      name: "SolareTech CEO",
      title:
        "“En temas de inversión y financiamiento corporativo, HORIZONTETECH SpA es un verdadero experto. El plan de financiamiento que desarrollaron para nosotros fue preciso, práctico y altamente efectivo, permitiéndonos completar con éxito la etapa de expansión. Su equipo entiende perfectamente los desafíos del crecimiento empresarial.”",
    },
    {
      id: 4,
      name: "MarNova Holdings",
      title:
        "“El servicio de asignación global de activos de HORIZONTETECH SpA ha mejorado significativamente nuestra gestión de capital. Su equipo de análisis es altamente experimentado y detecta con rapidez riesgos y oportunidades en distintos mercados. Desde que trabajamos con ellos, nuestros rendimientos han crecido de manera constante.”",
    },
  ];
  return (
    <div className="pt-[114px] pb-[165px]">
      <MainPage>
        <Title
          title="Opiniones de Nuestros Clientes"
          className="mb-10 md:mb-[121px]"
        />
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
          {list.map((i) => {
            return (
              <div
                key={i.id}
                className="border border-[#E5E5E5] p-[30px] rounded-2xl shadow-lg transition duration-700 hover:shadow-[#FF922B] hover:border-[#FF922B] cursor-pointer"
              >
                <div className="flex  mb-[18px]">
                  <SkeletonImage
                    src={`/user/${i.id}.png`}
                    alt="user"
                    width={58}
                    height={58}
                  />
                  <div className="pl-[18px] flex-1">
                    <div className="text-[16px] xl:text-[20px] font-bold text-[#000B33] mb-1 truncate">
                      {i.name}
                    </div>
                    <SkeletonImage
                      src="/star.png"
                      alt="user"
                      width={121}
                      height={20}
                    />
                  </div>
                </div>
                <div className="text-[14px] leading-[22px] text-[#8A879F]">
                  {i.title}
                </div>
              </div>
            );
          })}
        </div>
      </MainPage>
    </div>
  );
};

export const Title = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "scrollText text-[32px] md:text-[48px] font-bold leading-[58px] text-center ",
        className
      )}
    >
      {title}
    </div>
  );
};

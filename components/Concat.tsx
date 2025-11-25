import { cn } from "@/lib/utils";
import { MainPage } from "@/components/Page";
import SkeletonImage from "@/components/SkeletonImage";
import Link from "next/link";

export default function Contact({
  classname,
  subclass,
  title,
  sub,
  src,
}: {
  classname?: string;
  subclass?: string;
  title: string;
  sub: string;
  src: string;
}) {
  return (
    <div className="relative  cursor-pointer">
      <SkeletonImage
        src={src}
        alt="logo"
        width={1440}
        height={367}
        pclass="rounded-none"
        className="h-[367px] w-full object-right"
      ></SkeletonImage>
      <div className="absolute inset-0 z-10 w-full h-full flex justify-center  flex-col  text-white  ">
        <MainPage>
          <div
            className={cn(
              "w-full text-[22px] text-center leading-8 md:text-[48px] md:leading-[58px] text-white font-bold mb-7",
              classname
            )}
          >
            {title}
          </div>
          <div
            className={cn(
              "w-full text-[12px] text-center leading-5 md:text-[16px] md:leading-[26px] text-white mr-3 md:mr-[94px] mb-[19px]",
              subclass
            )}
          >
            {sub}
          </div>
          <Link
            href="/About"
            className="mx-auto concat-btn relative w-[200px] md:w-[231px] h-10 text-white flex items-center justify-center bg-[#FF922B] text-[12px] md:text-[16px] font-bold rounded-full"
          >
            Contáctanos
            <svg
              className="stars"
              viewBox="0 0 159 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_93_194)">
                <path
                  d="M25.5 5L26.9855 9.74441L31 11.5L26.9855 13.2556L25.5 18L24.0145 13.2556L20 11.5L24.0145 9.74441L25.5 5Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter1_d_93_194)">
                <path
                  d="M131.707 5.07812L133.192 9.82254L137.207 11.5781L133.192 13.3337L131.707 18.0781L130.221 13.3337L126.207 11.5781L130.221 9.82254L131.707 5.07812Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter2_d_93_194)">
                <path
                  d="M20.2069 49.0781L21.0172 51.2679L23.2069 52.0781L21.0172 52.8884L20.2069 55.0781L19.3966 52.8884L17.2069 52.0781L19.3966 51.2679L20.2069 49.0781Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter3_d_93_194)">
                <path
                  d="M135.207 49.0781L136.017 51.2679L138.207 52.0781L136.017 52.8884L135.207 55.0781L134.397 52.8884L132.207 52.0781L134.397 51.2679L135.207 49.0781Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter4_d_93_194)">
                <path
                  d="M150.314 27.6714L151.579 31.9319L155 33.5084L151.579 35.085L150.314 39.3455L149.048 35.085L145.628 33.5084L149.048 31.9319L150.314 27.6714Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter5_d_93_194)">
                <path
                  d="M8.68621 27.6714L9.95191 31.9319L13.3724 33.5084L9.95191 35.085L8.68621 39.3455L7.42051 35.085L4 33.5084L7.42051 31.9319L8.68621 27.6714Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_93_194"
                  x={16}
                  y={1}
                  width={19}
                  height={21}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_194"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_194"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_93_194"
                  x="122.207"
                  y="1.07812"
                  width={19}
                  height={21}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_194"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_194"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_93_194"
                  x="13.2069"
                  y="45.0781"
                  width={14}
                  height={14}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_194"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_194"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_93_194"
                  x="128.207"
                  y="45.0781"
                  width={14}
                  height={14}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_194"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_194"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_93_194"
                  x="141.628"
                  y="23.6714"
                  width="17.3724"
                  height="19.6741"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_194"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_194"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter5_d_93_194"
                  x={0}
                  y="23.6714"
                  width="17.3724"
                  height="19.6741"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_93_194"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_93_194"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
        </MainPage>
      </div>
    </div>
  );
}

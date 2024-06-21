import Slider, { Settings } from "react-slick";
import "./slider.css";
import Link from "next/link";
import Image from "next/image";

export const Responsive = ({ slide }: any) => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div>
    //   {/* @ts-ignore */}
    //   <Slider {...settings} className="custom-slider">
    //     {slide?.map((sl: any, index: any) => (
    //       <div
    //         className=" text-center border-2 border-blue p-3 hover:bg-navyblue rounded-3xl  transition group overflow-scroll"
    //         key={index}
    //       >
    //         <div className="flex flex-col gap-3 min-h-full">
    //         <h4 className="text-4xl sm:text-5xl font-extrabold group-hover:text-white group-hover:mb-10">
    //           {sl.heading}
    //         </h4>
    //         {/* <h2 className="text-5xl sm:text-65xl font-extrabold mb-3 group-hover:text-white">
    //           ${sl.price}*
    //         </h2> */}
    //         {/* <p className="group-hover:text-white text-2xl font-bold">{sl.user}</p> */}
    //         <Image src={sl.image} alt={sl.heading} className="w-full h-80 group-hover:hidden rounded-xl"/>
    //         <div className="hidden group-hover:flex flex-col gap-2 h-full">
    //           <div className="flex flex-col justify-between gap-5 ">
    //           {sl?.features?.map((feature: string, index: any) => (
    //             <h3
    //               key={index}
    //               className="text-sm font-medium text-darkgrey group-hover:text-offwhite"
    //             >
    //               {feature}
    //             </h3>
    //           ))}
    //           </div>
    //         </div>
    //         <div className="hidden group-hover:block mt-auto mb-6">
    //         <Link
    //           target="_blank"
    //           href={sl?.link}
    //           className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12"
    //         >
    //           Tanlov sizdan
    //         </Link>
    //         </div>
    //         </div>
            
    //       </div>
    //     ))}
    //   </Slider>
    // </div>


    <div>
      {/* @ts-ignore */}
      <Slider {...settings} className="custom-slider">
        {slide?.map((sl: any, index: any) => (
          <div
            className="text-center border-2 border-blue p-3 max-md:p-0 hover:bg-navyblue rounded-3xl  transition group overflow-scroll"
            key={index}
          >
            <div className="flex flex-col gap-3 min-h-full">
            <h4 className="max-sm:text-2xl text-4xl font-semibold group-hover:text-white max-sm:hidden">
              {sl.heading}
            </h4>
            <Image src={sl.image} alt={sl.heading} className="w-3/4 max-sm:w-full m-auto rounded-xl object-fill aspect-square max-sm:rounded-b-none"/>
            <h4 className="max-sm:text-2xl text-4xl font-semibold group-hover:text-white hidden max-sm:block">
              {sl.heading}
            </h4>
            {/* <h2 className="text-5xl sm:text-65xl font-extrabold mb-3 group-hover:text-white">
              ${sl.price}*
            </h2> */}
            {/* <p className="group-hover:text-white text-2xl font-bold">{sl.user}</p> */}
            <div className="flex flex-col gap-2 h-full">
              <div className="flex flex-col justify-between">
              {sl?.features?.map((feature: string, index: any) => (
                <h3
                  key={index}
                  className="text-sm font-medium text-darkgrey group-hover:text-offwhite"
                >
                  {feature}
                </h3>
              ))}
              </div>
            </div>
            <div className="block mt-auto mb-3 w-full">
            <Link
              target="_blank"
              href={sl?.link}
              className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-2 px-8"
            >
              Tanlov sizdan
            </Link>
            </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};






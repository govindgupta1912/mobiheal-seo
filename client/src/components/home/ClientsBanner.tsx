import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import slide1  from "../../assets/ic_air.png";
import slide2  from "../../assets/ic_chems.png";
import slide3  from "../../assets/ic_frux.png";
import slide4  from "../../assets/ic_invia.png";
import slide5  from "../../assets/ic_iti.png";
import slide6  from "../../assets/ic_navitus.png";
import slide7  from "../../assets/ic_sakham.png";
import slide8 from "../../assets/ic_adriod.png";
import slide9 from "../../assets/ic_sapours.png";
import slide10 from "../../assets/ic_tabschool.png";
import slide11 from "../../assets/ic_tcil.png"
import slide12 from "../../assets/ic_teceze.png";
import slide13 from "../../assets/ic_wesee.png";
import slide14 from "../../assets/mrotek.png";
import slide15 from "../../assets/ncat.png"
import Autoplay from "embla-carousel-autoplay";

const ClientsBanner = () => {
  

  const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15
]

  
// return (
  //   <section className="py-8 bg-neutral-50 border-y border-neutral-100">
  //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //       <p className="text-center text-neutral-500 mb-6 text-sm font-medium">
  //         TRUSTED BY LEADING COMPANIES
  //       </p>
  //       {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
  //         {clients.map((client) => (
  //           <div
  //             key={client.id}
  //             className="h-8 md:h-10 flex items-center justify-center"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               width="120"
  //               height="40"
  //               viewBox="0 0 120 40"
  //               fill="none"
  //               className="text-neutral-400"
  //             >
  //               <rect
  //                 width="120"
  //                 height="40"
  //                 rx="4"
  //                 fill="currentColor"
  //                 fillOpacity="0.2"
  //               />
  //               <text
  //                 x="60"
  //                 y="24"
  //                 fontFamily="Arial"
  //                 fontSize="12"
  //                 fill="currentColor"
  //                 textAnchor="middle"
  //               >
  //                 {client.name}
  //               </text>
  //             </svg>
  //           </div>
  //         ))}
  //       </div> */}
  //         <div className="max-w-4xl mx-auto p-8">
  //     <Carousel
  //     opts={{
  //       loop: true,
  //       align: "start",
  //       slidesToScroll: 1,
  //     }}
  //      plugins={[
  //             Autoplay({
  //               delay: 2000, 
  //               stopOnInteraction: false, 
  //             }),
  //           ]}
  //     className="w-full max-w-5xl mx-auto"
  //   >
      
  //     <CarouselContent>
  //       {images.map((src, index) => (
  //         <CarouselItem key={index}  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
  //           <img
  //             src={src}
  //             alt={`Image ${index + 1}`}
  //             className="w-full h-48 object-cover rounded"
  //           />
  //         </CarouselItem>
  //       ))}
  //     </CarouselContent>
  //     <CarouselPrevious />
  //     <CarouselNext />
  //   </Carousel>
  //   </div>
  //     </div>

     
  //   </section>
  // );
 return (
    <section className="py-8 bg-neutral-50 border-y border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-neutral-500 mb-6 text-sm font-medium">
          TRUSTED BY LEADING COMPANIES
        </p>

        <div>
          <Carousel
            opts={{
              loop: true,
              align: "start",
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 2000, // <-- slide every 2 seconds
                stopOnInteraction: false, // keep sliding even on hover/click
              }),
            ]}
            className="w-full  "
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                >
                  <img
                    src={src}
                    alt={`Client ${index + 1}`}
                    className="w-full h-28 object-contain p-4 opacity-70"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* No Previous/Next buttons */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsBanner;




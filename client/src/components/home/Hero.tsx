// import { Button } from "@/components/ui/button";

// const Hero = () => {
//   return (
//     // <section className="bg-gradient text-white py-16 md:py-24">
//     //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="flex flex-col md:flex-row items-center justify-between">
//     //       <div className="md:w-1/2 mb-8 md:mb-0">
//     //         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//     //           Enterprise Mobile Device Management for Modern Businesses
//     //         </h1>
//     //         <p className="text-lg md:text-xl mb-8 text-blue-100">
//     //           Secure, manage, and monitor your corporate devices with our comprehensive MDM solution. Protect your data while enhancing productivity.
//     //         </p>
//     //         <div className="flex flex-wrap gap-4">
//     //           <Button size="lg" className="bg-white text-primary hover:bg-neutral-100">
//     //             Get Started
//     //           </Button>
//     //           <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
//     //             Watch Demo
//     //           </Button>
//     //         </div>
//     //       </div>
//     //       <div className="md:w-1/2">
//     //         <div 
//     //           className="rounded-lg shadow-2xl overflow-hidden"
//     //           style={{
//     //             height: "500px",
//     //             backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80')",
//     //             backgroundSize: "cover",
//     //             backgroundPosition: "center"
//     //           }}
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//     <section className="relative overflow-hidden text-white py-16 md:py-24">
//   {/* Animated Background */}
//   <div
//     className="absolute inset-0 z-0 animate-gradient-x"
//     style={{
//       background: "linear-gradient(270deg, #0f172a, #1e3a8a, #0f766e)",
//       backgroundSize: "600% 600%",
//     }}
//   />

//   {/* Overlay for readability */}
//   <div className="absolute inset-0 bg-black/40 z-10" />

//   {/* Hero Content */}
//   <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex flex-col md:flex-row items-center justify-between">
//       <div className="md:w-1/2 mb-8 md:mb-0">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//           Enterprise Mobile Device Management for Modern Businesses
//         </h1>
//         <p className="text-lg md:text-xl mb-8 text-blue-100">
//           Secure, manage, and monitor your corporate devices with our comprehensive MDM solution. Protect your data while enhancing productivity.
//         </p>
//         <div className="flex flex-wrap gap-4">
//           <Button size="lg" className="bg-white text-primary hover:bg-neutral-100">
//             Get Started
//           </Button>
//           <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
//             Watch Demo
//           </Button>
//         </div>
//       </div>
//       <div className="md:w-1/2">
//         <div
//           className="rounded-lg shadow-2xl overflow-hidden"
//           style={{
//             height: "500px",
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=500&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </div>
//     </div>
//   </div>
// </section>

//   );
// };

// export default Hero;


import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/Animation .json"; // Your downloaded Lottie JSON

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white py-16 md:py-24 bg-gradient">
      {/* Optional dark overlay for contrast */}
      {/* <div className="absolute inset-0 bg-black/30 z-0" /> */}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Enterprise Mobile Device Management for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Secure, manage, and monitor your corporate devices with our comprehensive MDM solution. Protect your data while enhancing productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-neutral-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="md:w-1/2 flex justify-center items-center">
            <Lottie animationData={heroAnimation} loop={true} className="w-full max-w-md md:max-w-lg h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

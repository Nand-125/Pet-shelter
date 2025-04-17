import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from "./ServiceCard";
import Image from "next/image";


const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const AboutUs = () => {
  return (
    <div className="p-4 flex gap-x-10 mt-70 ml-70">
      <Image
        
        src="https://images.pexels.com/photos/9428285/pexels-photo-9428285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // or external URL
        alt="Adoption Service"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
      <div>
      <p className="text-orange-500">| About Us </p>
      <div className="w-[300px] font-extrabold text-black text-5xl leading-15 mt-3">
      <h1 className={bebas.className}>Best Service to Adopt your New Pet </h1>
      </div>
      <p className=" font-light w-[300px] text-justify">We are a dedicated organization committed to building families and transforming lives through compassionate and ethical adoption services. Our mission is to ensure that every child has the opportunity to grow up in a safe, nurturing, and loving home. We support adoptive parents, birth families, and children with personalized care throughout every step of the adoption journey. From initial counseling and education to legal assistance and post-adoption support, we walk alongside our families to ensure a smooth and meaningful experience. Guided by empathy and a deep respect for every individual’s story, we strive to create lifelong connections and provide hope for a brighter future—for every child and every family we serve.</p>
      </div>

    </div>
   );
};





export default AboutUs;

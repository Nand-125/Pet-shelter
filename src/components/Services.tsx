
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from "./ServiceCard";


const Services = () => {
  return (
   
    <div className="flex gap-x-10">
        <ServiceCard/>
        <ServiceCard/>
    </div>

      
  );
};

export default Services;

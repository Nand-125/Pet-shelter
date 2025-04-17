
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from "./ServiceCard";
import PetProfileCard from "./PetProfileCard";
import Image from "next/image";
import AdoptionCard from "./AdoptionCard";

const PetProfile = () => {
  return (

   <div className="flex  flex-wrap gap-x-10  gap-y-5 mt-30 ml-20"> 
    
    <AdoptionCard/>
   <PetProfileCard/>
   <PetProfileCard/>
   <PetProfileCard/>
   <PetProfileCard/>
   <PetProfileCard/>
   <PetProfileCard/>
   <PetProfileCard/>


</div>

      
      

      
  );
};

export default PetProfile;

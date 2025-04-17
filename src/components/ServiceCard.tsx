import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = () => {
  return (
    
    <Card className="w-[300px] flex justify-center items-center p-5 transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      
        <FontAwesomeIcon icon={faPaw} size="2x" />
      
        <h1 className="font-extrabold text-black">Adoption Services</h1>
        <p className="font-extralight text-center text-sm">Adoption services help match children with adoptive families through support and guidance.</p>
   
        <Link href="/">
        <span className="text-sm font-extralight text-orange-500">Learn More <FontAwesomeIcon icon={faArrowRight}  /></span>
      </Link>
    
    </Card>

  );
};

export default ServiceCard;

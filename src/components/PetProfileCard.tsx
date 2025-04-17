import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { Bebas_Neue } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faArrowRight,
  faBirthdayCake,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const PetProfileCard = () => {
  const router = useRouter();
  return (
    <Card className="w-[350px] flex flex-col items-start transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 mb-1">
      <Image
        src="https://images.pexels.com/photos/11109404/pexels-photo-11109404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Adoption Service"
        width={350}
        height={200}
        className="rounded-lg w-full h-[200px] object-cover p-2"
      />

      <div className="px-4 w-full">
        <h1 className="font-extrabold text-black text-xl">Dexter</h1>
        <p className="text-sm text-gray-500 mt-[-2px]">Golden Retriever</p>

        <hr className="border-t border-gray-300 my-2" />

        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-500" />
            <span>Age: 2 Weeks</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faVenusMars} className="text-gray-500" />
            <span>Gender: Male</span>
          </div>
        </div>

        <div className="mt-4">
            <span onClick={() => {
              router.push("/dashboard/1")
            }}className="pointer text-sm font-extralight text-green-500 hover:underline">
              Adopt Now <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </div>
      </div>
    </Card>
  );
};

export default PetProfileCard;

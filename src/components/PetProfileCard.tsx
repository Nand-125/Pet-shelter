import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faArrowRight,
  faBirthdayCake,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface IPetProfileCardProps {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: string;
  species: string;
  color: string;
  arrivalDate: string;
  PhotoURLs: string;
}

const PetProfileCard = ({
  id,
  name,
  breed,
  age,
  gender,
  species,
  color,
  arrivalDate,
  PhotoURLs
}: IPetProfileCardProps) => {
  const router = useRouter();
   
  return (
    <Card className="w-[350px] flex flex-col items-start transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 mb-1">
      <Image
        src={PhotoURLs}
        alt="Adoption Service"
        width={350}
        height={200}
        className="rounded-lg w-full h-[200px] object-cover p-2"
      />

      <div className="px-4 w-full">
        <h1 className="font-extrabold text-black text-xl">{name}</h1>
        <p className="text-sm text-gray-500 mt-[-2px]">{breed}</p>

        <hr className="border-t border-gray-300 my-2" />

        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-500" />
            <span>Age: {age}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faVenusMars} className="text-gray-500" />
            <span>Gender: {gender}</span>
          </div>
        </div>

        <div className="mt-4">
          <span
            onClick={() => {
              router.push(`/dashboard/${id}`);
            }}
            className="cursor-pointer text-sm font-extralight text-green-500 hover:underline"
          >
            Adopt Now <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PetProfileCard;

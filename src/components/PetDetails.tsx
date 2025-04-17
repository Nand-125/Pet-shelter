import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faArrowRight,
  faBirthdayCake,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";

interface PetDetailsProps {
    age: string;
    gender: string;
    arrivalDate: string;
    color: string;
    weight: number;
    specialNeeds: string;
    species: string;
    size: string;
    temperament: string;
    lifeExpectancy: string;
    grooming: string;
    activity: string;
    goodWithChildren: string;
    goodWithOtherPets: string;
    PhotoURLs: string;

  }

const PetDetails = ({
  age, gender, arrivalDate, color, weight, specialNeeds,
  species, size, temperament, lifeExpectancy, grooming,
  activity, goodWithChildren, goodWithOtherPets, PhotoURLs
}: PetDetailsProps) => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-4 text-sm text-gray-700">
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-500" />
          <span>Age: {age}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faVenusMars} className="text-gray-500" />
          <span>Gender: {gender}</span>
        </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Arrival Date: </h2>
            <p className="text-justify">{arrivalDate}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Special Needs:</h2>
            <p className="text-justify">{specialNeeds}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Colour:</h2>
            <p className="text-justify">{color}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Weight:</h2>
            <p className="text-justify">{weight}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Size:</h2>
            <p className="text-justify">{size}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold"> Temperament :</h2>
            <p className="text-justify"> {temperament}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold"> LifeExpectancy:</h2>
            <p className="text-justify">{lifeExpectancy}</p>

          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">GroomingNeeds:</h2>
            <p className="text-justify">{grooming}</p>
            
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Activity Level:</h2>
            <p className="text-justify">{activity}</p>
            
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Good With Children:</h2>
            <p className="text-justify">{goodWithChildren}</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Good With Other Pets:</h2>
            <p className="text-justify">{goodWithOtherPets}</p>
          </div>
      </div>
    </>
  );
};

export default PetDetails;

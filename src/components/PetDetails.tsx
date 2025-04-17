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
  }

const PetDetails = ({
  age, gender, arrivalDate, color, weight, specialNeeds,
  species, size, temperament, lifeExpectancy, grooming,
  activity, goodWithChildren, goodWithOtherPets
}: PetDetailsProps) => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-4 text-sm text-gray-700">
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-500" />
          <span>Age: 2 Weeks</span>
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faVenusMars} className="text-gray-500" />
          <span>Gender: Male</span>
        </div>
        <h2 className="font-extrabold">About Dexter : </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
          et suscipit ipsam fugiat amet, at quos ea asperiores eum eligendi
          laboriosam doloribus veritatis itaque eveniet atque, quibusdam aut
          quis pariatur corporis dolor temporibus perferendis. Consequatur
          consequuntur repellendus dolores quas distinctio iusto deserunt vitae,
          quibusdam aliquid inventore maiores voluptates sapiente?
        </p>
          <div className="flex space-x-2">
            <h2 className="font-bold">Arrival Date: </h2>
            <p className="text-justify">12/04/2025</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Special Needs:</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, numquam!</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Colour:</h2>
            <p className="text-justify">Golden</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Weight:</h2>
            <p className="text-justify">3kg</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Size:</h2>
            <p className="text-justify">Small</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold"> Temperament :</h2>
            <p className="text-justify"> Very Low</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold"> LifeExpectancy:</h2>
            <p className="text-justify">12 years</p>

          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">GroomingNeeds:</h2>
            <p className="text-justify">High</p>
            
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Activity Level:</h2>
            <p className="text-justify">High</p>
            
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Good With Children:</h2>
            <p className="text-justify">Yes</p>
          </div>
          <div className="flex space-x-2">
            <h2 className="font-bold">Good With Other Pets:</h2>
            <p className="text-justify">Yes</p>
          </div>
      </div>
    </>
  );
};

export default PetDetails;

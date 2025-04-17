import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";

const AdoptionCard = () => {
  return (
    <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your image
        alt="Adoptable pet"
        width={350}
        height={200}
        className="w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-1 flex flex-col justify-between p-5 text-white">
        <div>
          <p className="text-orange-400 font-semibold border-l-2 border-orange-500 pl-2 text-sm mb-2">Adoption</p>
          <h2 className="text-2xl font-bold leading-tight">Available for<br />Adoption</h2>
        </div>
        <div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Link href="/dashboard/pets">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
            See More <FontAwesomeIcon icon={faPaw} />
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default AdoptionCard;

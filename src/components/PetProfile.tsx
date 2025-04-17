import { useEffect, useState } from "react";
import AdoptionCard from "./AdoptionCard";
import PetProfileCard from "./PetProfileCard";

interface PetData {
  ActivityLevel: string;
  AdoptionStatus: string;
  Age: string;
  ArrivalDate: string;
  Breed: string;
  CategoryID: number;
  Color: string;
  Gender: string;
  GoodWithChildren: number;
  GoodWithOtherPets: number;
  GroomingNeeds: string;
  LifeExpectancyMax: number;
  LifeExpectancyMin: number;
  PetID: number;
  Pet_name: string;
  ShelterID: number;
  SizeCategory: string;
  SpecialNeeds: string;
  Species: string;
  Temperament: string;
  Weight: string;
}

const PetProfile = () => {
  const [pets, setPets] = useState<PetData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("/api/pets");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <div>Loading pets...</div>;

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-5 mt-30 ml-20">
      <AdoptionCard />
      {pets.map((pet) => (
        <PetProfileCard
          key={pet.PetID}
          id={pet.PetID}
          name={pet.Pet_name}
          breed={pet.Breed}
          age={pet.Age}
          gender={pet.Gender}
          species={pet.Species}
          color={pet.Color}
          arrivalDate={pet.ArrivalDate}
        />
      ))}
    </div>
  );
};

export default PetProfile;

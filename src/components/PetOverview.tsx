"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import PetCover from "@/components/PetCover";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  faPaw,
  faArrowRight,
  faBirthdayCake,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import PetDetails from "./PetDetails";
import PetHealthRecords from "./PetHealthRecords";
import { Button } from "./ui/button";
import ApplicationFormDialog from "./ApplicationFormDialog";

const PetOverview = () => {
  const params = useParams();
  const [pet, setPet] = useState<PetDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`/api/pets/${params.id}`);
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error("Error fetching pet:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchPet();
  }, [params.id]);

  if (loading) return <div>Loading pet details...</div>;
  if (!pet) return <div>Pet not found</div>;

  return (
    <section className="flex flex gap-12 sm:gap-32 xl:flex-row xl:gap-8 mt-20">
      <div className="px-4 flex-1">
        <h1 className="font-extrabold text-black text-xl">{pet.Pet_name}</h1>
        <p className="text-sm text-gray-500 mt-[-2px]">{pet.Breed}</p>

        <hr className="border-t border-gray-300 my-2" />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Details">Details</TabsTrigger>
            <TabsTrigger value="Health Records">Health Records</TabsTrigger>
          </TabsList>
          <TabsContent value="Details">
            <PetDetails
              age={pet.Age}
              gender={pet.Gender}
              arrivalDate={pet.ArrivalDate}
              color={pet.Color}
              weight={pet.Weight}
              specialNeeds={pet.SpecialNeeds}
              species={pet.Species}
              size={pet.SizeCategory}
              temperament={pet.Temperament}
              lifeExpectancy={`${pet.LifeExpectancyMin}-${pet.LifeExpectancyMax} years`}
              grooming={pet.GroomingNeeds}
              activity={pet.ActivityLevel}
              goodWithChildren={pet.GoodWithChildren ? "Yes" : "No"}
              goodWithOtherPets={pet.GoodWithOtherPets ? "Yes" : "No"}
              PhotoURLs={pet.PhotoURLs}
            />
          </TabsContent>
          <TabsContent value="Health Records">
            <PetHealthRecords
              vaccinations={pet.Vaccinations}
              medicalHistory={pet.MedicalHistory}
              lastCheckUp={pet.LastCheckup}
            />
          </TabsContent>
        </Tabs>

        <ApplicationFormDialog petId={pet.PetID} />
      </div>

      <Image
        src={pet.PhotoURLs}
        alt="Adoption Service"
        width={350}
        height={200}
        className="flex-1"
      />
    </section>
  );
};

export default PetOverview;

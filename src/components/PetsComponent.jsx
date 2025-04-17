"use client";

import React from "react";
import { useEffect, useState } from 'react';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
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

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PetProfileCard from "./PetProfileCard";




const PetsComponent = () => {

  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);


  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/pets');
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  if (loading) return <div>Loading pets...</div>;

  return (
    <section className="flex flex gap-12 sm:gap-32 xl:flex-row xl:gap-8 mt-20">
      <div className="px-4 flex-1">
        <h1 className="font-extrabold text-black text-3xl mb-10 text-orange-500">
          Pick Your New Pet
        </h1>
        <h1 className="font-extrabold text-black text-xl">
          🐾 Pets are more than just animals — they’re part of the family.
        </h1>
        <p className="text-sm text-gray-500 mt-[-2px]">Admin</p>

        <hr className="border-t border-gray-300 my-2" />

        <div className="w-[100px] text-justify whitespace-pre-line text-gray-800 leading-relaxed tracking-wide">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Pet Category</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Choose Your Pets</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
               Dogs
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                
              >
               Cats
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
               Other
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex  flex-wrap gap-x-10  gap-y-5 mt-30 ml-20">s
        {pets.map(pet => (
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
          PhotoURLs={pet.PhotoURLs}
        />
      ))}
        </div>
      </div>
    </section>
  );
};

export default PetsComponent;

"use client";

import React from "react";
// import PetCover from "@/components/PetCover";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Dialog,
    DialogTrigger,
  } from "@/components/ui/dialog";
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

interface Props extends Pet {
  userId: string;
}
const PetOverview = ({
  title,
  species,
  gender,
  breed,
  age,
  size,
  description,
  coverColor,
  coverUrl,
}: Props) => {
  return (
    <section className="flex flex gap-12 sm:gap-32 xl:flex-row xl:gap-8 mt-20">
      <div className="px-4 flex-1">
        <h1 className="font-extrabold text-black text-xl">Dexter</h1>
        <p className="text-sm text-gray-500 mt-[-2px]">Golden Retriever</p>

        <hr className="border-t border-gray-300 my-2" />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Details">Details</TabsTrigger>
            <TabsTrigger value="Health Records">Health Records</TabsTrigger>
          </TabsList>
          <TabsContent value="Details">
            <PetDetails />
          </TabsContent>
          <TabsContent value="Health Records">
            <PetHealthRecords />
          </TabsContent>
        </Tabs>

        <ApplicationFormDialog />
      </div>

      <Image
        src="https://images.pexels.com/photos/11109404/pexels-photo-11109404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Adoption Service"
        width={350}
        height={200}
        className="flex-1"
      />
    </section>
  );
};

export default PetOverview;

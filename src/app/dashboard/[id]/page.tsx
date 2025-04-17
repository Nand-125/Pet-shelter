import Header from "@/components/Header";
import PetOverview from "@/components/PetOverview";

const someData = [
    {
      id: "1",
      title: "Buddy",
      name: "Buddy",
      species: "Dog",
      breed: "Golden Retriever",
      age: 3.5,
      gender: "Male",
      size: "Large",
      isNeutered: true,
      isVaccinated: true,
      goodWithKids: true,
      goodWithOtherPets: true,
      description:
        "Buddy is a friendly and loyal dog who loves to play fetch and is great with kids. He's looking for a loving family.",
      coverColor: "#F9C74F",
      coverUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      title: "Luna",
      name: "Luna",
      species: "Cat",
      breed: "Siamese",
      age: 2,
      gender: "Female",
      size: "Medium",
      isNeutered: true,
      isVaccinated: true,
      goodWithKids: true,
      goodWithOtherPets: false,
      description:
        "Luna is a beautiful Siamese cat who enjoys quiet environments and soft cuddles. Perfect for an apartment home.",
      coverColor: "#90BE6D",
      coverUrl: "https://placekitten.com/400/600",
    },
    {
      id: "3",
      title: "Coco",
      name: "Coco",
      species: "Rabbit",
      breed: "Mini Lop",
      age: 1.2,
      gender: "Male",
      size: "Small",
      isNeutered: false,
      isVaccinated: false,
      goodWithKids: true,
      goodWithOtherPets: true,
      description:
        "Coco is a sweet and gentle bunny who loves munching on carrots and hopping around the garden.",
      coverColor: "#577590",
      coverUrl: "https://placehold.co/400x600.png?text=Coco",
    },
  ];

const Page = () => {

    return(
        <>
        <Header />
            <PetOverview {...someData[0]} userId="1"/>
        </>
    )
}


export default Page;
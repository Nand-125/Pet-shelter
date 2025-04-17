interface Pet {
    id: string;
    title: string;
    name: string;
    species: string;
    breed: string;
    age: number; // Age in years (can be fractional if needed)
    gender: string;
    size: string;
    isNeutered: boolean;
    isVaccinated: boolean;
    goodWithKids: boolean;
    goodWithOtherPets: boolean;
    description: string;
    coverColor: string;
    coverUrl: string;
  }

  interface PetData {
    ActivityLevel: string;
    AdoptionStatus: string;
    Age: string;
    ArrivalDate: string; // You can change this to Date if you're working with JavaScript Date objects
    Breed: string;
    CategoryID: number;
    Color: string;
    Gender: string;
    GoodWithChildren: number; // assuming this is a flag (1 or 0)
    GoodWithOtherPets: number; // assuming this is a flag (1 or 0)
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
    Weight: string; // Or you could use a number if it's always going to be a number
  }
  


  type ApplicationStatus = "Pending" | "Approved" | "Rejected";


  type MeetupStatus = "Scheduled" | "Cancelled" | "Completed";

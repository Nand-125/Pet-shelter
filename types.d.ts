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



  type ApplicationStatus = "Pending" | "Approved" | "Rejected";


  type MeetupStatus = "Scheduled" | "Cancelled" | "Completed";

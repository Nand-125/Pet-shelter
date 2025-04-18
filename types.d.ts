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

  interface PetDetails {
      PetID: number;
      Pet_name: string;
      Breed: string;
      Age: string;
      Gender: string;
      ArrivalDate: string;
      Color: string;
      Weight: number;
      SpecialNeeds: string;
      Species: string;
      SizeCategory: string;
      Temperament: string;
      LifeExpectancyMin: number;
      LifeExpectancyMax: number;
      GroomingNeeds: string;
      ActivityLevel: string;
      GoodWithChildren: boolean;
      GoodWithOtherPets: boolean;
      Vaccinations: string;
      MedicalHistory: string;
      LastCheckup: string;
      PhotoURLs: string;
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
    PhotoURLs: string;
  }
  
  interface AdHistory{

  Pet_name: string;
  App_Status: 'Pending' | 'Approved' | 'Rejected' | 'Withdrawn';
  meetUp_Status: 'Scheduled' | 'Completed' | 'Cancelled' | null;
  MeetupDate: string | null; // ISO date string
  MeetupLocation: string | null;
  }


  interface PetAdoptionApplicationStatus {
    applicationId: number;
    petName: string;
    petPhoto: string;
    status: string;
    ApplicationDate: string;
    meetupDate: string | null;
    meetupLocation: string | null;
    meetupStatus: string | null;
  }



  type ApplicationStatus = "Pending" | "Approved" | "Rejected";


  type MeetupStatus = "Scheduled" | "Cancelled" | "Completed";

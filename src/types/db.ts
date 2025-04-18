

import { FieldPacket } from 'mysql2';

export interface Adopter {
  AdopterID: number;
  FirstName: string;
  LastName: string;
  Email: string;
  PasswordHash: string;
  Phone: string;
  Address: string;
  RegistrationDate: Date;
  EncryptedSSN: Buffer;
  IV: Buffer;
  EncryptionKeyVersion: number;
}


export interface QueryResult<T = any> {
  results: T[];
  fields?: FieldPacket[];
}

export interface ApplicationHistory {
  applicationId: number;
  petName: string;
  petPhoto: string;
  status: "Pending" | "Approved" | "Rejected" | "Withdrawn";
  applicationDate: string;
  meetupDate?: string;
  meetupLocation?: string;
  meetupStatus?: "Scheduled" | "Completed" | "Cancelled";
}

export interface AdoptionHistory {
  petId: number;
  petName: string;
  adoptionDate: string;
  shelterName: string;
  breed: string;
  age: string;
}
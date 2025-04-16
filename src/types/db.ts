

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
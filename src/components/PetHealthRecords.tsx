
interface PetHealthRecordsProps {
    vaccinations: string;
    medicalHistory: string;
    lastCheckUp: string;
}


const PetHealthRecords = ({vaccinations, medicalHistory, lastCheckUp}: PetHealthRecordsProps) => {
  return (
    <div className="flex flex-col justify-center space-y-4 ">
     
      <div className="flex space-x-2">
        <h2 className="font-bold">Vaccinations: </h2>
        <p className="text-justify">{vaccinations}</p>
      </div>
      <div className="flex space-x-2">
        <h2 className="font-bold">Medical History :</h2>
        <p className="text-justify">
          {medicalHistory}
        </p>
      </div>
      <div className="flex space-x-2">
        <h2 className="font-bold">Last Check Up :</h2>
        <p className="text-justify">{lastCheckUp}</p>
      </div>
    </div>
  );
};

export default PetHealthRecords;

const PetHealthRecords = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 ">
     
      <div className="flex space-x-2">
        <h2 className="font-bold">Vaccinations: </h2>
        <p className="text-justify">DHPP/DAPP, Rabies, Bordetella</p>
      </div>
      <div className="flex space-x-2">
        <h2 className="font-bold">Medical History :</h2>
        <p className="text-justify">
          None
        </p>
      </div>
      <div className="flex space-x-2">
        <h2 className="font-bold">Last Check Up :</h2>
        <p className="text-justify">12/05/2024</p>
      </div>
    </div>
  );
};

export default PetHealthRecords;

import { useState } from "react";
import "./App.css";
import Passport from "./components/Passport";
import { debugData } from "./utils/debugData";
import { IPassportData } from "./types";
import { useNuiEvent } from "./hooks/useNuiEvent";

debugData<boolean | IPassportData>([
  { action: "passport:setVisible", data: true },
  {
    action: "rp_passport:setPassportData",
    data: {
<<<<<<< HEAD
      citizenid: "C12324",
      firstname: "Florisvaldo",
      lastname: "Shaolin",
=======
      citizenid: "C1231",
      firstname: "Kauan",
      lastname: "Felipe",
>>>>>>> c5c56342124dc834458faa4fd8d2da16b9f73edd
      birthdate: 631159200000,
      nationality: "Brasileiro",
      gender: 0,
      city: "Ribeirão Pires",
      color: "red",
    },
  },
]);

function App() {
  const [passportData, setPassportData] = useState<IPassportData>();

  useNuiEvent("rp_passport:setPassportData", (data?: IPassportData) => {
    setPassportData(data);
  });

  return <>{passportData && <Passport data={passportData} />}</>;
}

export default App;

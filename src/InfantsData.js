import { useState  } from "react";
import { dataInfants } from "./dataInfants";
import Infants from "./Infants";
function InfantsData() {
    const [infants, setInfants]= useState(dataInfants);

  return (
    <div >
        <Infants infantsClothes={infants}/>
    </div>
  );
}

export default InfantsData;

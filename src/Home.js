import { useState } from "react";
import { data } from "./data";
import ButtonsHolliday from './ButtonsHolliday';
import HollidayCollection from './HolidayCollection';


function App() {

  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) =>{
    const newClothes =data.filter(element=> element.searchTerm === searchTerm);
    setClothes(newClothes);
  }
  return (
    <div >
      <div>
      <h1 className='title'>Kids' Kingdom</h1>
      </div>
      <div>
        <ButtonsHolliday filteredClothes = {chosenClothes}/>
      </div>
      <HollidayCollection holidayClothes={clothes}/>
    </div>
  );
}

export default App;

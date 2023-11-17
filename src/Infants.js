import { useState} from'react';
import { dataInfants } from './dataInfants';
import InfantsButtons, { infantsButtons } from'./InfantsButtons';
function Infants({ infantsClothes }){

    const [infants, setInfants]= useState(dataInfants);

    return(<div className="container">
        {infantsClothes.map(( element =>{
        const{id, name, image, price} = element;

         const chosenInfants = (searchTerm) =>{
    const newInfants =dataInfants.filter(element=> element.searchTerm === searchTerm);
    setInfants(newInfants);
  }


        return(
        <div>
            <div>
                <InfantsButtons filteredInfant={chosenInfants}/>
            </div>
            <div className="items" key={id}>
                <img src={image} width="300px" alt="clothes" />
                <p>{name}</p>
                <p>{price}</p>
            </div>
            </div>
        )
     }))}
    </div>
    )
}
export default Infants ;
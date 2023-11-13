
function Infants({ infantsClothes }){

    return(<div className="container">
        {infantsClothes.map(( element =>{
        const{id, name, image, price} = element;
        return(
            <div className="items" key={id}>
                <img src={image} width="300px" alt="clothes" />
                <p>{name}</p>
                <p>{price}</p>
            </div>
        )
     }))}

    </div>
    )


}
export default Infants ;
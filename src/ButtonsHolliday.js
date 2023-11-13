function ButtonsHolliday({ filteredClothes }){
    return(
        <div className="header">
            <button onClick={()=> filteredClothes("shirt")}>Shirts</button>
            <button onClick={()=> filteredClothes("dress")}>Dresses</button>
            <button onClick={()=> filteredClothes("pajama")}>Pajamas</button>
        </div>
    )
}
export default ButtonsHolliday;
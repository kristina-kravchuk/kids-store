
function InfantsButtons ({ filteredInfant }){
    return(
        <div>
            <button onClick={()=> filteredInfant("BoyRomper") }>Boys Rompers</button>
            <button onClick={()=> filteredInfant("GirlRomper") }>Girls Rompers</button>
        </div>
    )
}
export default InfantsButtons ;
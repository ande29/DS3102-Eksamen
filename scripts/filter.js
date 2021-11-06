const selectFilter = document.querySelector("#filter-select")
const searchInput = document.querySelector("#search-value")
const contentOutput = document.querySelector(".content-output")

const selectOptions = (theme) => {
    let htmlTxt;
    
    switch(theme){
        case "premier-league":
            htmlTxt = `
                <option>Navn</option>
                <option>By</option>
                <option>Antall titler</option>
            `;
            selectFilter.innerHTML = htmlTxt;
            break;

            case "norwegian-athletes":
                htmlTxt = `
                    <option>Navn</option>
                    <option>Alder</option>
            `;
            selectFilter.innerHTML = htmlTxt;
            break;
    }
}

const search = () => {
    let searchValue = searchInput.value;

    console.log(searchValue)
}

export default selectOptions
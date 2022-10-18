let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAppednResult(result) {
    let divEl = document.createElement("div");
    divEl.classList.add("result-item");
    searchResultsEl.appendChild(divEl);
    let {
        title,
        link,
        description
    } = result;
    let titleAnhorEl = document.createElement("a");
    titleAnhorEl.href = link;
    titleAnhorEl.target = "_blank";
    titleAnhorEl.textContent = title;
    titleAnhorEl.classList.add("result-title");
    divEl.appendChild(titleAnhorEl);
    let brEl = document.createElement("br");
    divEl.appendChild(brEl);
    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.textContent = link;
    linkEl.classList.add("result-url");
    divEl.appendChild(linkEl);
    let brEleme = document.createElement("br");
    divEl.appendChild(brEleme);
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("link-description");
    divEl.appendChild(descriptionEl);
}
function displayresult(search_results) {
    spinnerEl.classList.add("d-none");
    for (let result of search_results) {
        createAppednResult(result);
    }
}
function searchWikiPedia(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let userinput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + userinput;
        let option = {
            method: "GET"
        };
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayresult(search_results);
            });
    }
}
searchInputEl.addEventListener("keydown", searchWikiPedia)
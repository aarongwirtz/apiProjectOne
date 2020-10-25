let countryData ;
let countryList = document.getElementById('countries');
let countryTable = document.getElementById('tcountries');
// const searchForm = document.querySelector('form');



// searchForm.addEventListener('submit', countryQuery);
// let searchedCountry ;
// let tableRow = document.getElementsByTagName('tr');


fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(json => {
        // console.log(json.Countries[0].Country);
        // makeList(json);
        countryData = json;
        makeTable(json);
        console.log(countryData);
    })

// function makeList(json) {
//     console.log(json);
//     json.Countries.forEach(element => {
//         console.log(element.Country);
//         let listItem = document.createElement('li');
//         listItem.innerText = element.Country + element.TotalConfirmed;
//         countryList.appendChild(listItem);
//     })
// }

function makeTable(json) {
    // console.log(json);
    json.Countries.forEach(element => {
        // console.log(element.Country);
        // console.log(json);

        let tableRow = document.createElement('tr');
        let countryInfo = document.createElement('td');
        let totalCases = document.createElement('td');
        let totalDeaths = document.createElement('td');
        let totalRecovered = document.createElement('td');
        // let demoTag = document.createElement('th');

        // demoTag.id = 'howdy';

        countryInfo.innerText = element.Country;
        // countryInfo.appendChild(tableItem);        
        
        totalCases.innerText = element.TotalConfirmed;
        // casesInfo.appendChild(tableItem);
        totalDeaths.innerText = element.TotalDeaths;
        totalRecovered.innerText = element.TotalRecovered;

        
        countryTable.appendChild(tableRow);
        // tableRow.appendChild(demoTag);
        tableRow.appendChild(countryInfo);
        tableRow.appendChild(totalCases);
        tableRow.appendChild(totalDeaths);
        tableRow.appendChild(totalRecovered);
    })
}

// function countryQuery(){
//     event.preventDefault();
//     console.log(document.getElementById('query').value);
//     let userEntry = document.getElementById('query').value;
//     userEntry = userEntry.toLowerCase();
//     console.log(userEntry);
//     // console.log('Canada'.toLowerCase() == 'canada');
//     // console.log(countryData);
//     for (currentCountry of countryData.Countries){
//         // console.log(currentCountry.Country);
//         if (currentCountry.Country.toLowerCase() == userEntry){
//             // console.log('I matched your country', currentCountry);
//             searchedCountry = currentCountry;
//             // alert('This is a poor mans modal.')//below here make real model
//             console.log(currentCountry);
//             // let para = document.createElement('p');
//             // para.appendChild(output);

//             break;
//         }
        
//     }
//     // if (searchedCountry){
//     //     alert('This is a poor mans modal.')
//     // }
// }

// function putData(){
//     if searchedData(){
//         create an element here
//         then add info from the json into the element that has been created
//     }
// }


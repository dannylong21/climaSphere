const input = document.querySelector('input');
const inputString = document.getElementById('search-input');
// SEARCH FETCH

input.addEventListener('keydown', async (event) => {
    if (event.key === "Enter"){
    try {
        const countryInfo = await fetch(`https://restcountries.com/v3.1/name/${inputString.value}/`);

 if (!countryInfo.ok) {
    throw new Error('Country not found.');
 }

 const data = await countryInfo.json();
 const country = data[0];

 console.log(country);

}

     catch (error){
        console.log(error)

    }
}})
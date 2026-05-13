

// SEARCH FETCH

const fetchData = async () => {
    const searchbarText = document.getElementById('search-input-box');
    const countryFlag = document.getElementById('flag-image');
    const countryName = document.getElementById('country-name-result');
    const popResult = document.getElementById('population-result');
    const failureText = document.getElementById('failure-text');
    const successText = document.getElementById('success-text');
    try {
        const countryInfo = await fetch(`https://restcountries.com/v3.1/name/${searchbarText.value}/`);

        // CHECK IF HTTP RESPONSE IS SUCCESSUL

        if(!countryInfo.ok){
            throw new Error(`HTTP Response Bad | Try again later or contact support.`);
            failureText.classList.remove('hidden');
        }

        const data = await countryInfo.json();

        // Console Log Messages

        console.log('Data fetched');

        // UI Conversions

        successText.classList.remove('hidden');
        countryFlag.src = `${data[0].flags.png}`;
        countryName.textContent = `${data[0].name.common}`;
        successText.innerHTML = `${data[0].name.common} was sucessfully searched`;
        popResult.innerHTML = `${data[0].name.common} has a population of ${BigInt(data[0].population).toLocaleString("en-US")}. The capital of ${data[0].name.common} is ${data[0].capital}.`;

    } catch (error) {
        console.error(`FETCH FAILED | DATA UNOBTAINED`, error.message);
        console.log(searchbarText);
        failureText.classList.remove('hidden');
    } finally {
        console.log("Overall search complete, please see any related console messages");
    }
}
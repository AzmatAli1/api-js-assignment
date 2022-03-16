const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText)
    const url = https://openapi.programming-hero.com/api/phones?search=${searchText}
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displySearchResult(data.data))
}
const displySearchResult = phone => {
    // console.log(phone);
    const searchResult = document.getElementById('search-result');
    phone.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadPhoneDetail('${phone.slug}')" class="card">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                </div>
            </div>
             `
        searchResult.appendChild(div);
    })
}
const loadPhoneDetail = id => {
    const url = https://openapi.programming-hero.com/api/phone/${id};
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.data));
        .then(data => desplyPhoneDetails(data.data));
}
const desplyPhoneDetails = details => {
    console.log(details);
    const phoneDetails = document.getElementById('phone-details');
    //console.log(details);
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${details.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${details.name}</h5>
      <p class="card-text">${details.brand}</p>
      <p class="card-text">${details.mainFeatures.storage}</p>
      <p class="card-text">${details.mainFeatures.chipSet}</p>
      <p class="card-text">${details.mainFeatures.memory}</p>
      <p class="card-text">${details.mainFeatures.sensors}</p>
      <p class="card-text">${details.releaseDate}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    phoneDetails.appendChild(div);
}
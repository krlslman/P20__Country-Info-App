/* ---  PSEOUDO CODE ---  --------------------------------------
fetchCounty (name) async func. To get the names:
	url: https://restcountries.com/v3.1/name/{name}
	try fetch url
	if no res => write dom: "sth went wrong" with a func.
renderError func. and  throw new Error();
	asign data variable from res
	call renderCountry func. w related slicing
	catch error and clg(err)
renderCountry() func. takes country and destructs it into related variables, writes with card style into inner HTML of empty countriesDiv 

fetchCountry('turkey'); //test it with this

*/
//   FLAG INFO APP

let varTemp_glob_1;
const fetchCountry = async (name) => {
	const url = `https://restcountries.com/v3.1/name/${name}`
	try {
		const res = await fetch(url);
		if (!res.ok) {
			renderError('Sth went wrong! : '+ res.status);
			throw new Error();
		}
		const data = await res.json();
		renderCountry(data[0]);
		
	} catch (error) {
		console.log(error)
	}
	// linkten ilgili ülkenin verilerini getirmeyi dener, olumlu response alamazsa dom'a yazar, olumlu cevap alırsa renderCountry fonksiyonunu çağırır, fetch'te hata alırsa clg yazar.
}


const renderError = (err) => {
	const countriesDiv = document.querySelector('.countries');
	countriesDiv.innerHTML += `
	<h1 class="text-danger">${err}</h1>
	<img src="https://www.webtekno.com/images/editor/default/0003/49/68674529551899935909208749f998525f2ebf13.jpeg" alt="" >  `
};

const renderCountry = (country) => {
	console.log(country);
	const countriesDiv = document.querySelector(".countries");
  
	const {
	  capital,
	  name: { common },
	  region,
	  flags: { svg },
	  languages,
	  currencies,
	} = country;
  
	countriesDiv.innerHTML = `
	<div class="card shadow-lg" style="width: 18rem;">
	  <img src="${svg}" class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">${common}</h5>
		<p class="card-text">${region}</p>
	  </div>
	  <ul class="list-group list-group-flush">
		<li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i> ${capital}</li>
		<li class="list-group-item"> <i class="fas fa-lg fa-comments"></i> ${Object.values(
		  languages
		)}</li>
		<li class="list-group-item"> <i class="fas fa-lg fa-money-bill-wave"></i> ${
		  Object.values(currencies)[0].name
		} (${Object.values(currencies)[0].symbol}) </li>
	  </ul>
	</div>
	`;
  };


  const countriesDiv = document.querySelector(".countries");

  const getCountry = async () => {
	const lands = await fetch("https://restcountries.com/v3.1/all");
	if (!lands.ok) {
	  renderError(`Something went wrong: ${lands.status}`);
	  throw new Error();
	}
	const data = await lands.json();
	const countryNames1 = await data.map(function (item, index) {
	  return item["name"].common;
	});
	// console.log(countryNames1);
	const countryNames = countryNames1.sort()
	// console.log(countryNames);
	countryNames.forEach((x) => {
	  nameSelector.innerHTML += `<option value=${x}>${x}</option>`
	});
  };
  
  const nameSelector = document.querySelector(".nameSelection");
  getCountry();
  
  // const a  = <option value="volvo">Volvo</option>
  
  nameSelector.addEventListener("change", (e) => {
	fetchCountry(nameSelector.value)
  })

  fetchCountry('United States')
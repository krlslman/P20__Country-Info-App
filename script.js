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
const fetchCountry = (name) => {
	url = `https://restcountries.com/v3.1/name/${name}`
	try {
		const res = await fetch(url);
		if (!res.ok) {
			renderError('Sth went wrong! : '+ res.status);
			throw new Error();
		}
		const data = res.json();
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
	const countriesDiv = document.querySelector('.countries');

	//? Destruction here:
	const { 
		flags: { svg },
		name: {common }, 
		region,
		capital,
		languages,
		currencies,
		population,
	 }  =  country;

	 // console.log(capital, common, region, svg);
	 // console.log(Object.values(languages));
	 // console.log(Object.values(currencies)[0].name);
	 // console.log(Object.values(currencies)[0].symbol);

	 countriesDiv.innerHTML += `
	<div class="card shadow-lg" style="width: 18rem;">
	 	<img class="card-img-top" src="${svg}" alt="flag-img">
	 	<div class="card-body">
	   		<h5 class="card-title">${common}</h5>
	   		<p class="card-text">${region}</p>
	 	</div>
		<ul class="list-group list-group-flush">
			<li class="list-group-item">${capital}</li>
			<li class="list-group-item">${languages}</li>
			<li class="list-group-item">${currencies}</li>
			<li class="list-group-item">${population}</li>
		</ul>
 	</div>
	 `
}



fetchCountry('turkey');


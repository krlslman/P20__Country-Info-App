/* -----  PSEOUDO  ------
fetchCounty (name) async func. To get the names:
	url: https://restcountries.com/v3.1/name/{name}
	try fetch url
	if no res => write dom: "sth went wrong" with a func.
renderError func. and  throw new Error();
	asign data variable from res
	call renderCountry func. w related slicing
	catch error and clg(err)


renderCountry() func. takes counrty and destructs it into related variables, writes with card style into inner HTML of empty countriesDiv 


fetchCountry('turkey'); //test it with this

*/

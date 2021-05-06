const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
	if (request.readyState === 4 && request.status === 200) {
		console.log(request.responseText);
	} else if (request.readyState === 4) {
		console.log("could not fetch the data");
		//since the API end point doesn't exist we are logging an error message
	}
});

request.open("GET", "https://jsonplaceholder.typicode.com/todoss");
request.send();

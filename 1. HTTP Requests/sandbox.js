const request = new XMLHttpRequest();
//XMLHttpRequest (XHR) objects are used to interact with servers.
//You can retrieve data from a URL without having to do a full page refresh.
//This enables a Web page to update just part of a page without disrupting what the user is doing.

request.addEventListener("readystatechange", () => {
	//console.log(request, request.readyState);
	if (request.readyState === 4) {
		console.log(request.responseText);
	}
});
//The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

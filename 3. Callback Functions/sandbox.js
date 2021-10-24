const getTodos = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			callback(undefined, request.responseText);
		} else if (request.readyState === 4) {
			callback("couldn't fetch data", undefined);
		}
	});

	request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
	request.send();
};

console.log(1);
console.log(2);
getTodos((err, data) => {
	console.log("callback fired !");
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});
// only the err & data messages will be printed
//  & the undefined one's wont be
console.log(3);
console.log(4);

//now to check the asnycronous nature we will log some statements and see the result.
//since getTodos is running last we can safely say it is a non blocking function

// what non-blocking means is that it wont stop the other functions from running
// and will execute when its intended operation is completed

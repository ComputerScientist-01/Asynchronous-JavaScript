const getTodos = (resource, callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.responseText);
			callback(undefined, data);
		} else if (request.readyState === 4) {
			callback("couldn't fetch data", undefined);
		}
	});
	request.open("GET", resource);
	request.send();
};

getTodos("json/luigi.json", (err, data) => {
	console.log(data);
	getTodos("json/mario.json", (err, data) => {
		console.log(data);
		getTodos("json/shaun.json", (err, data) => {
			console.log(data);
		});
	});
});

// The problem with callbacks is it creates something called “Callback Hell.”
//Basically, you start nesting functions within functions within functions,
//and it starts to get really hard to read the code.

Async functions always return a promise. This means we can use traditional promise syntax, like .then() and .catch() with our async functions. An async function will return in one of three ways:

1. If there’s nothing returned from the function, it will return a promise with a resolved value of undefined.

2. If there’s a non-promise value returned from the function, it will return a promise resolved to that value.

3. If a promise is returned from the function, it will simply return that promise


const express = require("express");
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response, next) => {

	return next(new Error("Error on purpose from root route"))

	response.json({
		message:"Hello world!"
	});
});

app.use((error, request, response, next) => {
	response.json({
		message:"Error occured!",
		error: error
	});
});


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
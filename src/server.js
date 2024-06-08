
const express = require("express");
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json());

const apiV2 = require("./v2/index.js");
app.use("/v2", apiV2);

app.use((error, request, response, next) => {
	console.log(error.message);
	response.json({
		message:"Error occured!",
		error: error.message
	});
});




module.exports = {app, port}